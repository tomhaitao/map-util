/**
 * @description 地图相关枚举
 * @author vision <vision.shi@tianjishuju.com>
 * @license www.tianjishuju.com/license
 */
import L from 'leaflet';
// 定位点图标
import markerImage from 'resources/img/map/marker.png';

// 空透明图片
export const NONE_IMAGE = 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==';

/**
 * 地图标记形状
 * @type {{point: string, rectangle: string, polygon: string, circle: string}}
 */
export const EnumMapMarkShape = {
    point:'point',                  //点
    rectangle:'rectangle',          //矩形
    polygon:'polygon',              //多边形
    circle:'circle'                 //圆
};

// 默认中心点
export const CENTER = [39.272688, 100.923828];  // [lat, lng]

// 默认缩放等级
export const ZOOM = {
    maxZoom: 18,
    minZoom: 4
};

//图层类型
export const LAYER_TYPES = {
    normal:'normal',        //正常默认
    satellite:'satellite',  //卫星地图
    roadNet:'roadNet',      //路网图
    terrain:'terrain'       //高程图
}

/**
 * 枚举地图
 * @type {{}}
 */
export const EnumMapLayerTypes = {
    [LAYER_TYPES.satellite]: L.tileLayer.tileServiceProvider("Google.Satellite.Map", ZOOM),  //google 卫星地图
    // [LAYER_TYPES.satellite]: L.tileLayer.tileServiceProvider("GaoDe.Satellite.Map", ZOOM),      //gaode 卫星地图
    [LAYER_TYPES.roadNet]: L.tileLayer.tileServiceProvider("GaoDe.Satellite.Annotion", ZOOM),  //卫星地图
    [LAYER_TYPES.terrain]: L.tileLayer.tileServiceProvider("Google.Terrain.Map", ZOOM),      //高程图
    [LAYER_TYPES.normal]: L.tileLayer.tileServiceProvider("GaoDe.Normal.Map", ZOOM),         //正常默认
};


//选中的覆盖物颜色
export const OVERLAY_SELECTED_COLOR = "#D53C50";
//覆盖物默认颜色
export const OVERLAY_DEFAULT_COLOR = "#1A96FF";

export const TRANPARENT_COLOR = 'transparent';
// 标记点样式
export const MARKER_STYLE = {
    icon: markerImage
};

// 矩形样式
export const RECTANGLE_STYLE = {
    zIndex:50,
    strokeColor: OVERLAY_DEFAULT_COLOR,
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor:TRANPARENT_COLOR ,
    // fillOpacity: 0,
    strokeStyle: 'solid'
};
// 多边形样式
export const POLYGON_STYLE = RECTANGLE_STYLE;

// 圆样式
export const CIRCLE_STYLE = {
    zIndex:50,
    strokeColor: OVERLAY_DEFAULT_COLOR,
    strokeOpacity: 1,
    strokeWeight: 4,
    fillColor:TRANPARENT_COLOR ,
    //fillOpacity: 0,
    strokeStyle: 'solid'
};

// 曲线样式
export const POLYGON_LINE_STYLE = {
    strokeColor: '#FFFF00',   // 线颜色
    strokeOpacity: 0,         // 线透明度
    strokeWeight: 4,          // 线宽
    strokeStyle: 'solid',     // 线样式
    strokeDasharray: [10, 5], // 补充线样式
    geodesic: true,            // 绘制大地线
    zIndex: 30,
};
