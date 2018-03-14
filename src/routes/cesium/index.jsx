/**
 * Created by chencheng on 17-8-30.
 */
import Map from './routes/map';
import EnumRouter from 'constants/EnumRouter';
import { DefaultLayout } from 'routes/routeTool';
import { AssembleRoute } from 'routes/routeTool';

export default AssembleRoute([
    {
        Layout: DefaultLayout,
        path: EnumRouter.cesiumMap,
        component: Map,
    }
]);
