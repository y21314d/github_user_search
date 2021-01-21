import { combineReducers } from 'redux';
import UserInfo from './UserInfo'
import SearchUser from './SearchUser'

const rootReducer = combineReducers({
	UserInfo,
	SearchUser
});

export default rootReducer;