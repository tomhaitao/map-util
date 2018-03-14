/**
 * Created by chencheng on 2017/6/22.
 */
import T from 'utils/T';
import Windy from 'utils/core/windy';
import moment from 'moment';
import { EnumTyphoonGradeSign } from 'constants/universalEnumType'
import {TileLnglatTransformGaode} from 'tj-tile-lnglat-transform';

import {
    NONE_IMAGE,
    ZOOM,
    CENTER,
    FEATURES,
    EnumMapMarkShape,
    LAYER_TYPES,
    LAYER_MAP,
    MARKER_STYLE,
    POLYGON_STYLE,
    RECTANGLE_STYLE ,
    CIRCLE_STYLE,
    POLYGON_LINE_STYLE
} from './map';

const getMapTool = () => {
    return new Promise((resolve,reject) => {
        AMap.plugin(['AMap.Scale','AMap.MouseTool','AMap.CustomLayer'], () => {
            resolve({
                Scale:AMap.Scale,
                MouseTool:AMap.MouseTool,
                CustomLayer:AMap.CustomLayer,
            });

        },(e)=>{
            reject(e);
        })
    })
}

const getPointSimplifier = () => {
    return new Promise((resolve,reject) => {
        AMapUI.load(['ui/misc/PointSimplifier', 'lib/$'], (PointSimplifier, $) => {
            resolve(PointSimplifier)
        },(e)=>{
            reject(e)
        })
    })
}

const getPathSimplifier = () => {
    return new Promise((resolve,reject) => {
        AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], (PathSimplifier, $) => {
            resolve(PathSimplifier)
        },(e)=>{
            reject(e)
        })
    })
};

class MapUtil {

    constructor(){
        this.initLayers = {};
        this.preMapDrawEvent = null;
        this.typhoonPointSimplifierIns = null;          //台风点对象
        this.typhoonPointCoordinateToInfoMap = {};      //台风点坐标与信息的mapping

        this.typhoonPathSimplifierIns = null;           //台风轨迹对象
        this.typhoonPathCount = 0;                      //台风轨迹条数
        this.typhoonPathNavigator = [];                 //台风轨迹巡航实例

        this.mapInstances = {
            map:null,                   //地图实例
            mouseTool:null,             //鼠标手势实例
            groundImage:null,
        };

        this.windyLayer = null;         //自定义台风图层
        this.windy = null;              // 风实例
    }

    /**
     * 初始化地图参数
     * @param callback
     */
    initMap(callback){
        const self = this;
        const map = new AMap.Map('map',{
            center: [117.000923, 36.675807],
            zoom: ZOOM,
            features:FEATURES,
            zooms: [ZOOM.minZoom, ZOOM.maxZoom]
        });

        this.mapInstances.map = map;

        // 设置缩放级别和中心点
        map.setZoomAndCenter(ZOOM, [CENTER[0],CENTER[1]]);

        //默认显示卫星图层和路网图层
        map.setLayers([
            this.getMapLayerInstance(self.map, LAYER_TYPES.satellite),
            this.getMapLayerInstance(self.map, LAYER_TYPES.roadNet)
        ]);

        Promise.all([getMapTool(),getPointSimplifier(),getPathSimplifier()]).then((resp) => {
            const [AMapTool,PointSimplifier,PathSimplifier] = resp;

            //添加比例尺
            map.addControl(new AMapTool.Scale());

            //添加鼠标工具
            const mouseTool = new AMapTool.MouseTool(map);
            this.mapInstances.mouseTool = mouseTool;

            //添加图片覆盖物
            const mapCoordinates = new AMap.Bounds([-180,-90],[180,90]);
            this.mapInstances.groundImage = new AMap.GroundImage(NONE_IMAGE,mapCoordinates,{
                map:map,
                opacity:0.6
            });

            //实例化台风点
            this.typhoonPointSimplifierIns = new PointSimplifier({
                zIndex: 6,
                autoSetFitView: false,
                map: map, //所属的地图实例
                getPosition: function(item) {
                    if (!item) {
                        return null;
                    }
                    const parts = item.split(',');
                    return [parseFloat(parts[0]), parseFloat(parts[1])];
                },

                getHoverTitle: function(dataItem, idx) {
                    if(self.typhoonPointCoordinateToInfoMap[dataItem]) {
                        return '名称: ' + self.typhoonPointCoordinateToInfoMap[dataItem]['typhoonPoint']['engname'];
                    }
                    return null;
                },

                //使用GroupStyleRender
                renderConstructor: PointSimplifier.Render.Canvas.GroupStyleRender,
                renderOptions: {
                    eventSupport:true,
                    drawShadowPoint:true,

                    getGroupId: (item, idx) => {
                        if(self.typhoonPointCoordinateToInfoMap[item]) {
                            const typhoonPointInfo = self.typhoonPointCoordinateToInfoMap[item]['typhoonPoint'];
                            if (typhoonPointInfo) {
                                return typhoonPointInfo.strength;
                            }
                        }
                        return null;
                    },
                    groupStyleOptions: (gid) => {
                        let size = 5;
                        return {
                            pointStyle: {
                                //content: gid % 2 ? 'circle' : 'rect',
                                fillStyle: EnumTyphoonGradeSign[gid] ? EnumTyphoonGradeSign[gid].color : "#fff",
                                width: size,
                                height: size
                            },
                            pointHardcoreStyle: {
                                width: size - 2,
                                height: size - 2
                            }
                        };
                    }
                }
            })

            this.PathSimplifier = PathSimplifier;

            //实例化台风轨迹
            this.typhoonPathSimplifierIns = new PathSimplifier({
                zIndex: 5,
                autoSetFitView:false,
                map: map, //所属的地图实例
                getHoverTitle:() => null,
                getPath: (pathData, pathIndex) => pathData.path,

                renderOptions: {
                    renderAllPointsIfNumberBelow: 100, //绘制路线节点，如不需要可设置为-1
                    keyPointStyle:{
                        radius:  0, // 点的半径
                        fillStyle: "rgba(0,0,0,0)", //  填充色，比如 red, rgb(255,0,0), rgba(0,0,0,1)等
                        lineWidth: 0 //描边宽度
                    },
                    pathLineStyle:{
                        strokeStyle:"#FFFF00", //线颜色，比如 red, rgb(255,0,0), rgba(0,0,0,1)等
                        lineWidth:1,       //线宽度
                        borderStyle:"#FFFF00",     //描边颜色
                        borderWidth:"",     //描边宽度
                        dirArrowStyle:"",   //方向箭头样式，lineWidth>=4 时有效
                    },
                    pathLineSelectedStyle:{
                        strokeStyle:"red", //线颜色，比如 red, rgb(255,0,0), rgba(0,0,0,1)等
                        lineWidth:1,       //线宽度
                        borderStyle:"#ffffff",     //描边颜色
                        borderWidth:1,     //描边宽度
                        dirArrowStyle:"",   //方向箭头样式，lineWidth>=4 时有效

                    }
                }
            });

            T.lodash.isFunction(callback) && callback(map,mouseTool);
        },(e) => {
            console.log(e)
        });
    }

    /**
     * 清空地图
     */
    clearMap(){
        const { map, mouseTool } = this.mapInstances;
        map && map.clearMap();
        mouseTool && mouseTool.close(true);
        //清除台风点
        if(this.typhoonPointSimplifierIns) {
            this.typhoonPointSimplifierIns.hide();
            this.typhoonPointSimplifierIns.setData([]);
        }

        //清除台风轨迹线
        if(this.typhoonPathSimplifierIns){
            this.typhoonPathSimplifierIns.hide();
            this.typhoonPathSimplifierIns.setData([]);
        }
    }
    /**
     * 将世界时转换为北京时
     */
    worldTimeToBeijing(worldTime) {
        return moment(worldTime).add(8, 'hours').format('YYYY-MM-DD HH:mm');
    }
    /**
     * 关闭鼠标工具行为
     */
    closeMouseToolBehavior(){
        const { map, mouseTool } = this.mapInstances;
        if(!map || !mouseTool) return false;

        mouseTool.close();
        map.setDefaultCursor("move"); // 还原鼠标形状
    }

    /**
     * 设置图片覆盖物
     * @param url
     * @param opacity
     */
    setMapGroundImage(url,opacity = 0.6){
        this.mapInstances.groundImage.setOpacity(opacity);
        this.mapInstances.groundImage.setImageUrl(url);
    }

    /**
     * 绘制风资源到地图上
     * @param {Object} windyData
     */
    drawWindyToMap(windyData){
        const map = this.mapInstances.map;
        if(!this.windyLayer && !this.windy) {
            const canvas = document.createElement('canvas');
            canvas.width = map.getSize().width;
            canvas.height = map.getSize().height;

            if (this.windyLayer) {
                this.windyLayer.hide();
            }

            this.windy = new Windy({canvas: canvas, data: windyData});

            this.windyLayer = new AMap.CustomLayer(canvas, {
                zooms: [ZOOM.minZoom, ZOOM.maxZoom],
                zIndex: 5
            });

            let timer = null;
            this.windyLayer.render = () => {
                this.windy.stop();
                const bounds = map.getBounds();
                window.clearTimeout(timer);
                timer = setTimeout(() => {
                    this.windy.start(
                        [[0, 0], [canvas.width, canvas.height]],
                        canvas.width,
                        canvas.height,
                        [[bounds.southwest.lng, bounds.southwest.lat], [bounds.northeast.lng, bounds.northeast.lat]]
                    )
                }, 1000)

            };

            this.windyLayer.setMap(map);
        } else {
            if (this.windyLayer) {
                this.windyLayer.show();
            }
            this.windy.setParam('data', windyData);
            const bounds = map.getBounds();
            const canvasW =  map.getSize().width;
            const canvasH = map.getSize().height;
            this.windy.stop();
            this.windy.start(
                [[0, 0], [canvasW, canvasH]],
                canvasW,
                canvasH,
                [[bounds.southwest.lng, bounds.southwest.lat], [bounds.northeast.lng, bounds.northeast.lat]]
            );
        }
    }

    /**
     * 清除地图风资源
     */
    hideWindyLayer() {
        if(this.windyLayer) {
            this.windyLayer.hide();
        }
    }


    /**
     * 绘制台风轨迹点
     * @param data ["lng1,lat1","lng2,lat2",...]
     */
    drawTyphoonPoint(data){
        this.typhoonPointSimplifierIns.show();
        this.typhoonPointSimplifierIns.setData(data);
        return this.typhoonPointSimplifierIns;
    }

    /**
     * 绘制台风轨迹
     * @param data
     * [
     [
     [116.405289, 39.904987],
     [113.964458, 40.54664]
     ]
     ]
     * @return {Object | null}
     */
    drawTyphoonPath(data = []){
        this.typhoonPathSimplifierIns.show();
        this.typhoonPathSimplifierIns.setData(data);
        this.typhoonPathCount = data.length;

        return this.typhoonPathSimplifierIns;
    }

    /**
     * 开启台风轨迹巡航
     */
    startTyphoonPathNavigator(){
        if(this.typhoonPathSimplifierIns && this.typhoonPathCount > 0){
            for(let i = 0; i < this.typhoonPathCount; i++){
                let navg = this.typhoonPathSimplifierIns.createPathNavigator(i, {
                    loop: true, //循环播放
                    speed: 500000, //巡航速度，单位千米/小时

                    //TODO 可以自定义巡航的icon样式
                    /*pathNavigatorStyle: {
                     width: 12,
                     height: 12,
                     //使用图片
                     content: this.PathSimplifier.Render.Canvas.getImageContent(markerImageGif, onload, onerror),
                     strokeStyle: null,
                     fillStyle: null,
                     //经过路径的样式
                     pathLinePassedStyle: {
                     lineWidth: 1,
                     strokeStyle: '#FFFF00',
                     dirArrowStyle: {
                     stepSpace: 15,
                     strokeStyle: 'red'
                     }
                     }
                     }*/
                });

                navg.start();
                this.typhoonPathNavigator.push(navg);
            }
        }
    }

    /**
     * 销毁台风轨迹巡航
     */
    destroyTyphoonPathNavigator(){
        if(this.typhoonPathNavigator.length > 0){
            this.typhoonPathNavigator.forEach(nav => nav.destroy());
        }
    }

    /**
     * 标记地图
     * @param {String} shapeType 绘制形状
     * @param {Object} options //所绘制覆盖物的options, 具体参数参考： http://lbs.amap.com/api/javascript-api/reference/overlay
     * @returns {Promise}
     *
     * usage:
     * mapUtil.doMarkMap(shapeType);其中shapeType是constants/query/map.js中的枚举:EnumMapMarkShape
     */
    doMarkMap (shapeType, options = {}){
        const { map, mouseTool } = this.mapInstances;

        return new Promise((resolve,reject) => {

            if (!map || !mouseTool) {
                reject({
                    code:"error",
                    msg:"map 或 mouseTool非实例"
                })
            }

            const onDrawEnd = (event) => {
                event.obj.setOptions({cursor: 'pointer'});

                // mouseTool.close();  // 禁止重复绘制
                this.closeMouseToolBehavior();  // 禁止重复绘制
                // map.setDefaultCursor("move"); // 还原鼠标形状

                let resp = {
                    target:event.obj    //所绘制的覆盖物对象
                };

                // 工具绘制的只允许点和多边形的图形,排除比例尺等其他图形
                if (T.lodash.includes(['AMap.Marker'], event.obj.CLASS_NAME)) {
                    const { lng, lat } =  event.obj.G.position;
                    const coordinates = {
                        longitude:lng,
                        latitude:lat,
                    }

                    resolve(Object.assign(resp,{
                        coordinates,
                    }));

                }else if(T.lodash.includes(['AMap.Polygon'], event.obj.CLASS_NAME)){
                    let data;
                    if("Pg" in event.obj){
                        data = event.obj.Pg;
                    }else if("Qi" in event.obj){
                        data = event.obj.Qi;
                    }else if("Ri" in event.obj){
                        data = event.obj.Ri;
                    }

                    const coordinates = data.path.map((val)=>{
                        return [val.lng,val.lat]
                    });

                    resolve(Object.assign(resp,{
                        coordinates,
                    }));

                }else if(T.lodash.includes(['AMap.Circle'], event.obj.CLASS_NAME)){
                    let data;
                    if("Pg" in event.obj){
                        data = event.obj.Pg;
                    }else if("Qi" in event.obj){
                        data = event.obj.Qi;
                    }else if("Ri" in event.obj){
                        data = event.obj.Ri;
                    }

                    resolve(Object.assign(resp,{
                        coordinates:[data.center.lng,data.center.lat],
                        radius:data.radius,         //半径单位是米
                    }))
                }
            }

            mouseTool.off('draw',this.preMapDrawEvent);		//解除前一个事件
            mouseTool.on('draw', onDrawEnd);			    //绑定现有的事件
            this.preMapDrawEvent = onDrawEnd;				//将当前事件赋值给前一个事件

            map.setDefaultCursor('crosshair');
            switch (shapeType) {
                case EnumMapMarkShape.point:
                    mouseTool.marker(MARKER_STYLE);
                    break;

                case EnumMapMarkShape.rectangle:
                    mouseTool.rectangle(RECTANGLE_STYLE);
                    break;

                case EnumMapMarkShape.polygon:
                    mouseTool.polygon(POLYGON_STYLE);
                    // 操作提示
                    T.layer.msg('多边形绘制操作：鼠标单击选点，双击结束, 右键单击取消');
                    $('.layui-layer-dialog.layui-layer-msg').css('top', '100px');

                    break;

                case EnumMapMarkShape.circle:
                    mouseTool.circle(CIRCLE_STYLE)
                    break;
            }

        })
    }

    /**
     * 绘制点到地图上
     * @param {Array} coordinate coordinate [lng, lat] 坐标
     * @param {Object} options
     * @param {Boolean} enable 是否设置点的位置为视图中心
     * @returns {Object}
     */
    drawPointToMap(coordinate, options = {}, enable = true){
        const map = this.mapInstances.map;
        options = Object.assign({
            map,
            position: T.lodash.cloneDeep(coordinate),            // 设置线覆盖物路径
            ...MARKER_STYLE
        },options)

        const pointMarker = new AMap.Marker(options);

        if(enable) {
            this.mapInstances.map.setCenter(coordinate);
        }

        return pointMarker;
    }

    /**
     * 绘制曲线到地图上
     * @param {Array} coordinate [ [lng,lat],.... ]
     * @param {Object} options
     * @return {Object}
     */
    drawPolyLineToMap(coordinate,options = {}) {
        const map = this.mapInstances.map;
        options = Object.assign({
            map,
            path: T.lodash.cloneDeep(coordinate),            // 设置线覆盖物路径
            ...POLYGON_LINE_STYLE
        },options)

        const polyLine = new AMap.Polyline(options);

        return polyLine;
    }

    /**
     * 绘制多边形到地图上
     * @param {Array} coordinate [[lng,lat],[lng,lat],[lng,lat]...] 坐标
     * @param {Object} options
     * @return {Object}
     */
    drawPolygonToMap(coordinate,options = {}){
        const map = this.mapInstances.map;
        options = Object.assign({
            map,
            path: T.lodash.cloneDeep(coordinate),         //设置多边形边界路径
            ...POLYGON_STYLE
        },options);

        // map.setFitView([polygonMarker], true);
        return new AMap.Polygon(options);
    }

    /**
     * 绘制圆形到地图上
     * @param {Array} center 中心点坐标 [lng,lat]
     * @param {Number} radius  半径; 单位是:米(m)
     * @param {Object} options  半径; 单位是:米(m)
     * @return {Object}
     */
    drawCircleToMap(center, radius, options = {}){
        const map = this.mapInstances.map;

        options = Object.assign({
            map:map,
            center: new AMap.LngLat(center[0], center[1]),// 圆心位置
            radius: radius,
            ...CIRCLE_STYLE
        },options);

        return new AMap.Circle(options);
    }

    /**
     * 依据行政区名称获取经纬度
     * @param districtName
     * @returns {Array}
     */
    getCoordinatesByDistrict(districtName){
        const recursionSearch = (name,districtsMap) => {

            for(let i = 0; i < districtsMap.length; i++){
                if(T.lodash.includes(districtsMap[i]['name'],name) || T.lodash.includes(name,districtsMap[i]['name'])){
                    return districtsMap[i]['center']
                }else{
                    let coordinate = recursionSearch(name,districtsMap[i]['districts']);
                    if(coordinate){
                        return coordinate;
                    }
                }
            }
        }

        return recursionSearch(districtName,TJ_District_Map);
    }

    /**
     * 依据坐标和dom的宽高，计算position的left和top
     * @param {Object} map
     * @param {Array} coordinate [lng,lat]
     * @param {String} domId
     * @returns {{left: number, top: number}}
     */
    getPositionByCoordinate(map,coordinate,domId){
        map = map || this.mapInstances.map;

        const mapWidth = map.getContainer().clientWidth,
            mapHeight = map.getContainer().clientHeight,
            boxWidth = $('#'+domId).width(),
            boxHeight = $('#'+domId).height(),
            coord = map.lngLatToContainer(coordinate);

        const left = coord.x + boxWidth > mapWidth ? coord.x - boxWidth - 50 : coord.x + 50;
        const top = coord.y - boxHeight/2 > mapHeight ? coord.y + boxHeight/2 : coord.y - boxHeight/2;

        return {
            left,
            top
        }
    }

    /**
     * 获取图层实例
     * @param map 地图实例
     * @param layerType 图层类型
     * @returns {null}
     */
    getMapLayerInstance(map,layerType){

        if (!this.initLayers[layerType]) {

            const config = LAYER_MAP[layerType];

            if (layerType === LAYER_TYPES.normal) {
                // 默认图层
                this.initLayers[layerType] = map.getDefaultLayer();

            } else if (T.lodash.isString(config)) {
                // 自定义图层类
                this.initLayers[layerType] = new (T.lodash.get(AMap, config))();

            } else if (T.lodash.isPlainObject(config)) {
                // 自定义图层对象
                this.initLayers[layerType] = new AMap.TileLayer(config);

            } else {
                // 图层实例
                this.initLayers[layerType] = config;
            }

        }

        return this.initLayers[layerType] || null;
    }

    /**
     * 依据东经北纬和西经南纬，获取经纬度坐标
     * @param {Array} eLngNlat [lng,lat]
     * @param {Array} wLngSlat [lng,lat]
     * @return {Array}
     */
    getCoordByElngNlatAndWlngSlat(eLngNlat,wLngSlat){

        return [eLngNlat,[wLngSlat[0],eLngNlat[1]],wLngSlat,[eLngNlat[0],wLngSlat[1]]];
    }

    /**
     * 获取覆盖物图层
     * @param map
     * @returns {*}
     */
    getGroundImageLayer(map){
        let imageLayer = null;
        T.lodash.each(map.getAllOverlays(), (layer) => {
            if (layer.CLASS_NAME === 'AMap.GroundImage') {
                imageLayer = layer;
            }
        });

        return imageLayer;
    }

    /**
     * 获取正确的经纬度
     * @param input
     * @returns {*}
     */
    getLngAndLat(input){
        // 经纬度正则(度)
        const lngRegex = /^[EW+-]?((\d|[1-9]\d|1[0-7]\d)(\.\d{1,6})?$)/;
        const latRegex = /^[SN+-]?((\d|[1-8]\d)(\.\d{1,6})?$)/;
        // 经纬度正则(度分)
        const minuteLngRegex = /^[EW+-]?((\d|[1-9]\d|1[0-7]\d)\s(\d|[0-5]\d)(\.\d{1,6})?$)/;
        const minuteLatRegex = /^[SN+-]?((\d|[1-8]\d)\s(\d|[0-5]\d)(\.\d{1,6})?$)/;
        // 经纬度正则(度分秒)
        const secondLngRegex = /^[EW+-]?((\d|[1-9]\d|1[0-7]\d)\s(\d|[0-5]\d)\s(\d|[0-5]\d)(\.\d{1,6})?$)/;
        const secondLatRegex = /^[SN+-]?((\d|[1-8]\d)\s(\d|[0-5]\d)\s(\d|[0-5]\d)(\.\d{1,6})?$)/;

        /**
         * 数组转经纬度
         * @param arr
         */
        const arr2LngLat = (arr) => {

            let a1 = arr[0];
            if (T.lodash.startsWith(a1, 'W') || T.lodash.startsWith(a1, 'S')) {
                a1 = `-${a1}`;
            }
            const first = T.lodash.toNumber(T.lodash.trimStart(a1, 'EWSN'));
            const minute = T.lodash.toNumber(arr[1]);
            const second = T.lodash.toNumber(arr[2]);

            return first + (minute ? (minute / 60) : 0) + (second ? (second / 60 / 60) : 0);
        };

        if (/[,]/.test(input)) {
            const values = T.lodash.split(input, ',', 2);

            const tmpLng = T.lodash.trim(values[0]);
            const tmpLat = T.lodash.trim(values[1]);

            if (
                tmpLng && tmpLat &&
                (secondLngRegex.test(tmpLng) || minuteLngRegex.test(tmpLng) || lngRegex.test(tmpLng)) &&
                (secondLatRegex.test(tmpLat) || minuteLatRegex.test(tmpLat) || latRegex.test(tmpLat))
            ) {
                const lngVs = T.lodash.split(tmpLng, /[\s+]/, 3);
                const latVs = T.lodash.split(tmpLat, /[\s+]/, 3);
                const lng = arr2LngLat(lngVs);
                const lat = arr2LngLat(latVs);

                return {
                    type: 'lngLat',
                    lng,
                    lat,
                    value: input,
                    label: `${lngVs[0]} ${lngVs[1] || 0} ${lngVs[2] || 0},${latVs[0]} ${latVs[1] || 0} ${latVs[2] || 0}`
                }
            } else {
                return {
                    type: 'error',
                    value: null,
                    label: '输入的坐标值不符合规则，请重新输入'
                }
            }
        }

        return false;
    }
}


export default new MapUtil();

