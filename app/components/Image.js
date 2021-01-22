import React, { Component } from 'react'
import styled from 'styled-components'
import Loading from '../components/Loading'

const Img = styled.img`
`

export default class Image extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fetching: true
        }
    }

    onImageLoad = () => {
        this.setState(() => ({
            fetching: false,
        }));
      }
    
      renderSpinner() {
        if (this.state.fetching === false) {return null;}
        return (
          <Loading
          />
        );
      }

    render() {
        return (
            <div>
                <img
                    alt=""
                    onLoad={this.onImageLoad}
                />
                {this.renderSpinner()}

            </div>
        )
    }
}
