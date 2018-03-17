import './Map.scss';
import CesiumUtil from './util/CesiumUtil';
import { Component } from 'react';
import {getTileServiceProvider} from "./util/constants/cesium";


export default class Map extends Component {
    componentDidMount(){
        this.cesiumUtil = new CesiumUtil('cesiumContainer', {
            imageryProvider: new CesiumUtil.Cesium.UrlTemplateImageryProvider({
                url : getTileServiceProvider("Google.Satellite.Map"),
                maximumLevel : 5
            }), //图像图层提供者
        });

        const Cesium = CesiumUtil.Cesium;
        const viewer = this.cesiumUtil.viewer;

        // 添加路网图切片
        this.cesiumUtil.addMapTile('GaoDe.Satellite.Annotion');

        // 设置镜头位置与方向
        viewer.scene.camera.setView( {
            //镜头的经纬度、高度。镜头默认情况下，在指定经纬高度俯视（pitch=-90）地球
            destination : Cesium.Cartesian3.fromDegrees( 116.3, 39.9, 10000000 ),//北京10000公里上空

            //下面的几个方向正好反映默认值
            orientation: {
                heading: Cesium.Math.toRadians(0), // 代表镜头左右方向,正值为右,负值为左,360度和0度是一样的
                pitch: Cesium.Math.toRadians(-90), // 代表镜头上下方向,正值为上,负值为下.
                roll: Cesium.Math.toRadians(0) // 代表镜头左右倾斜.正值,向右倾斜,负值向左倾斜
            }
        });

        // 设置地球进入效果
        setTimeout( () =>
        {
            viewer.scene.camera.flyTo( {
                destination : Cesium.Cartesian3.fromDegrees( 116, 39.9, 17000000 ),  // 相机目标位置
                orientation : { // 相机镜头对准的方法
                    heading : Cesium.Math.toRadians( -0 ), // 代表镜头左右方向,正值为右,负值为左,360度和0度是一样的
                    pitch : Cesium.Math.toRadians( -90 ),   // 代表镜头上下方向,正值为上,负值为下.
                    roll : Cesium.Math.toRadians( 0 )       // 代表镜头左右倾斜.正值,向右倾斜,负值向左倾斜
                },
                duration : 2,//动画持续时间
                complete : () => { //飞行完毕后执行的动作
                    // console.log("动画完成")
                    // addEntities();
                }
            } );
        }, 1000 );

        this.fly(Cesium, viewer);
    }

    fly(Cesium, viewer) {
        // viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;

        // 模拟飞行数据
        const simulateFlyData = () => {
            const startLon = 116.314295;
            const startLat = 39.904194;

            let data = [];
            let count = 10;
            for(let i = 0; i < count; i++){
                data.push({
                    lon: startLon - i * 10,
                    lat: startLat,
                    height: i == 0 || i == count -1 ? 0 : Cesium.Math.nextRandomNumber() * 500000 + 800000 * 2,
                    time: i == 0 ? 0 : i * 10,
                })
            }

            return data;
        }

        const startTime = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16));

        // 创建飞行路径
        const createFlightPath = () => {
            let property = new Cesium.SampledPositionProperty();
            const data = simulateFlyData();

            for (let i = 0; i < data.length; ++i) {
                const { lon, lat, height, time } = data[i];

                // let position = viewer.scene.globe.ellipsoid.cartographicToCartesian(new Cesium.Cartographic(lon, lat, height));
                let position = Cesium.Cartesian3.fromDegrees(lon, lat, height);
                if (i == 0) console.log("start",position)
                property.addSample(
                    Cesium.JulianDate.addSeconds(startTime, time, new Cesium.JulianDate()),
                    position
                );
            }

            return {
                property,
                // startTime: Cesium.JulianDate.addSeconds(startTime, data[0].time, new Cesium.JulianDate()),
                startTime,
                stopTime: Cesium.JulianDate.addSeconds(startTime, data[data.length -1].time, new Cesium.JulianDate()),
            }
        };

        const { property, stopTime } = createFlightPath();

        viewer.clock.startTime = startTime.clone();
        viewer.clock.stopTime = stopTime.clone();
        viewer.clock.currentTime = startTime.clone();
        viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; //Loop at the end
        viewer.clock.multiplier = 10;

        // viewer.timeline.zoomTo(startTime, stopTime);

        // 屏幕空间点击事件
        const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
        handler.setInputAction(function (click1) {
            console.log(click1)
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);


        let arcEntity = viewer.entities.add({
            //Set the entity availability to the same interval as the simulation time.
            availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
                start: startTime,
                stop: stopTime
            })]),

            //Load the Cesium plane model to represent the entity
            model: {
                uri: '/asserts/Cesium_Air.gltf',
                minimumPixelSize: 64
            },
            orientation: new Cesium.VelocityOrientationProperty(property),

            position: property,

            path: {
                resolution: 1200,
                material: new Cesium.PolylineGlowMaterialProperty({
                    glowPower: 0.16,
                    color: Cesium.Color.fromRandom({
                        alpha: 1.0
                    })
                }),
                width: 5,
                leadTime: 1e10,
                trailTime: 1e10
            }
        });
    }

    render() {
        return (
            <div className="cesium-map">
                <div id="cesiumContainer"></div>
            </div>
        );
    }
}
