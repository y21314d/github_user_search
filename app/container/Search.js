import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SearchUserAction from '../actions/SearchUserAction'
import Header from '../components/Header'
import Loading from '../components/Loading'
import styled from 'styled-components'
import { layout } from 'styled-system'
import Pagination from '../components/Pagination';

const Box = styled.div`
    padding: 1em;
`
const PaginBox = styled.div`
    margin-top: 15px
`

const Ul = styled.ul`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    padding:0;
    margin:0;
`

const List = styled.li`
    display: flex;
    margin-bottom: 15px;
    flex-basis: calc(100% / 3);
    cursor: pointer;
`

const Img = styled.img`
    border-radius: 5px;
    ${layout}
`

const Name = styled.span`
    ${List}:hover &{
        color: rebeccapurple;
    }
`




class Search extends Component {
    constructor(props) {
        super(props)
    }

    onSubmit = (userName) => {
        this.props.SearchUserAction.getSearchUser(userName)
    }

    onClickUser = (user) => {
        this.props.history.push("/" + `${user.login}`)

    }

    render() {
        return (
            <div>
                <Header userName={''} onSubmit={this.onSubmit} />
                <Box>
                    {this.props.isPending
                        ? <Loading></Loading>
                        : <div>
                            <Ul >
                                {
                                    this.props.users.map(user => {
                                        return (
                                            <List key={user.id} onClick={() => this.onClickUser(user)}>
                                                <Img src={user.avatar_url} width={"150px"} />
                                                <Name>{user.login}</Name>
                                            </List>
                                        )
                                    })
                                }
                            </Ul>
                            <PaginBox>
                                <Pagination></Pagination>
                            </PaginBox>
                        </div>
                    }
                </Box>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        ...props,
        isPending: state.SearchUser.isPending,
        users: state.SearchUser.result,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        SearchUserAction: bindActionCreators(SearchUserAction, dispatch)
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
