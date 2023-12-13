
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { calcKeyVoteWinCity } from '@/app/utils/city';
import { useRouter } from 'next/navigation'
interface GeoJSONProperties {
  COUNTYCODE: string;
  COUNTYNAME: string;
  COUNTYENG: string;
}

interface GeoJSONGeometry {
  type: string;
  coordinates: number[][][] | number[][][][];
}

interface GeoJSONFeature {
  properties: GeoJSONProperties;
  geometry: GeoJSONGeometry;
  type: string;
}

interface GeoJSON {
  type: string;
  features: GeoJSONFeature[];

}
function calcScale(area: string | undefined) {
  let mercatorScale, w = window.screen.width;
  if (w > 1366) { mercatorScale = 11000; }
  else if (w <= 1366 && w > 480) { mercatorScale = 9000; }
  else { mercatorScale = 6000; }
  mercatorScale = 10000// FIXME need test
  if (area) {
    mercatorScale = 25000
    const mCities = ["臺南市", "雲林縣", "苗栗縣", "彰化縣"];
    if (mCities.includes(area)) {
      mercatorScale = 30000
    }
    const sCities = ["臺北市", "基隆市", "新竹市", "嘉義市", "連江縣", "澎湖縣"];
    if (sCities.includes(area)) {
      mercatorScale = 60000
    }
    const xsCities = ["金門縣"];
    if (xsCities.includes(area)) {
      mercatorScale = 20000

    }
  }


  return mercatorScale;
}



export default function TaiwanMap({ year, reverse, mapPath, area }: { year: string, reverse: boolean, mapPath: string, area?: string }) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  useEffect(() => {
    const res = calcKeyVoteWinCity(year);

    let mercatorScale = calcScale(area);
    const width = (mapRef.current)?.offsetWidth || 0;
    const height = (mapRef.current)?.offsetHeight || 0;

    d3.select(mapRef.current).select('svg').remove();
    const svg = d3
      .select(mapRef.current)
      .append('svg')
      .attr('id', 'svg')
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr('viewBox', `0 0 ${width} ${height}`);
    const centerW = 121;
    const centerH = 24;
    const projection = d3.geoMercator()
      .scale(mercatorScale)
      .center([centerW, centerH])
      .translate([width / 2, height / 2.5])


    const pathGenerator = d3.geoPath().projection(projection);

    fetch(mapPath)
      .then(response => response.json())
      .then(data => {
        const alltaiwanGeoJSON: GeoJSON = area
          ? { type: 'FeatureCollection', features: data.features.filter((d: { properties: { COUNTYNAME: string; }; }) => [area].includes(d.properties.COUNTYNAME)) }
          : { type: 'FeatureCollection', features: data.features };

        const taiwanGeoJSON = alltaiwanGeoJSON.features;
        let filteredTaiwanGeoJSON = taiwanGeoJSON;
        if (!area) {
          filteredTaiwanGeoJSON = taiwanGeoJSON.filter(d => !["連江縣", "澎湖縣", "金門縣"].includes(d.properties.COUNTYNAME));
        }


        if (reverse) { //經測試某些方向會造成填充異常
          filteredTaiwanGeoJSON.forEach(feature => {
            feature.geometry.coordinates.reverse();
            if (Array.isArray(feature.geometry.coordinates[0])) {
              feature.geometry.coordinates.forEach(subArray => {
                subArray.reverse();
              });
            }
          });
        }
        let xOffset = 0;
        let yOffset = 0;
        if (area) { //調整中心點位移
          const bounds = (d3.geoPath().bounds(alltaiwanGeoJSON as any)) as [[number, number], [number, number]];
          const centerX = (bounds[0][0] + bounds[1][0]) / 2;
          const centerY = (bounds[0][1] + bounds[1][1]) / 2;
          const centerScreenCoordinates = projection([centerW, centerH]);
          const mapHCoordinates = projection([centerX, centerY]);
          if (centerScreenCoordinates !== null && mapHCoordinates !== null) {
            xOffset = centerScreenCoordinates[0] - mapHCoordinates[0]
            yOffset = centerScreenCoordinates[1] - mapHCoordinates[1]
          }
        }
        svg
          .selectAll('path')
          .data(filteredTaiwanGeoJSON)
          .enter()
          .append('path')
          .attr('transform', `translate(${xOffset}, ${yOffset}) `)
          .attr('d', (d: any) => pathGenerator(d.geometry)!)
          .attr('id', (d: any) => 'city' + d.properties.COUNTYCODE)
          .attr('name', (d: any) => 'city' + d.properties.COUNTYNAME)
          .attr('class', (d: any) => {
            const select = res.get(d.properties.COUNTYNAME);
            const color = `fill-${select?.value.winner.color || "gray-200"}`;
            return color
          })

          .attr('stroke', 'white')
          .attr('stroke-width', 2)
          .on('mouseover', (event, data) => {
            if (!area) {
              d3.select(`#city${data.properties.COUNTYCODE}`)
                .attr('class', null)
                .attr('class', 'fill-red-200 -translate-y-0.5')
            }
          })
          .on('mouseout', (event, data) => {
            if (!area) {
              const select = res.get(data.properties.COUNTYNAME);
              const color = `fill-${select?.value.winner.color || "gray-200"}`;
              d3.select(`#city${data.properties.COUNTYCODE}`)
                .attr('class', null)
                .attr('class', `${color} -translate-y-0	`)
            }
          })
          .on('click', (event, data) => {
            if (!area) {
              router.push(`/year/${year}?city=${data.properties.COUNTYNAME}`)
            }
          });
        svg
          .selectAll('text')
          .data(taiwanGeoJSON)
          .enter()
          .append('text')
          .attr('transform', `translate(${xOffset}, ${yOffset})`)
          .attr('x', (d: any) => pathGenerator.centroid(d.geometry)[0])
          .attr('y', (d: any) => pathGenerator.centroid(d.geometry)[1])
          .text((d: any) => { return area ? d.properties.TOWNNAME : d.properties.COUNTYNAME; })
          .attr('id', (d: any) => 'city-text' + d.properties.COUNTYCODE)
          .attr('text-anchor', 'middle')
          .attr('alignment-baseline', 'middle')
          .attr('class', 'text-xs font-bold font-inter w-[28px] h-[20px] outlined-text  text-white')
          .style("fill", "white")
          .on('mouseover', (event, data) => {
            if (!area) {
              d3.select(`#city${data.properties.COUNTYCODE}`)
                .attr('class', null)
                .attr('class', 'fill-red-200 -translate-y-0.5')
              d3.select(`#city-text${data.properties.COUNTYCODE}`)
                .attr('class', null)
                .attr('class', 'text-s font-bold font-inter w-[28px] h-[20px] outlined-text  text-white')
            }
          })
          .on('mouseout', (event, data) => {
            if (!area) {
              const select = res.get(data.properties.COUNTYNAME);
              const color = `fill-${select?.value.winner.color || "gray-200"}`;
              d3.select(`#city${data.properties.COUNTYCODE}`)
                .attr('class', null)
                .attr('class', `${color} -translate-y-0	`)
              d3.select(`#city-text${data.properties.COUNTYCODE}`)
                .attr('class', null)
                .attr('class', 'text-xs font-bold font-inter w-[28px] h-[20px] outlined-text  text-white')

            }
          })
          .on('click', (event, data) => {
            if (!area) {
              router.push(`/year/${year}?city=${data.properties.COUNTYNAME}`)
            }
          });



      })

      .catch(error => {
        console.error('Error loading GeoJSON data:', error);
      });
    return () => {
      svg.selectAll('path').remove();

    };

  });

  return (
    <>
      <div className="h-full w-full  bg-blue-50 flex justify-center items-center select-none">
        <div ref={mapRef} id="map" className="h-full w-full  flex justify-center items-center overflow-hidden"></div>
      </div>


    </>
  );
};


