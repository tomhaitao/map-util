import 'cesium/Widgets/widgets.css';
import Cesium from 'cesium/Cesium';
import { Component } from 'react';
import { Button } from 'antd';
import './Map.scss';

export default class Map extends Component {
    componentDidMount(){
		var viewer = new Cesium.Viewer('cesiumContainer', {
			animation: false,
			infoBox: false,
			timeline: false,
			geocoder: false,
			homeButton: false,
			selectionIndicator: false,
			navigationHelpButton: false,
			navigationInstructionsInitiallyVisible: false,
			automaticallyTrackDataSourceClocks: false,
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
