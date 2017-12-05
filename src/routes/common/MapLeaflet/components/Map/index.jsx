import './Map.scss';
import mapUtil from './mapUtil';
import { lines } from './testData';
import { Component } from 'react';

export default class Map extends Component {

    componentDidMount() {
        // 初始化地图
        mapUtil.initMap('mapid');

        // 添加WMS切片到地图中
        // mapUtil.addWMStile('http://10.0.4.235:8080/geoserver/opengeo/wms', {
        //     layers: 'opengeo:a_2016101306',
        //     format: 'image/png',
        //     transparent: true,
        //     version: '1.3.0',
        //     styles: '',
        //     attribution: "Weather data © 2012 IEM Nexrad"
        // });

        // 绘制点到地图中
        mapUtil.drawMarker([31.59, 120.29]);


        /*mapUtil.map.on('layeradd', (e) => {
            mapUtil.map.removeLayer(e.layer)
        })

        mapUtil.map.on('overlayadd', (e) => {
            console.log(e)
            // mapUtil.map.removeLayer(e.layer)
        })*/

        // 绘制台风到地图
        mapUtil.drawTyphoon(lines);
        console.log(mapUtil.map)
        // mapUtil.map.addLayer(mapUtil.createLayer());
    }

    render() {
        return (
            <div className="leaflet-map">
                <div id="mapid"></div>
            </div>
        );
    }
}
