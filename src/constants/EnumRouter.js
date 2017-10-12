/**
 * Created by chencheng on 2017/6/13.
 */

const _rootRoute = window.ENV.rootPath;

/**
 * 格式化路由
 * @param route
 * @returns {*}
 * @private
 */
const _processRoute = (route) => (_rootRoute + route);

/**
 *
 * @type {{rootRoute: string, login: *, cesiumMap: *, leafletMap: *}}
 */
const EnumRouter = {
    rootRoute: _rootRoute,		// 根路由

    login: _processRoute('login'),		// 登陆

    cesiumMap: _processRoute('cesiumMap'),		// cesiumMap

    leafletMap: _processRoute('leafletMap'),    // leafletMap

};


export default EnumRouter;
