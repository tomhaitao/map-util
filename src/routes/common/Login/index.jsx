/**
 * Created by chencheng on 17-8-30.
 */
import EnumRouter from 'constants/EnumRouter';
import { DefaultLayout } from 'routes/routeTool';
import Login from './routes/login';

export default [
    {
        Layout: DefaultLayout,
        path: EnumRouter.login,
        component: Login,
    }
];
