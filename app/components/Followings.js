import React, { useState } from 'react'
import { layout } from 'styled-system'
import styled from 'styled-components'
import Loading from '../components/Loading'


const Box = styled.div`
    padding: 0 16px;
    display: flex;
    flex-flow: column;
`
const H2 = styled.h2`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
`
const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
const Li = styled.li`
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    padding-bottom: 5px;
    display:flex;
    flex-flow: column;
`


const Img = styled.img`
    border-radius: 5px;
    ${layout}
`

const ImgBox = styled.div`
    border-radius: 5px;
    ${layout}
`

const Name = styled.span`
    font-size: 16px;
    ${Li}:hover &{
        color: rebeccapurple;
    }
`

function Followings(props) {
    const { followings } = props

    const [fetching , setFetching] = useState(true)

    const onImageLoad = () => {
        setFetching( false )
    }

    return (
        <Box>
            <H2>Followings</H2>
            <Ul>
                {
                    followings.map(following => {
                        return (
                            <Li key={following.id}>
                                {/* <Img src={following.avatar_url} width={["150px", "80px", "100px", "150px"]} /> */}
                                <ImgBox >
                                    <img src={following.avatar_url} width={["150px", "80px", "100px", "150px"]} onLoad={() => onImageLoad()} />
                                    {
                                        fetching === false
                                            ? null
                                            : <Loading position={"relative"}></Loading>
                                    }
                                </ImgBox>
                                <Name>{following.login}</Name>
                            </Li>
                        )
                    })
                }
            </Ul>


        </Box>
    )
}

export default (Followings) 
