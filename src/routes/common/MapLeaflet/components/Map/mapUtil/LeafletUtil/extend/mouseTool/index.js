const wrapMouse = (L, map, createMark, setMarkBounds, drawEndCb) => {
    const mousedownCb = (downEvent) => {
        map.dragging.disable();

        let markObj =  null;

        const mousemoveCb = (moveEvent) => {
            if (markObj){
                setMarkBounds(markObj, downEvent, moveEvent);
            }else {
                markObj =  createMark(downEvent, moveEvent);
            }
        };

        const mouseupCb = () => {
            map.dragging.enable();
            map.off('mousemove', mousemoveCb);
            map.off('mousedown', mousedownCb);
            map.off('mouseup', mouseupCb);
            drawEndCb(markObj);
        }

        map.on('mousemove', mousemoveCb);
        map.on('mouseup', mouseupCb)
    };

    map.on('mousedown', mousedownCb);
}

export default class MouseTool{
    /**
     *
     * @param {Object} map leaflet地图实例
     */
    constructor(map, L) {
        this.map = map;
        this.L = L;
    }

    /**
     * 绘制矩形
     * @param {Object} options 配置说明： http://leafletjs.com/reference-1.2.0.html#rectangle
     * @param {Boolean} isFitBounds 是否移动到目标区域
     * @returns {Promise<any>}
     */
    rectangle(options = {}, isFitBounds = false){
        return new Promise((resolve, reject) => {
            const map = this.map;
            const L = this.L;

            const createMark = (downEvent, moveEvent) => {
                return L.rectangle(
                    [[downEvent.latlng.lat, downEvent.latlng.lng ],[moveEvent.latlng.lat, moveEvent.latlng.lng]],

                    Object.assign({
                        color: "#ff7800",
                        weight: 1
                    }, options)

                ).addTo(map);
            };

            const setMarkBounds = (rectangleObj, downEvent, moveEvent) => {
                rectangleObj.setBounds(L.latLngBounds(
                    L.latLng(downEvent.latlng.lat, downEvent.latlng.lng),
                    L.latLng(moveEvent.latlng.lat, moveEvent.latlng.lng)
                ));
            };

            try {
                wrapMouse(L, map, createMark, setMarkBounds, (markObj) => {
                    resolve(markObj)
                })
            }catch (e){
                reject(e)
            }
        });
    }

    /**
     * 绘制圆形
     * @param {Object} options 配置说明： http://leafletjs.com/reference-1.2.0.html#rectangle
     * @param {Boolean} isFitBounds 是否移动到目标区域
     */
    circle(options = {}, isFitBounds = false){

    }
}
