import EnumRouter from 'constants/EnumRouter';
import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'antd';

export default class Entry extends PureComponent {
    render() {
        return (
            <Row type="flex" gutter={16} align="middle" justify="center" style={{height: 600}}>
                <Link to={EnumRouter.leafletMap}>
                    <Button type="primary">Leaflet入口</Button>
                </Link>

                <Link to={EnumRouter.cesiumMap}>
                    <Button type="primary">Cesium入口</Button>
                </Link>
            </Row>
        );
    }
}
