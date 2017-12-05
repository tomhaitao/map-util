
import LeafletUtil from './LeafletUtil';
import {lines} from "../testData";

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
    drawTyphoon(lines, pointCb) {
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            //
            this.drawPolyline(line.path);

            for (let j = 0; j < line.path.length; j++){
                const marker = this.drawCircleMarker(line.path[j]);
            }
        }
    }


}

export default new MapUtil();
