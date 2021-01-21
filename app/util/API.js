import https from './https'
import Constants from './Constants'

export const callSearchUser = (data) => https('get', Constants.Url.SearchUser, data)
export const callUser = (data) => https('get', Constants.Url.User, data)

