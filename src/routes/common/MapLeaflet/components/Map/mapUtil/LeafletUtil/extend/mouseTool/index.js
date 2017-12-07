import Measure from './Measure';

const wrapMouse = (L, map, createMark, setMarkBounds, drawEndCb) => {
    const defaultCursor = map._container.style.cursor || 'move';
    map._container.style.cursor = 'crosshair';

    const mousedownCb = (downEvent) => {
        map.dragging.disable();
        map.doubleClickZoom.disable();

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
            map.doubleClickZoom.enable();
            map._container.style.cursor = defaultCursor;
            map.off('mousemove', mousemoveCb);
            map.off('mousedown', mousedownCb);
            map.off('mouseup', mouseupCb);
            drawEndCb(markObj);
        };

        map.on('mousemove', mousemoveCb);
        map.on('mouseup', mouseupCb)
    };

    map.on('mousedown', mousedownCb);
}

const wrapMouse1 = (L, map, createMark, setMarkBounds, drawEndCb) => {
    const defaultCursor = map._container.style.cursor || 'move';
    map._container.style.cursor = 'crosshair';

    const clickCb = (downEvent) => {
        map.dragging.disable();
        map.doubleClickZoom.disable();

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
            map.doubleClickZoom.enable();
            map._container.style.cursor = defaultCursor;
            map.off('mousemove', mousemoveCb);
            map.off('mousedown', clickCb);
            map.off('mouseup', mouseupCb);
            drawEndCb(markObj);
        };

        map.on('mousemove', mousemoveCb);
        map.on('mouseup', mouseupCb)
    };

    map.on('click', clickCb);
}

/**
 * 依据经纬度获取距离
 * @param {Array} start 起点坐标 [lat, lng]
 * @param {Array} end 终点坐标 [lat, lng]
 * @returns {number} 单位是千米
 */
const getDistanceByLatLng = (start, end) => {
    const f1 = start[0], l1 = start[1], f2 = end[0], l2 = end[1];
    const toRadian = Math.PI / 180;
    const lengthUnit = {
        decimal: 2,
        factor: null
    };

    const R = lengthUnit.factor ? 6371 * lengthUnit.factor : 6371; // kilometres
    const deltaF = (f2 - f1)*toRadian;
    const deltaL = (l2 - l1)*toRadian;
    const a = Math.sin(deltaF/2) * Math.sin(deltaF/2) + Math.cos(f1*toRadian) * Math.cos(f2*toRadian) * Math.sin(deltaL/2) * Math.sin(deltaL/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
};

export default class MouseTool{
    /**
     *
     * @param {Object} map leaflet地图实例
     */
    constructor(map, L) {
        this.map = map;
        this.L = L;

        // 测距工具
        this.measure = new Measure(map, L);
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
     * @returns {Promise<any>}
     */
    circle(options = {}, isFitBounds = false){
        return new Promise((resolve, reject) => {
            const map = this.map;
            const L = this.L;

            const createMark = (downEvent, moveEvent) => {
                return L.circle(
                    [downEvent.latlng.lat, downEvent.latlng.lng ],

                    Object.assign({
                        color: "#ff7800",
                        weight: 1,
                        radius: getDistanceByLatLng([downEvent.latlng.lat, downEvent.latlng.lng ],[moveEvent.latlng.lat, moveEvent.latlng.lng])
                    }, options)

                ).addTo(map);
            };

            const setMarkBounds = (circleObj, downEvent, moveEvent) => {
                circleObj.setRadius(getDistanceByLatLng(
                    [downEvent.latlng.lat, downEvent.latlng.lng ],
                    [moveEvent.latlng.lat, moveEvent.latlng.lng]
                ) * 1000);
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

    polygon(options = {}, isFitBounds = false){
        return new Promise((resolve, reject) => {
            const map = this.map;
            const L = this.L;

            const createMark = (downEvent, moveEvent) => {
                var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
                var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);

                return L.circle(
                    [downEvent.latlng.lat, downEvent.latlng.lng ],

                    Object.assign({
                        color: "#ff7800",
                        weight: 1,
                        radius: getDistanceByLatLng([downEvent.latlng.lat, downEvent.latlng.lng ],[moveEvent.latlng.lat, moveEvent.latlng.lng])
                    }, options)

                ).addTo(map);
            };

            const setMarkBounds = (rectangleObj, downEvent, moveEvent) => {
                rectangleObj.setRadius(getDistanceByLatLng(
                    [downEvent.latlng.lat, downEvent.latlng.lng ],
                    [moveEvent.latlng.lat, moveEvent.latlng.lng]
                ) * 1000);
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
}
