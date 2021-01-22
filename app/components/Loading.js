import React from 'react'
import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg) translate3d(0,0,0);
  }

  to {
    transform: rotate(359deg) translate3d(0,0,0);
  }
`;

const LoadingBox = styled.div`
    width: 100px;
    height: 100px;
    position: ${props => props.position};
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    box-sizing: border-box;
    border-top: 8px solid rgb(240,82,0);
    border-right: 8px solid rgba(240,82,0,.3);
    border-bottom: 8px solid rgba(240,82,0,.3);
    border-left: 8px solid rgba(240,82,0,.3);
    border-radius: 100%;
    animation: ${rotate} 0.5s infinite linear;
`



export default function Loading(props) {
    return (
        <div>
            <LoadingBox width={props.width} height={props.height} position={props.position}></LoadingBox>
        </div>
    )
}
