/**
 * Created by chencheng on 17-8-30.
 */
import EnumRouter from 'constants/EnumRouter';
import { DefaultLayout } from 'routes/routeTool';
import Map from './routes/map';

export default [
    {
        Layout: DefaultLayout,
        path: EnumRouter.cesiumMap,
        component: Map,
    }
];
