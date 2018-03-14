import './Map.scss';
import T from 'utils/T';
import mapUtil from './mapUtil';
import { lines } from './testData';
import { Component } from 'react';
import {ZOOM} from "./mapUtil/LeafletUtil/constants";
import IconMarker from './mapUtil/LeafletUtil/img/marker.png';

export default class Map extends Component {

    componentDidMount() {
        // 初始化地图
        mapUtil.initMap('mapid', {
            crs:mapUtil.L.CRS.EPSG3857
        });

        const L = mapUtil.L;
        const map = mapUtil.map;

        // 添加WMS切片到地图中
        // mapUtil.addWMStile('http://10.0.4.40:8080/geoserver/opengeo/wms', {
        //     layers: 'datasci_geo:contour_2016101306',
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
        // mapUtil.drawTyphoon(lines);

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

        //-----以下是鼠标相关的操作-----

        // 开启测距
        // mapUtil.mouseTool.measure.start();

        // 清空测距
        // setTimeout(() => {
        //     mapUtil.mouseTool.measure.clear();
        //     console.log('measure clear');
        // }, 5000)


        // mapUtil.mouseTool.rectangle().then(resp => console.log(resp));
        // mapUtil.mouseTool.circle().then(resp => console.log(resp));
        // mapUtil.mouseTool.polygon().then(resp => console.log(resp));
        // mapUtil.mouseTool.polyline().then(resp => console.log(resp));
        // mapUtil.mouseTool.marker().then(resp => console.log(resp));

        // 关闭鼠标
        // setTimeout(() => {
        //     mapUtil.mouseTool.close();
        // }, 2000)


        //-----test移动marker-----
        (() => {
            // const parisKievLL = [[48.8567, 2.3508], [50.45, 30.523333]];
            const parisKievLL = [[51.507222, -0.1275], [48.8567, 2.3508],[41.9, 12.5], [52.516667, 13.383333], [44.4166,26.1]];
            /**
             * 第二个参数使用说明：
             * 数组： 代表每条折线移动完成所需要的时间
             * 数字： 代表全路程所需要的时间
             */
            const marker1 = L.Marker.movingMarker(parisKievLL, [3000, 9000, 9000, 4000], {
                icon: L.icon({
                    iconUrl: IconMarker,
                    iconSize: [16, 16],
                    iconAnchor: [16, 16],
                })}).addTo(map);

            L.polyline(parisKievLL).addTo(map);

            marker1.once('click', function () {
                marker1.start();
                marker1.closePopup();
                marker1.unbindPopup();
                marker1.on('click', function() {
                    if (marker1.isRunning()) {
                        marker1.pause();
                    } else {
                        marker1.start();
                    }
                });

                setTimeout(function() {
                    marker1.bindPopup('<b>Click me to pause !</b>').openPopup();
                }, 2000);
            });

            marker1.bindPopup('<b>Click me to start !</b>', {closeOnClick: false});
            marker1.openPopup();
        })()


    }

    render() {
        return (
            <div className="leaflet-map">
                <div id="mapid"></div>
            </div>
        );
    }
}
