import 'cesium/Widgets/widgets.css';
import Cesium from 'cesium/Cesium';
import { Component } from 'react';
import { Button } from 'antd';
import './Map.scss';

export default class Map extends Component {
    componentDidMount(){

        this.initCesium();

        // this.fly();
    }


    initCesium(){
        const viewer = new Cesium.Viewer( 'cesiumContainer', {
            animation : false,//是否创建动画小器件，左下角仪表
            baseLayerPicker : false,//是否显示图层选择器
            fullscreenButton : false,//是否显示全屏按钮
            geocoder : false,//是否显示geocoder小器件，右上角查询按钮
            homeButton : false,//是否显示Home按钮
            infoBox : false,//是否显示信息框
            sceneModePicker : false,//是否显示3D/2D选择器
            selectionIndicator : false,//是否显示选取指示器组件
            timeline : false,//是否显示时间轴
            navigationHelpButton : false,//是否显示右上角的帮助按钮
            scene3DOnly : true,//如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
            clock : new Cesium.Clock(),//用于控制当前时间的时钟对象
            selectedImageryProviderViewModel : undefined,//当前图像图层的显示模型，仅baseLayerPicker设为true有意义
            imageryProviderViewModels : Cesium.createDefaultImageryProviderViewModels(),//可供BaseLayerPicker选择的图像图层ProviderViewModel数组
            selectedTerrainProviderViewModel : undefined,//当前地形图层的显示模型，仅baseLayerPicker设为true有意义
            terrainProviderViewModels : Cesium.createDefaultTerrainProviderViewModels(),//可供BaseLayerPicker选择的地形图层ProviderViewModel数组
            imageryProvider: new Cesium.UrlTemplateImageryProvider({
                url : 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
                maximumLevel : 5
            }), //图像图层提供者
            terrainProvider : new Cesium.EllipsoidTerrainProvider(),//地形图层提供者，仅baseLayerPicker设为false有意义
            baseLayerPicker: false,
            skyBox : new Cesium.SkyBox({
                sources : {
                    positiveX : 'Cesium-1.7.1/Skybox/px.jpg',
                    negativeX : 'Cesium-1.7.1/Skybox/mx.jpg',
                    positiveY : 'Cesium-1.7.1/Skybox/py.jpg',
                    negativeY : 'Cesium-1.7.1/Skybox/my.jpg',
                    positiveZ : 'Cesium-1.7.1/Skybox/pz.jpg',
                    negativeZ : 'Cesium-1.7.1/Skybox/mz.jpg'
                }
            }),//用于渲染星空的SkyBox对象
            fullscreenElement : document.body,//全屏时渲染的HTML元素,
            useDefaultRenderLoop : true,//如果需要控制渲染循环，则设为true
            targetFrameRate : undefined,//使用默认render loop时的帧率
            showRenderLoopErrors : false,//如果设为true，将在一个HTML面板中显示错误信息
            automaticallyTrackDataSourceClocks : true,//自动追踪最近添加的数据源的时钟设置
            contextOptions : undefined,//传递给Scene对象的上下文参数（scene.options）
            sceneMode : Cesium.SceneMode.SCENE3D,//初始场景模式
            mapProjection : new Cesium.WebMercatorProjection(),//地图投影体系
            dataSources : new Cesium.DataSourceCollection()
            //需要进行可视化的数据源的集合
        } );

        const scene = viewer.scene;         // 场景
        const canvas = viewer.canvas;       // canvas
        const clock = viewer.clock;         // 时钟
        const camera = viewer.scene.camera; // 相机
        const entities = viewer.entities;   //


        // 添加高德路网图
        viewer.scene.imageryLayers.addImageryProvider(
            new Cesium.UrlTemplateImageryProvider({
                url : 'http://webst01.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}',
                maximumLevel : 5
            })
        )

        //设置镜头位置与方向
        camera.setView( {
            //镜头的经纬度、高度。镜头默认情况下，在指定经纬高度俯视（pitch=-90）地球
            position : Cesium.Cartesian3.fromDegrees( 116.3, 39.9, 100000000 ),//北京100000公里上空
            //下面的几个方向正好反映默认值
            heading : Cesium.Math.toRadians( 0 ),
            pitch : Cesium.Math.toRadians( -90 ),
            roll : Cesium.Math.toRadians( 0 )
        } );

        setTimeout( function()
        {
            camera.flyTo( {
                destination : Cesium.Cartesian3.fromDegrees( 116, 39.9, 6000000 ),  // 相机目标位置
                orientation : { // 相机镜头对准的方法
                    heading : Cesium.Math.toRadians( -15 ), // 代表镜头左右方向,正值为右,负值为左,360度和0度是一样的
                    pitch : Cesium.Math.toRadians( -65 ),   // 代表镜头上下方向,正值为上,负值为下.
                    roll : Cesium.Math.toRadians( 0 )       // 代表镜头左右倾斜.正值,向右倾斜,负值向左倾斜
                },
                duration : 3,//动画持续时间
                complete : function()//飞行完毕后执行的动作
                {
                    console.log("飞行完毕")
                    addEntities();
                }
            } );
        }, 1000 );


        //监听键盘事件，用于平移或者旋转镜头
        var ellipsoid = scene.globe.ellipsoid;
        canvas.onclick = function()
        {
            canvas.focus();
        };
        var flags = {
            looking : false,
            rotateLeft : false,
            rotateRight : false,
            moveUp : false,
            moveDown : false,
            moveLeft : false,
            moveRight : false
        };
        var handler = new Cesium.ScreenSpaceEventHandler( canvas );
        function getFlagForKeyCode( keyCode )
        {
            switch ( keyCode )
            {
                case 'W'.charCodeAt( 0 ) : //向下平移镜头
                    return 'moveDown';
                case 'S'.charCodeAt( 0 ) : //向上平移镜头
                    return 'moveUp';
                case 'A'.charCodeAt( 0 ) : //向右平移镜头
                    return 'moveRight';
                case 'D'.charCodeAt( 0 ) : //向左平移镜头
                    return 'moveLeft';
                case 'Q'.charCodeAt( 0 ) : //向右旋转镜头
                    return 'rotateRight';
                case 'E'.charCodeAt( 0 ) : //向左旋转镜头
                    return 'rotateLeft';
                default :
                    return undefined;
            }
        }
        document.addEventListener( 'keydown', function( e )
        {
            var flagName = getFlagForKeyCode( e.keyCode );
            if ( typeof flagName !== 'undefined' )
            {
                flags[flagName] = true;
            }
        }, false );
        document.addEventListener( 'keyup', function( e )
        {
            var flagName = getFlagForKeyCode( e.keyCode );
            if ( typeof flagName !== 'undefined' )
            {
                flags[flagName] = false;
            }
        }, false );
        viewer.clock.onTick.addEventListener( function( clock )
        {
            var cameraHeight = ellipsoid.cartesianToCartographic( camera.position ).height;
            var moveRate = cameraHeight / 100.0;

            if ( flags.rotateLeft )
            {
                camera.rotateLeft( 0.01 );
            }
            if ( flags.rotateRight )
            {
                camera.rotateRight( 0.01 );
            }
            if ( flags.moveUp )
            {
                camera.moveUp( moveRate );
            }
            if ( flags.moveDown )
            {
                camera.moveDown( moveRate );
            }
            if ( flags.moveLeft )
            {
                camera.moveLeft( moveRate );
            }
            if ( flags.moveRight )
            {
                camera.moveRight( moveRate );
            }
        } );



        /**
         * 根据偏移量计算目标点经纬度
         * @param {} start  起始点经纬度数组，单位度
         * @param {} offset 东北方向的偏移量，单位米
         * @param {} 目标点经纬度数组，单位度
         */
        function offsetToLongLat( start, offset )
        {
            var er = 6378137;
            var lat = parseFloat( start[1] );
            var lon = parseFloat( start[0] );
            var dn = parseFloat( offset[1] );
            var de = parseFloat( offset[0] );

            var dLat = dn / er;
            var pi = Math.PI;
            var dLon = de / ( er * Math.cos( pi * lat / 180 ) )
            return [
                lon + dLon * 180 / pi, lat + dLat * 180 / pi
            ];
        }
        /**
         * 通过绘制三角形模拟卫星光束效果
         * @param {} entities 实体集
         * @param {} stltPos 卫星三维坐标数组
         * @param {} points 地面点
         * @param {} color CSS颜色代码，例如#FF0000
         */
        function lightShinePolygon( entities, stltPos, points, color )
        {
            for ( var i = 0; i < points.length; i += 2 )
            {
                var array = [
                    stltPos[0], stltPos[1], stltPos[2], points[i], points[i + 1], 0
                ];
                if ( i + 2 == points.length )
                {
                    array.push( points[0] );
                    array.push( points[1] );
                }
                else
                {
                    array.push( points[i + 2] );
                    array.push( points[i + 3] );
                }
                array.push( 0 );
                entities.add( {
                    polygon : {
                        hierarchy : Cesium.Cartesian3.fromDegreesArrayHeights( array ),
                        perPositionHeight : true,
                        outline : false,
                        material : Cesium.Color.fromAlpha( Cesium.Color.fromCssColorString( color ), .1 )
                    }
                } );
            }
        }



        /**
         * 添加实体
         */
        function addEntities()
        {
            //卫星一
            {
                var stltPos = [
                    110.0, 40.0, 2500000
                ];
                entities.add( {
                    position : Cesium.Cartesian3.fromDegrees.apply( this, stltPos ),
                    billboard : {
                        image : 'images/satellite-1.png',
                        horizontalOrigin : Cesium.HorizontalOrigin.CENTER,
                        verticalOrigin : Cesium.VerticalOrigin.BOTTOM, //垂直方向位置计算基准设为底部，默认中心
                        width : 92,
                        height : 36
                    }
                } );
                //一个多边形覆盖范围
                {
                    var color = '#FF0000';
                    //模拟光照效果的若干多边形
                    var points = [
                        100, 48, 110, 40, 115, 40, 120, 43, 120, 55
                    ];
                    lightShinePolygon( entities, stltPos, points, color );
                    //地面多边形
                    entities.add( {
                        polygon : {
                            hierarchy : Cesium.Cartesian3.fromDegreesArray( points ),
                            outline : true,
                            outlineColor : Cesium.Color.fromAlpha( Cesium.Color.fromCssColorString( color ), .4 ),
                            material : Cesium.Color.fromAlpha( Cesium.Color.fromCssColorString( color ), .3 )
                        }
                    } );
                }

                //一个圆形覆盖范围
                {
                    var r = 600000;//半径
                    var color = '#0000FF';
                    //圆心
                    var ecLong = 110.0;
                    var ecLat = 30.0;
                    var ec = Cesium.Cartesian3.fromDegrees( ecLong, ecLat, 0 );
                    //模拟光照效果的若干多边形
                    var points = [];
                    for ( var i = 0; i < 360; i += 30 )
                    {
                        var coord = offsetToLongLat( [
                            ecLong, ecLat
                        ], [
                            Math.cos( Math.PI * i / 180 ) * r, Math.sin( Math.PI * i / 180 ) * r
                        ] );
                        points.push( coord[0] );
                        points.push( coord[1] );
                    }
                    lightShinePolygon( entities, stltPos, points, color );
                    //圆
                    viewer.entities.add( {
                        position : ec,
                        ellipse : {
                            semiMinorAxis : r,
                            semiMajorAxis : r,
                            height : 0.0,
                            outline : true,
                            outlineColor : Cesium.Color.fromAlpha( Cesium.Color.fromCssColorString( color ), .4 ),
                            material : Cesium.Color.fromAlpha( Cesium.Color.fromCssColorString( color ), .3 )
                        }
                    } );
                }
            }
        }
    }





    /**
     * 飞行轨迹
     */
    fly(){

        var viewer = new Cesium.Viewer('cesiumContainer');

        //Set the random number seed for consistent results.
        Cesium.Math.setRandomNumberSeed(3);

        //Set bounds of our simulation time
        var start = Cesium.JulianDate.fromDate(new Date(2017, 2, 25, 16));
        var stop = Cesium.JulianDate.addSeconds(start, 3600, new Cesium.JulianDate());

        //Make sure viewer is at the desired time.
        viewer.clock.startTime = start.clone();
        viewer.clock.stopTime = stop.clone();
        viewer.clock.currentTime = start.clone();
        viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; //在时间结束后再次从开始重复
        viewer.clock.multiplier = 1;//时间流速

        //Set timeline to simulation bounds
        viewer.timeline.zoomTo(start, stop);//底部时间条控件调整

        var viewModel = {
            rate: 5.0,
            gravity: 0.0,
            minimumLife: 1.0,
            maximumLife: 1.0,
            minimumSpeed: 5.0,
            maximumSpeed: 5.0,
            startScale: 1.0,
            endScale: 4.0,
            particleSize: 20.0,
            transX: 2.5,
            transY: 4.0,
            transZ: 1.0,
            heading: 0.0,
            pitch: 0.0,
            roll: 0.0,
            fly: false,
            spin: false,
            show: true
        };

        var entityPosition = new Cesium.Cartesian3();
        var entityOrientation = new Cesium.Quaternion();
        var rotationMatrix = new Cesium.Matrix3();
        var modelMatrix = new Cesium.Matrix4();
        function computeModelMatrix(entity, time) {
            var position = Cesium.Property.getValueOrUndefined(entity.position, time, entityPosition);
            if (!Cesium.defined(position)) {
                return undefined;
            }
            var orientation = Cesium.Property.getValueOrUndefined(entity.orientation, time, entityOrientation);
            if (!Cesium.defined(orientation)) {
                modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(position, undefined, modelMatrix);
            } else {
                modelMatrix = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromQuaternion(orientation, rotationMatrix), position, modelMatrix);
            }
            return modelMatrix;
        }

        var emitterModelMatrix = new Cesium.Matrix4();
        var translation = new Cesium.Cartesian3();
        var rotation = new Cesium.Quaternion();
        var hpr = new Cesium.HeadingPitchRoll();
        var trs = new Cesium.TranslationRotationScale();
        function computeEmitterModelMatrix() {
            hpr = Cesium.HeadingPitchRoll.fromDegrees(viewModel.heading, viewModel.pitch, viewModel.roll, hpr);

            trs.translation = Cesium.Cartesian3.fromElements(viewModel.transX, viewModel.transY, viewModel.transZ, translation);
            trs.rotation = Cesium.Quaternion.fromHeadingPitchRoll(hpr, rotation);

            return Cesium.Matrix4.fromTranslationRotationScale(trs, emitterModelMatrix);
        }

        //计算运动轨迹函数：时间+位置
        function computeCirclularFlight(lon, lat, radius) {
            var property = new Cesium.SampledPositionProperty();
            for (var i = 0; i <= 360; i += 45) {
                var radians = Cesium.Math.toRadians(i);
                var time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate());//时间递增
                var position = Cesium.Cartesian3.fromDegrees(lon + (radius * 1.5 * Math.cos(radians)), lat + (radius * Math.sin(radians)),
                    Cesium.Math.nextRandomNumber() * 500 + 1750);//位置变化
                property.addSample(time, position);
            }
            return property;
        }

        //计算模型随时间变化的位置
        //var circularPosition = computeCirclularFlight(-112.110693, 36.0994841, 0.03);
        var staticPosition = Cesium.Cartesian3.fromDegrees(-112.110693, 36.0994841, 1000);//静止的位置

        var entity = viewer.entities.add({

            //Set the entity availability to the same interval as the simulation time.
            availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
                start: start,
                stop: stop
            })]),

            //Load the Cesium plane model to represent the entity
            model: {
                //uri: '../Apps/SampleData/models/CesiumAir/Cesium_Air.gltf',
                uri: '../Apps/SampleData/plane.gltf',
                color: getColor('red', 1),
                minimumPixelSize: 54,//控制模型最小
                maximumScale:5//控制模型最大
            },

            position: staticPosition,

            //实时轨迹显示
            path: {
                show: true,
                leadTime: 0,//飞机将要经过的路径，路径存在的时间
                trailTime: 60,//飞机已经经过的路径，路径存在的时间
                width: 1,//线宽度
                resolution: 1,
                material: new Cesium.PolylineGlowMaterialProperty({
                    glowPower: 0.3,//应该是轨迹线的发光强度
                    color: Cesium.Color.PALEGOLDENROD//颜色
                })
            }
        });

        viewer.trackedEntity = entity;
        function getColor(colorName, alpha) {
            var color = Cesium.Color[colorName.toUpperCase()];
            return Cesium.Color.fromAlpha(color, parseFloat(alpha));
        }
        //根据geojson获取飞行路径
        Cesium.loadJson('SampleData/flyline2.json').then(function (jsonData) {
            var lineArray = jsonData.features[0].geometry.coordinates;
            var property = new Cesium.SampledPositionProperty();
            for (var i = 0;  i< lineArray.length; i ++) {
                var lon = lineArray[i][0];
                var lat = lineArray[i][1];
                var dtime = 100*i;
                var time = Cesium.JulianDate.addSeconds(start, dtime, new Cesium.JulianDate());//时间递增
                var position = Cesium.Cartesian3.fromDegrees(lon, lat,11750);//位置变化
                property.addSample(time, position);
            }
            entity.position = property;
            entity.orientation = new Cesium.VelocityOrientationProperty(property);
        }).otherwise(function (error) {
            console.log(error);
        });
        //移动的原理：position参数包含时间和所处位置，根据当前时间得到位置
        //entity.position = circularPosition;
        //根据模型当前位置自动计算模型的旋转等参数
        //entity.orientation = new Cesium.VelocityOrientationProperty(circularPosition);


        /*************************
         粒子系统实现
         **************************/
        var scene = viewer.scene;
        //粒子系统初始化-实际是使用图片，改变图片的显示样式实现仿粒子化。
        //图片可以利用canvas代替，在canvas中可以绘制自定义图形
        var particleSystem = scene.primitives.add(new Cesium.ParticleSystem({
            image: '../Apps/SampleData/fire.png',

            startColor: Cesium.Color.RED.withAlpha(0.7),
            endColor: Cesium.Color.YELLOW.withAlpha(0.3),

            startScale: viewModel.startScale,
            endScale: viewModel.endScale,

            minimumLife: viewModel.minimumLife,
            maximumLife: viewModel.maximumLife,

            minimumSpeed: viewModel.minimumSpeed,
            maximumSpeed: viewModel.maximumSpeed,

            minimumWidth: viewModel.particleSize,
            minimumHeight: viewModel.particleSize,

            maximumWidth: viewModel.particleSize,
            maximumHeight: viewModel.particleSize,

            // Particles per second.
            rate: viewModel.rate,

            bursts: [
                new Cesium.ParticleBurst({ time: 5.0, minimum: 300, maximum: 500 }),
                new Cesium.ParticleBurst({ time: 10.0, minimum: 50, maximum: 100 }),
                new Cesium.ParticleBurst({ time: 15.0, minimum: 200, maximum: 300 })
            ],

            lifeTime: 16.0,

            emitter: new Cesium.CircleEmitter(0.5),

            emitterModelMatrix: computeEmitterModelMatrix(),

            forces: [applyGravity]
        }));
        particleSystem.show = false;//不显示粒子系统
        //粒子系统重力
        var gravityScratch = new Cesium.Cartesian3();
        function applyGravity(p, dt) {
            // We need to compute a local up vector for each particle in geocentric space.
            var position = p.position;

            Cesium.Cartesian3.normalize(position, gravityScratch);
            Cesium.Cartesian3.multiplyByScalar(gravityScratch, viewModel.gravity * dt, gravityScratch);

            p.velocity = Cesium.Cartesian3.add(p.velocity, gravityScratch, p.velocity);
        }
        //根据目标模型计算粒子系统相关参数
        viewer.scene.preRender.addEventListener(function (scene, time) {
            particleSystem.modelMatrix = computeModelMatrix(entity, time);
            // Account for any changes to the emitter model matrix.
            particleSystem.emitterModelMatrix = computeEmitterModelMatrix();

        });

    }

    render() {
        return (
            <div className="cesium-map">
                <h2>cesium map</h2>
                <Button type="primary">确定</Button>
                <div id="cesiumContainer"></div>
            </div>
        );
    }
}
