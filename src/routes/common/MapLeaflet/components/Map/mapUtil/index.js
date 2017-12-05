import LeafletUtil from './LeafletUtil';
import Icon from './LeafletUtil/img/marker.png';
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
            const polyline = this.drawPolyline(line.path);

            for (let j = 0; j < line.path.length; j++){
                const point = this.drawCircleMarker(line.path[j]);
            }
        }
    }

    createWindyLayer() {
        const L = this.L;

        var CanvasLayer = L.Layer.extend({
            onAdd: function(map) {
                var pane = map.getPane(this.options.pane);
                this._container = L.DomUtil.create('img', 'windy');
                this._map = map;
                this._container.src = Icon;
                console.log(map.getPixelBounds())
                pane.appendChild(this._container);
                L.DomUtil.setTransform(this._container, L.point(200, 300));

                // Calculate initial position of container with `L.Map.latLngToLayerPoint()`, `getPixelOrigin()` and/or `getPixelBounds()`

                L.DomUtil.setPosition(this._container, L.point(200, 300));

                // Add and position children elements if needed

                map.on('zoomend viewreset', this._update, this);
            },

            onRemove: function(map) {
                L.DomUtil.remove(this._container);
                map.off('zoomend viewreset', this._update, this);
            },

            _update: function() {
                // Recalculate position of container
                console.log(2323)
                L.DomUtil.setPosition(this._container, this._map.getPixelBounds());
                L.DomUtil.setTransform(this._container, this._map.getPixelBounds());

                // Add/remove/reposition children elements if needed
            }
        });

        return new CanvasLayer();
    }
}

export default new MapUtil();
