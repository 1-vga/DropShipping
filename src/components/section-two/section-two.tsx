import React, { useMemo, useRef } from "react";
import * as geojson from "geojson";
import * as L from "leaflet";
import styles from './section-two.module.css';
import { GeoJSON, MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { review_data } from './data';
import { toGeoJSON } from "../../utils";

interface Props {
}

const SectionTwo: React.FC<Props> = (props) => {
    const geoJsonLayerRef = useRef<any>(null);

    const pointLayerHandler = (geoJsonPoint: geojson.Feature<geojson.GeometryObject>, latlng: L.LatLngExpression) => {

        
        
        const usualMarker = L.icon({
          iconUrl: '',
          iconSize: [34, 34],
          iconAnchor: [15, 32],
          popupAnchor: [-3, -60], // @ts-ignore
          className: 'jsjs'
        });
        var myRenderer = L.canvas({ padding: 0.5 });

        function componentToHex(c: number) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }
        
        const rgbToHex = (r: number, g: number, b: number) => "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        
        // @ts-ignore
        return L.circle(geoJsonPoint.geometry.coordinates, {
            // renderer: myRenderer,
             // @ts-ignore
            color: rgbToHex(...geoJsonPoint.properties.color)
        }).on('mouseover',function(ev) {
            console.log('ev' ,ev.target.defaultOptions.color);
          });
      };

    const displayMap = useMemo(
        () => (
            <MapContainer 
            center={[51.505, -0.09]} 
            zoom={1} 
            scrollWheelZoom
            style={{ height: "220px", width: "100%" }}
            zoomControl={false}
            >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON ref={geoJsonLayerRef} data={toGeoJSON(review_data)} pointToLayer={pointLayerHandler} />
            </MapContainer>
        ),
        [],
      );

    return (
        <section className={styles.sectionTwo}>
            {displayMap}
        </section>
    );
};

export default SectionTwo;
