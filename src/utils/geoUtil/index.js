/**
 * Created by chencheng on 17-9-29.
 */
import _ from 'lodash';
import TJDistrictMap from './TJ_District_Map';

class GeoUtil {
    /**
     * 依据行政区名称获取经纬度
     * @param districtName
     * @returns {Array}
     */
    getCoordinatesByDistrict(districtName) {

        /**
         *
         * @param name
         * @param districtsMap
         */
        const recursionSearch = (name, districtsMap) => {

            for (let i = 0; i < districtsMap.length; i++) {
                if (_.includes(districtsMap[i].name, name) || _.includes(name, districtsMap[i].name)) {
                    return districtsMap[i].center;
                }
                const coordinate = recursionSearch(name, districtsMap[i].districts);
                if (coordinate) {
                    return coordinate;
                }
            }

            return null;
        };

        return recursionSearch(districtName, TJDistrictMap);
    }
}

export default new GeoUtil();
