/**
 * Created by chencheng on 17-8-30.
 */
import EnumRouter from 'constants/EnumRouter';
import Map from './routes/map';

import { DefaultLayout } from 'routes/routeTool';
import { AssembleRoute } from 'routes/routeTool';


export default AssembleRoute([
    {
        Layout: DefaultLayout,
        path: EnumRouter.leafletMap,
        component: Map,
    }
]);
