import React, { useEffect, useMemo, useRef } from "react";
import * as geojson from "geojson";
import * as L from "leaflet";
import styles from './section-two.module.css';
import { GeoJSON, MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { review_data } from './data';
import { toGeoJSON } from "../../utils";
import Plotly from 'plotly.js-dist-min'

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
        }).on('mouseover', function (ev) {
            console.log('ev', ev.target.defaultOptions.color);
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

    useEffect(() => {
        var trace1 = {
            x: [-0.858927762914, 0.121607854144, -0.0678156933388], y: [-0.100387678599, 0.14252201109, -0.0850216981743], z: [1.6178351592, 0.671663712413, 0.676541754404],
            mode: 'markers',
            marker: {
                size: 12,
                line: {
                    color: 'rgba(217, 217, 217, 0.14)',
                    width: 0.5
                },
                opacity: 0.8
            },
            type: 'scatter3d'
        };

        var trace2 = {
            x: [0.671663712413, 0.676541754404, 1.6178351592], y: [-0.841098362432, 0.14252201109, 1.67084933716], z: [-0.841098362432, 0.671663712413, 0.676541754404],
            mode: 'markers',
            marker: {
                color: 'rgb(127, 127, 127)',
                size: 12,
                symbol: 'circle',
                line: {
                    color: 'rgb(204, 204, 204)',
                    width: 1
                },
                opacity: 0.8
            },
            type: 'scatter3d'
        };

        var data = [trace1, trace2];
        var layout = {
            margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 0
            }
        };
        //@ts-ignore
        Plotly.newPlot('myDiv', data, layout);
    }, [])

    return (
        <section className={styles.sectionTwo}>
            {/* {displayMap} */}
            <div id='myDiv' style={{ height: '400px', width: '300px', background: 'orange' }}></div>
        </section>
    );
};

export default SectionTwo;
