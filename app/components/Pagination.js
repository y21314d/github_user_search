import React, { useState } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SearchUserAction from '../actions/SearchUserAction'
import styled from 'styled-components'


const Box = styled.div`
    height:50px;
    margin: 0 15px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`

const Arrow = styled.div`
    cursor: pointer;
`

const HiddenElement = styled.div`
    visibility: hidden;
    width: 30px;
    height: 20px;
`


function Pagination(props) {

    const renderArrow = ( page, text ) => {
        if (props.total_count < 30) { return null }
        return (
            <Arrow onClick={() => clickPagination(page)}>
                <span>{text}</span>
                {
                    text === 'Previous'
                        ? <i className="fas fa-angle-left"></i>
                        : <i className="fas fa-angle-right"></i>
                }
            </Arrow>
        );
    }
    const clickPagination = (page) => {
        let url_string = props.location.search
        var url = new URLSearchParams(url_string);
        var userName = url.get("q");

        props.SearchUserAction.getSearchUser(userName, page)
        props.history.replace("/search" + `?per_page=30&page=${page}&q=${userName}`)
    }
    const prevLink = renderArrow(props.currentPage - 1,'Previous');
    const nextLink = renderArrow(props.currentPage + 1,'Next');
    let totalPage = Math.ceil(props.total_count / 30) 

    return ( 
        <Box>
            { props.currentPage === 1
                ?  <React.Fragment>
                    <HiddenElement />
                    {nextLink}
                    </React.Fragment>
                : props.currentPage === totalPage 
                    ?   <React.Fragment>
                        {prevLink}
                        <HiddenElement />
                        </React.Fragment>
                    :   <React.Fragment>
                        {prevLink}
                        {nextLink}
                        </React.Fragment>
            }
           
           
        </Box>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        SearchUserAction: bindActionCreators(SearchUserAction, dispatch)
    };
};

export default withRouter(connect(null, mapDispatchToProps)(Pagination))
