/**
 * Created by chencheng on 2017/6/12.
 */
import EnumRouter from 'constants/EnumRouter';

import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import { NoMatch } from './routeTool';

import EntryRoutes from './entry';
import CesiumRoutes from './cesium';
import LeafletRoutes from './leaflet';

/**
 * 路由配置
 * @constructor
 */
const Routes = () => (
    <BrowserRouter
        forceRefresh={!('pushState' in window.history)}
        keyLength={12}
    >
        <Switch>
            <Route exact path="/" render={() => <Redirect push to={EnumRouter.entry} />} />

            {EntryRoutes()}

            {CesiumRoutes()}

            {LeafletRoutes()}

            {/* 404 NOT found */}
            <Route component={NoMatch} />
        </Switch>

    </BrowserRouter>
);

export default Routes;
