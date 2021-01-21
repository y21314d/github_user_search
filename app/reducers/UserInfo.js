import Constants from '../util/Constants'

const actionType = Constants.ActionType

const initState = {
    error: null,
    isPending: true,
    result: {userInfo:[], repos:[], followers:[], followings:[]},
}

export default (state = initState, action) => {
    switch (action.type) {
        case actionType.USERINFO_REQUEST:
            return {
                ...state,
                isPending: true
            }
        case actionType.USERINFO_SUCCESS:
            return {
                ...state,
                isPending: false, 
                result: action.payload
            }
        case actionType.USERINFO_FAILURE:
            return {
                ...state,
                isPending: false,
                error: action.payload,
            }
        default:
            return state;
    }
}