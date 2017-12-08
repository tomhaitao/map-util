import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import IconMarker from './img/marker.png';

// 加载切片服务配置
import "./extend/tileServiceProvider";
// 加载鼠标工具
import MouseTool from './extend/mouseTool';
// 加载风速layer
import "./extend/windyVelocity";

// 加载mapUtil枚举文件
import { ZOOM, CENTER } from './constants';

/**
 * Leaflet 地图工具类
 */
export default class LeafletUtil {
    constructor() {
        this.L = L;         // 绑定Leaflet对象
        this.map = null;    // 地图实例
        this.mouseTool = null;
    }

    /**
     * 初始化地图
     * @param {String} mapId    地图容器id
     * @param {Object} options  地图配置
     * @returns {null|*}
     */
    initMap(mapId, options = {}) {
        this.map = L.map(mapId, Object.assign({
            center: CENTER,
            zoom: ZOOM.minZoom,
            layers: [L.tileLayer.tileServiceProvider('Google.Satellite.Map', ZOOM)],
            zoomControl: false,
            doubleClickZoom: false,
            renderer: L.canvas()
            // renderer: L.svg()
        }, options));

        this.mouseTool = new MouseTool(this.map, this.L);
        return this.map;
    }

    /**
     * 清空地图
     * @param {Array} keepLayers 需要保留的layer [layerIns]
     */
    clearMap(keepLayers = []) {
        this.mouseTool.measure.clear();

        setTimeout(() => {
            this.map.eachLayer((layer) => {
                if (keepLayers.indexOf(layer) === -1) {
                    layer.remove();
                }
            })
        }, 0)
    }

    /**
     * 添加WMS切片到地图中
     * @param {String} url WMS服务地址
     * @param {Object} options 配置说明： http://leafletjs.com/reference-1.2.0.html#tilelayer-wms
     * @returns {*}
     */
    addWMStile(url, options = {}) {
        const wmsTileLayer = L.tileLayer.wms(url, Object.assign({
            layers: '',
            format: 'image/png',
            transparent: true,
            version: '',
            styles: '',
        }, options));

        this.map.addLayer(wmsTileLayer);

        return wmsTileLayer;
    }

    /**
     * 依据经纬度获取距离
     * @param {Array} start 起点坐标 [lat, lng]
     * @param {Array} end 终点坐标 [lat, lng]
     * @returns {number} 单位是: "米"
     */
    getDistanceByLatLng (start, end) {
        return this.map.distance(start,end);
    }


    /**
     * 绘制点到地图
     * @param {Array} latlngs [lat, lng]
     * @param {Object} options  配置说明： http://leafletjs.com/reference-1.2.0.html#marker
     * @returns {*}
     */
    drawMarker(latlngs, options = {}){
       return L.marker(latlngs, Object.assign({
            icon: L.icon({
                iconUrl: IconMarker,
                iconSize: [16, 16],
                // iconAnchor: [16, 16],
            })
        }, options)).addTo(this.map);
    }

    /**
     * 绘制折线到地图
     * @param latlngs [[lat1, lng1], [lat2, lng2],...]
     * @param options
     * @returns {*}
     */
    drawPolyline(latlngs, options = {}) {
        return L.polyline(latlngs, Object.assign({
            color: '#FFFF00',
            weight: 1,
        }, options)).addTo(this.map)
    }

    /**
     * 绘制圆点标记到地图
     * @param latlngs [lat, lng]
     * @param options 配置说明：http://leafletjs.com/reference-1.2.0.html#circlemarker
     * @returns {*}
     */
    drawCircleMarker(latlngs, options = {}) {
        return L.circleMarker(L.latLng(latlngs[0], latlngs[1]), Object.assign({
            radius: 1,
            color: 'green',
            fillColor: 'green',
            fillOpacity: 1
        }, options)).addTo(this.map)
    }

}

