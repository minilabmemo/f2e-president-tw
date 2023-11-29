
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { calcKeyVoteWinCity } from '../utility/city';
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
}
function calcScale(area: string | undefined) {
  let mercatorScale, w = window.screen.width;
  if (w > 1366) { mercatorScale = 11000; }
  else if (w <= 1366 && w > 480) { mercatorScale = 9000; }
  else { mercatorScale = 6000; }
  mercatorScale = 12000// FIXME need test

  return mercatorScale;
}



export default function TaiwanMap({ year, reverse, mapPath, area }: { year: string, reverse: boolean, mapPath: string, area?: string }) {
  const mapRef = useRef<HTMLDivElement | null>(null);

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



    const projection = d3.geoMercator()
      .scale(mercatorScale)
      .center([121, 24])
      .translate([width / 2, height / 2.5])


    const pathGenerator = d3.geoPath().projection(projection);

    fetch(mapPath)
      .then(response => response.json())
      .then(data => {
        const alltaiwanGeoJSON = area
          ? { type: 'FeatureCollection', features: data.features.filter(d => [area].includes(d.properties.COUNTYNAME)) }
          : { type: 'FeatureCollection', features: data.features };

        const taiwanGeoJSON = alltaiwanGeoJSON.features;
        const filteredTaiwanGeoJSON = taiwanGeoJSON.filter(d => !["連江縣", "澎湖縣"].includes(d.properties.COUNTYNAME));
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
        svg
          .selectAll('path')
          .data(filteredTaiwanGeoJSON)
          .enter()
          .append('path')
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
            d3.select(`#city${data.properties.COUNTYCODE}`)
              .attr('class', null)
              .attr('class', 'fill-red-200 -translate-y-0.5')

          })
          .on('mouseout', (event, data) => {
            const select = res.get(data.properties.COUNTYNAME);
            const color = `fill-${select?.value.winner.color || "gray-200"}`;
            d3.select(`#city${data.properties.COUNTYCODE}`)
              .attr('class', null)
              .attr('class', `${color} -translate-y-0	`)


          })
          .on('click', (event, data) => {
            const keyToFind: string = data.properties.COUNTYNAME; // Ensure keyToFind is of type string
            const vote = res.get(data.properties.COUNTYNAME);
            const color = `fill-${vote?.value.winner.color || "gray-200"}`;
            console.log(color);
            console.log(res.get(keyToFind));
          });
        svg
          .selectAll('text')
          .data(taiwanGeoJSON)
          .enter()
          .append('text')
          .attr('x', (d: any) => pathGenerator.centroid(d.geometry)[0])
          .attr('y', (d: any) => pathGenerator.centroid(d.geometry)[1])
          .text((d: any) => { return area ? d.properties.TOWNNAME : d.properties.COUNTYNAME; })
          .attr('text-anchor', 'middle')
          .attr('alignment-baseline', 'middle')
          .attr('class', 'text-xs font-bold font-inter w-[28px] h-[20px] outlined-text  text-white')
          .style("fill", "white")



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
      <div className=" h-full w-full bg-blue-50 flex justify-center items-center select-none">
        <div ref={mapRef} id="map" className=" h-full w-full flex justify-center items-center overflow-hidden"></div>
      </div>


    </>
  );
};


