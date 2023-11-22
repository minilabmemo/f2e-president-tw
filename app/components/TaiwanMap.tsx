
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { calcKeyVotingResults, calcVotingResults } from '../utility/city';
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
export default function TaiwanMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const hasFetchedData = useRef(false); // 新增一個 ref 來追蹤是否已經獲取過數據


  useEffect(() => {
    const res = calcKeyVotingResults;
    const width = 600;
    const height = 800;

    if (!hasFetchedData.current) { // 只有在尚未獲取數據的情況下執行
      console.log("🚀 ~ file: TaiwanMap.tsx:18 ~ useEffect ~ useEffect:", hasFetchedData.current)

      const svg = d3
        .select(mapRef.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('id', 'svg');


      const projection = d3.geoMercator()
        .scale(8000)
        .center([121, 24])
        .translate([width / 3, height / 2]);

      const pathGenerator = d3.geoPath().projection(projection);
      hasFetchedData.current = true;
      fetch("/taiwan.geojson") // 讀取在/public 下的資源
        .then(response => response.json())
        .then(data => {
          const taiwanGeoJSON: GeoJSONFeature[] = data.features;
          svg
            .selectAll('path')
            .data(taiwanGeoJSON)
            .enter()
            .append('path')
            .attr('d', (d: any) => pathGenerator(d.geometry)!)
            .attr('id', (d: any) => 'city' + d.properties.COUNTYCODE)

            .attr('class', (d: any) => {
              const select = res.get(d.properties.COUNTYNAME);
              const color = `fill-${select?.value.勝出.color || "gray-200"}`;
              return color
            })
            .on('click', (event, data) => {
              const keyToFind: string = data.properties.COUNTYNAME; // Ensure keyToFind is of type string
              const vote = res.get(data.properties.COUNTYNAME);
              const color = `fill-${vote?.value.勝出.color || "gray-200"}`;
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
            .text((d: any) => d.properties.COUNTYNAME)
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .attr('class', 'text-base font-bold font-inter w-[28px] h-[20px] outlined-text  text-white')
            .style("fill", "white")



        })

        .catch(error => {
          console.error('Error loading GeoJSON data:', error);
        });
      return () => {
        svg.selectAll('path').remove();

      };
    }
  });

  return (
    <div className="container-map">
      <div className="taiwan-map">
        <div ref={mapRef} id="map"></div>
        <div className='fill-orange-150 '></div>
        <div className='fill-green-150'></div>
      </div>

    </div>
  );
};


