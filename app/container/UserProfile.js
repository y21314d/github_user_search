import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components'
import Header from '../components/Header'
import UserInfo from '../components/UserInfo'
import Repos from '../components/Repos'
import Followers from '../components/Followers'
import Followings from '../components/Followings'
import { flexbox } from 'styled-system'
import * as UserInfoAction from '../actions/UserInfoAction'
import * as SearchUserAction from '../actions/SearchUserAction'
import Loading from '../components/Loading'

const Box = styled.div`
    padding-top: 20px;
    display: flex;
    ${flexbox}
`

const Flex = styled.div`
    display: flex;
    
`

class UserProfile extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let userName = this.props.location.pathname.split('/')
        this.props.UserInfoAction.getUserInfo(userName[1])

    }

    onSubmit = (userName) => {
        this.props.SearchUserAction.getSearchUser(userName, 1)
        this.props.history.push("/search"+`?per_page=30&page=${1}&q=${userName}`)
    }
    

    render() {
        if (this.props.isPending) {
            return (
              <div >
                <Loading width={100} height={100} position={"absolute"} />
              </div>
            );
          }

        return (
            <div>
                <div>
                    <Header  onSubmit={this.onSubmit} />
                    <UserInfo
                        userInfo={this.props.userInfo}
                    />
                    <Box flexDirection={['column', 'row', 'row']}>
                        <Repos 
                            repos={this.props.repos} 
                            />
                        <Flex>
                            <Followers 
                                followers={this.props.followers}
                                />
                            <Followings 
                                followings={this.props.followings}
                                />
                        </Flex>
                    </Box>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
      ...props,
      isPending: state.UserInfo.isPending,
      userInfo: state.UserInfo.result.userInfo,
      repos: state.UserInfo.result.repos,
      followers: state.UserInfo.result.followers,
      followings: state.UserInfo.result.followings
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        UserInfoAction: bindActionCreators(UserInfoAction, dispatch),
        SearchUserAction: bindActionCreators(SearchUserAction, dispatch)
    };
  };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile))