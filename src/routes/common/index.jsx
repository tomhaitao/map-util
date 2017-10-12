/**
 * Created by chencheng on 17-8-30.
 */
import { AssembleRoute } from 'routes/routeTool';
import loginRoutes from './Login';
import MapLeaflet from './MapLeaflet';
import MapCesium from './MapCesium';

export default AssembleRoute(loginRoutes, MapLeaflet, MapCesium);
