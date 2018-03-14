/**
 * Created by chencheng on 17-8-30.
 */
import Entry from './routes/entry';
import EnumRouter from 'constants/EnumRouter';
import { DefaultLayout } from 'routes/routeTool';
import { AssembleRoute } from 'routes/routeTool';

export default AssembleRoute([
    {
        Layout: DefaultLayout,
        path: EnumRouter.entry,
        component: Entry,
    }
]);
