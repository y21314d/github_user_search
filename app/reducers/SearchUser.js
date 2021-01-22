import Constants from '../util/Constants'

const actionType = Constants.ActionType

const initState = {
    error: null,
    isPending: false,
    result: [],
    total_count: 0,
    currentPage: 1
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
                result: action.payload.items,
                total_count: action.payload.total_count,
                currentPage: action.payload.currentPage
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