import Constants from '../util/Constants'
import { callUser } from '../util/API'

const actionType = Constants.ActionType


export const getUserInfo = (userName) => {
	return ((dispatch) => {
		dispatch({ type: actionType.USERINFO_REQUEST })
		let result = [
			callUser(userName), 
			callUser(userName + "/repos"),
			callUser(userName + "/followers"),
			callUser(userName + "/following")
		]
		// return callUser(userName)
		return Promise.all(result)
			.then((res) => {
				dispatch({ type: actionType.USERINFO_SUCCESS, payload: {userInfo:res[0], repos:res[1], followers:res[2], followings:res[3]} })
				return Promise.resolve(res)
			}, (err) => {
                dispatch({ type: actionType.USERINFO_FAILURE, payload: err }) 
				return Promise.reject(err)
			})
	})
}

