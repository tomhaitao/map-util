import LeafletUtil from './LeafletUtil';
/**
 *  地图工具类
 */
class MapUtil extends LeafletUtil{
    constructor() {
        super();
        this.typhoonPointCoordinateToInfoMap = {};      //台风点坐标与信息的mapping
    }

    /**
     * 绘制台风轨迹
     * @param {Array} lines
     * [{
            "name":"",
            "path":[[lat, lng],...],
            "tfxh":"1514"
        }]
     */
    drawTyphoon(lines, pointCb = () => {}) {
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            //
            const polyline = this.drawPolyline(line.path);

            for (let j = 0; j < line.path.length; j++){
                const point = this.drawCircleMarker(line.path[j]);
            }
        }
    }


    /**
     * 添加风资源图层
     * @param {Object} windyData
     * @returns {*}
     */
    addWindyLayer(windyData) {
        const L = this.L;

        const windyVelocityLayer = L.windyVelocityLayer({
            data: windyData,
            maxVelocity: 15,    // 调整风速大小
        });

        return windyVelocityLayer
    }


    /**
     * 依据坐标和dom的宽高，计算position的left和top
     * @param {Object} map
     * @param {Array} coordinate [lat,lng]
     * @param {String} domId
     * @returns {{left: number, top: number}}
     */
    getPositionByCoordinate(map,coordinate,domId){
        const L = this.L;

        const mapWidth = map.getSize().x,
            mapHeight = map.getSize().y,
            boxWidth = $('#'+domId).width(),
            boxHeight = $('#'+domId).height(),
            coord = this.map.latLngToContainerPoint(L.latLng(coordinate[0], coordinate[1]));

        const left = coord.x + boxWidth > mapWidth ? coord.x - boxWidth - 50 : coord.x + 50;
        const top = coord.y - boxHeight/2 > mapHeight ? coord.y + boxHeight/2 : coord.y - boxHeight/2;

        return { left, top }
    }
}

export default new MapUtil();
