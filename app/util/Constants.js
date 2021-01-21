let BaseUrl = 'https://api.github.com/'

const Constants = {
  Url: {
    SearchUser: BaseUrl + "search/users",
    User: BaseUrl + "users/",
  },
  ActionType: {
    USERINFO_REQUEST: "USERINFO_REQUEST",
    USERINFO_SUCCESS: "USERINFO_SUCCESS",
    USERINFO_FAILURE: "USERINFO_FAILURE",
    SEARCH_REQUEST: "SEARCH_REQUEST",
    SEARCH_SUCCESS: "SEARCH_SUCCESS",
    SEARCH_FAILURE: "SEARCH_FAILURE",
  }
};

module.exports = Constants;