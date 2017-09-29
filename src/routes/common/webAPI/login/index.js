/**
 * Created by chencheng on 2017/6/17.
 */

import T from 'utils/T';
import EnumAPI from 'constants/EnumAPI';

export function login(email, password) {

    const username = email;
    return T.request.post(EnumAPI.login, { username, password });
}
