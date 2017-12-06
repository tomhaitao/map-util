import './Map.scss';
import T from 'utils/T';
import mapUtil from './mapUtil';
import { lines } from './testData';
import { Component } from 'react';
import {ZOOM} from "./mapUtil/LeafletUtil/constants";

export default class Map extends Component {

    componentDidMount() {
        // 初始化地图
        mapUtil.initMap('mapid');

        const L = mapUtil.L;

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

        // 绘制风环形流场
        T.request.get('/asserts/data/windy_20000.json').then((resp) => {
            const windy = mapUtil.addWindyLayer(resp.data).addTo(mapUtil.map);

            // 动态设置windy数据
            setTimeout(() => {
                T.request.get('/asserts/data/windy_10.json').then((resp) => {
                    windy.setData(resp.data)
                })
            }, 4000)
        });

        // 添加高德路网图
        const GaoDeAnnotion = L.tileLayer.tileServiceProvider('GaoDe.Satellite.Annotion', ZOOM);
        mapUtil.map.addLayer(GaoDeAnnotion);

        // 删除路网图
        mapUtil.map.removeLayer(GaoDeAnnotion);

    }

    render() {
        return (
            <div className="leaflet-map">
                <div id="mapid"></div>
            </div>
        );
    }
}
