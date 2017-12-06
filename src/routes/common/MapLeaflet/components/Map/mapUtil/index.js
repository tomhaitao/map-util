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
}

export default new MapUtil();
