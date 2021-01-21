import Constants from '../util/Constants'
import { callSearchUser  } from '../util/API'

const actionType = Constants.ActionType

export const getSearchUser= (userName) => {
	return ((dispatch) => {
		dispatch({ type: actionType.SEARCH_REQUEST })
		return callSearchUser(`?per_page=30&page=1&q=${userName}`)
			.then((res) => {
				dispatch({ type: actionType.SEARCH_SUCCESS, payload: res.items })
				return Promise.resolve(res)
			}, (err) => {
                dispatch({ type: actionType.SEARCH_FAILURE, payload: err }) 
				return Promise.reject(err)
			})
	})
}