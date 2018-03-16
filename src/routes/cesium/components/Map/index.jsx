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

        // this.fly1(Cesium, viewer);
        this.fly2(Cesium, viewer);
        // this.fly3(Cesium, viewer);



    }

    /**
     * 飞行轨迹
     */
    fly1(Cesium, viewer){

        viewer.scene.globe.baseColor = new Cesium.Color(8 / 255.0, 24 / 255.0, 52 / 255.0, 1.0);
        let numberOfArcs = 1;
        let startLon = 116.314295;
        let startLat = 39.904194;
        viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;
        let startTime = viewer.clock.startTime;
        let midTime = Cesium.JulianDate.addSeconds(startTime, 43200, new Cesium.JulianDate());
        let stopTime = Cesium.JulianDate.addSeconds(startTime, 86400, new Cesium.JulianDate());

        for (let i = 0; i < numberOfArcs; ++i) {
            let color = Cesium.Color.fromRandom({
                alpha : 1.0
            });
            let stopLon = Cesium.Math.nextRandomNumber() * 358 - 179;
            let stopLat = Cesium.Math.nextRandomNumber() * 178 - 89;
            let property = new Cesium.SampledPositionProperty();
            let startPosition = Cesium.Cartesian3.fromDegrees(startLon, startLat, 0);
            property.addSample(startTime, startPosition);
            let stopPosition = Cesium.Cartesian3.fromDegrees(stopLon, stopLat, 0);
            property.addSample(stopTime, stopPosition);

            let midPoint = Cesium.Cartographic.fromCartesian(property.getValue(midTime));
            midPoint.height = Cesium.Math.nextRandomNumber() * 500000 + 800000 * 2;
            let midPosition = viewer.scene.globe.ellipsoid.cartographicToCartesian(midPoint, new Cesium.Cartesian3());

            property = new Cesium.SampledPositionProperty();
            property.addSample(startTime, startPosition);
            property.addSample(midTime, midPosition);
            property.addSample(stopTime, stopPosition);

            let arcEntity = viewer.entities.add({
                position : property,
                point : {
                    pixelSize : 8,
                    color : Cesium.Color.TRANSPARENT,
                    outlineColor : color,
                    outlineWidth : 3
                },
                path : {
                    resolution : 1200,
                    material : new Cesium.PolylineGlowMaterialProperty({
                        glowPower : 0.16,
                        color : color
                    }),
                    width : 5,
                    leadTime: 1e10,
                    trailTime: 1e10
                }
            });
            arcEntity.position.setInterpolationOptions({
                interpolationDegree : 5,
                interpolationAlgorithm : Cesium.LagrangePolynomialApproximation
            });
        }

    }


    fly2(Cesium, viewer){
        //Enable lighting based on sun/moon positions
        viewer.scene.globe.enableLighting = true;

        //Enable depth testing so things behind the terrain disappear.
        viewer.scene.globe.depthTestAgainstTerrain = true;

        //Set the random number seed for consistent results.
        Cesium.Math.setRandomNumberSeed(3);

        //Set bounds of our simulation time
        var start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16));
        var stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate());

        //Make sure viewer is at the desired time.
        viewer.clock.startTime = start.clone();
        viewer.clock.stopTime = stop.clone();
        viewer.clock.currentTime = start.clone();
        viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; //Loop at the end
        viewer.clock.multiplier = 10;

        //Set timeline to simulation bounds
        // viewer.timeline.zoomTo(start, stop);

        //Generate a random circular pattern with varying heights.
        function computeCirclularFlight(lon, lat, radius) {
            var property = new Cesium.SampledPositionProperty();
            for (var i = 0; i <= 360; i += 45) {
                var radians = Cesium.Math.toRadians(i);
                var time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate());
                var position = Cesium.Cartesian3.fromDegrees(lon + (radius * 1.5 * Math.cos(radians)), lat + (radius * Math.sin(radians)), Cesium.Math.nextRandomNumber() * 500 + 1750);
                property.addSample(time, position);

                //Also create a point for each sample we generate.
                viewer.entities.add({
                    position : position,
                    point : {
                        pixelSize : 4,
                        color : Cesium.Color.TRANSPARENT,
                        outlineColor : Cesium.Color.YELLOW,
                        outlineWidth : 1
                    }
                });
            }
            return property;
        }

        //Compute the entity position property.
        var position = computeCirclularFlight(116, 39.9, 3);

        //Actually create the entity
        var entity = viewer.entities.add({

            //Set the entity availability to the same interval as the simulation time.
            availability : new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
                start : start,
                stop : stop
            })]),

            //Use our computed positions
            position : position,

            //Automatically compute orientation based on position movement.
            orientation : new Cesium.VelocityOrientationProperty(position),

            //Load the Cesium plane model to represent the entity
            model : {
                uri : '/asserts/Cesium_Air.gltf',
                minimumPixelSize : 64
            },
            //Show the path as a pink line sampled in 1 second increments.
            path : {
                resolution : 1,
                material : new Cesium.PolylineGlowMaterialProperty({
                    glowPower : 0.1,
                    color : Cesium.Color.YELLOW
                }),
                width : 1
            }
        });

        Cesium.when( entity.readyPromise ).then( function( model )
        {

            model.activeAnimations.addAll( {//播放模型中全部动画，如果需要播放单个动画，可以调用add，传入动画id
                loop : Cesium.ModelAnimationLoop.REPEAT, //直到被移出activeAnimations，一直播放
                speedup : 0.5,  //加速播放
                reverse : true  //逆序播放
            } );
        } );

        // var clock = new Cesium.Clock();
        // var clockViewModel = new Cesium.ClockViewModel(clock);
        // var viewModel = new Cesium.AnimationViewModel(clockViewModel);
        // var widget = new Cesium.Animation('cesiumContainer', viewModel);
        //
        // function tick() {
        //     clock.tick();
        //     Cesium.requestAnimationFrame(tick);
        // }
        // Cesium.requestAnimationFrame(tick);
    }

    fly3(Cesium, viewer){
        var scene = viewer.scene;
//创建坐标
        var coord = Cesium.Cartesian3.fromDegrees( -75.62898254394531, 40.02804946899414, 0.0 );
//创建一个东（X，红色）北（Y，绿色）上（Z，蓝色）的本地坐标系统
        var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame( coord );
// 改变3D模型的模型矩阵，可以用于移动物体
// 物体的世界坐标 = 物体的模型坐标 * 世界矩阵
        var model = scene.primitives.add( Cesium.Model.fromGltf( {//异步的加载模型
            url : '/asserts/Cesium_Air.gltf',
            modelMatrix : modelMatrix, //模型矩阵
            scale : 200.0 //缩放
        } ) );

        Cesium.when( model.readyPromise ).then( function( model )
        {
            model.activeAnimations.addAll( {//播放模型中全部动画，如果需要播放单个动画，可以调用add，传入动画id
                loop : Cesium.ModelAnimationLoop.REPEAT, //直到被移出activeAnimations，一直播放
                speedup : 0.5,  //加速播放
                reverse : true  //逆序播放
            } );
        } );
    }


    render() {
        return (
            <div className="cesium-map">
                <div id="cesiumContainer"></div>
            </div>
        );
    }
}
