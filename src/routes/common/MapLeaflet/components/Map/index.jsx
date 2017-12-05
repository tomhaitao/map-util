import './Map.scss';
import mapUtil from './mapUtil';
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

        //
        /*for(let i = 0; i < 200; i++){
            for(let j = 0; j < 100; j++) {
                // mapUtil.drawMarker([j, 120.29]);
                mapUtil.drawCircleMarker([j, 122.68]);
                mapUtil.drawPolyline([
                    [j, 122.68],
                    [j +1, 122.43],
                    [j +2, 118.2]
                ]);
            }
        }*/


        mapUtil.drawPolyline([
            [45.51, 122.68],
            [37.77, 122.43],
            [34.04, 118.2]
        ]);

        // 鼠标绘制矩形到地图
        // mapUtil.mouseTool.rectangle().then((resp) => console.log(resp));
    }

    render() {
        return (
            <div className="leaflet-map">
                <div id="mapid"></div>
            </div>
        );
    }
}
