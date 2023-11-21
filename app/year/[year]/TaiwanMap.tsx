
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
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

    const width = 900;
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
        .scale(6000)
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
            .on('click', (event, data) => {
              console.log(data);
              document.querySelector('h2')!.textContent = data.properties.COUNTYNAME;
              document.querySelector('h3')!.textContent = data.properties.COUNTYENG;

              const activeElement = document.querySelector('.active');
              if (activeElement) {
                activeElement.classList.remove('active');
              }

              const cityElement = document.getElementById('city' + data.properties.COUNTYCODE);
              if (cityElement) {
                cityElement.classList.add('active');
              }
            });
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
      </div>
      <div className="shop-list">
        <h2></h2>
        <h3></h3>
      </div>
    </div>
  );
};


