
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";

interface StreetMapData {
  id: string;
  initZoom: number;

}

const TaipeiCenter = [25.03418, 121.564517];
const TaiwanCenter = [23.6978, 120.9605];

export const StreetMap: React.FC<StreetMapData> = ({ id, initZoom }) => {

  const lastCenterRef = useRef<[number, number]>([23.6978, 120.9605]); // 初始化中心點
  const mapRef = useRef<L.Map | null>(null);
  const zoomRef = useRef(initZoom); //  0 - 18，值越大越近

  useEffect(() => {


    if (!mapRef.current) {
      const map = L.map(id, {
        zoomControl: false,
      }).setView(lastCenterRef.current, zoomRef.current);

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      mapRef.current = map;

    } else {
      lastCenterRef.current = [mapRef.current.getCenter().lat, mapRef.current.getCenter().lng];
    }




    return () => {
      //   if (mapRef.current) {
      //     mapRef.current.removeLayer(polyline);
      //   }
      //   markersFarToShow.forEach((marker) => {
      //     if (mapRef.current && mapRef.current.hasLayer(marker)) {
      //       mapRef.current.removeLayer(marker);
      //     }

      //   });

      //   markersNearToShow.forEach((marker) => {
      //     if (mapRef.current) {
      //       mapRef.current.removeLayer(marker);
      //     }
      //   });
      //   markersFarToShow.length = 0; // 上面的重新宣告沒用，要在這邊清空數組才行，不然會重複新舊資料
      //   markersNearToShow.length = 0;
      //   lineCoordinates.length = 0;
    };
  }, [id, lastCenterRef]);




  return <div id={id} style={{ height: "100%", width: "100%", maxWidth: "100%" }} >

  </div>

};
