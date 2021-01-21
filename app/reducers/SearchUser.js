import Constants from '../util/Constants'

const actionType = Constants.ActionType

const initState = {
    error: null,
    isPending: false,
    result: [],
}

export default (state = initState, action) => {
    switch (action.type) {
        case actionType.SEARCH_REQUEST:
            return {
                ...state,
                isPending: true
            }
        case actionType.SEARCH_SUCCESS:
            return {
                ...state,
                isPending: false, 
                result: action.payload
            }
        case actionType.SEARCH_FAILURE:
            return {
                ...state,
                isPending: false,
                error: action.payload,
            }
        default:
            return state;
    }
}