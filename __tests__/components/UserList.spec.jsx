import React from 'react';
import UserList from '../../src/routes/common/Login/components/Login/Login';
import { shallow } from 'enzyme';


describe( 'UserList', () => {

	it('UserList Component should render', () => {

		const props = {
			userListReducer:{
				list:[]
			}
		}

		const wrapper = shallow(<UserList  {...props} />)

		expect(wrapper.find('div').exists());

	})
})
