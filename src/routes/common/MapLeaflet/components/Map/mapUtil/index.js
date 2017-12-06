import LeafletUtil from './LeafletUtil';
import Windy from './Windy';
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

    createNewWindyLayer(windyData) {
        const L = this.L;
        var CanvasLayer = L.Canvas.extend({
            beforeAdd: function (map) {
                // Renderer is set here because we need to call renderer.getEvents
                // before this.getEvents.
                this._renderer = map.getRenderer(this);
            },

            onAdd: function(map) {
                this._map = map;
                const pane = map.getPane(this.options.pane);
                const { x, y } = this._map.getSize();

                // this._renderer._container.width = x;
                // this._renderer._container.height = y;

                pane.appendChild(this._renderer._container);
            }
        })

        return new CanvasLayer();
    }

    createWindyLayer(windyData) {
        const L = this.L;

        // var CanvasLayer = L.Layer.extend({
        var CanvasLayer = L.Renderer.extend({
            options: {
                // @option padding: Number = 0.1
                // How much to extend the clip area around the map view (relative to its size)
                // e.g. 0.1 would be 10% of map view in each direction
                padding: 0.1,

                // @option tolerance: Number = 0
                // How much to extend click tolerance round a path/object on the map
                tolerance : 0
            },
            onAdd: function(map) {
                this._map = map;
                const pane = map.getPane(this.options.pane);
                this._container = L.DomUtil.create('canvas', 'windy');
                const { x, y } = this._map.getSize();

                this._container.width = x;
                this._container.height = y;

                pane.appendChild(this._container);

                const bounds = map.getBounds();
                this._windy = new Windy({canvas: this._container, data: windyData});
                this._windy.start(
                    [[0, 0], [this._container.width, this._container.height]],
                    this._container.width,
                    this._container.height,
                    [[bounds._southWest.lng, bounds._southWest.lat], [bounds._northEast.lng, bounds._northEast.lat]]
                );


                // L.DomUtil.setTransform(this._container, L.point(200, 300));
                L.DomUtil.setPosition(this._container, L.point(0, 0));

                // Add and position children elements if needed
                map.on('zoomend viewreset moveend', this._update , this);
                // map.on('moveend', this._update, this);

                // console.log(map.getBounds());
            },

            onRemove: function(map) {
                L.DomUtil.remove(this._container);
                map.off('zoomend viewreset moveend', this._update, this);
            },

            _update: function() {
                this._windy.stop();
                L.Renderer.prototype._update.call(this);

                var b = this._bounds,
                    container = this._container,
                    size = b.getSize(),
                    m = L.Browser.retina ? 2 : 1;
                console.log(size)
                L.DomUtil.setPosition(container, b.min);

                /*container.width = m * size.x;
                container.height = m * size.y;
                container.style.width = size.x + 'px';
                container.style.height = size.y + 'px';

                this._ctx = container.getContext('2d');
                console.log(L.Browser.retina)
                if (L.Browser.retina) {
                    this._ctx.scale(2, 2);
                }
                this._ctx.translate(-b.min.x, -b.min.y);*/

                const bounds = this._map.getBounds();
                this._windy.start(
                    [[0, 0], [this._container.width, this._container.height]],
                    this._container.width,
                    this._container.height,
                    [[bounds._southWest.lng, bounds._southWest.lat], [bounds._northEast.lng, bounds._northEast.lat]]
                );

                return ;

                // Recalculate position of container
                console.log(this.options.padding);
                console.log(this._map.containerPointToLayerPoint(this._map.getSize().multiplyBy(-0.1)))
                console.log(this._map.getPixelBounds())
                L.DomUtil.setPosition(this._container, this._map.containerPointToLayerPoint(this._map.getSize().multiplyBy(-0.1)));
            },


        });

        return new CanvasLayer();
    }
}

export default new MapUtil();
