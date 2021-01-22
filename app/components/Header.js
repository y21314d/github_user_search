import React, { Component } from 'react'
import styled from 'styled-components'

const Box = styled.div`
    background-color: #f4f4f4;
    border-bottom: 1px solid #aaa;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, .2);
`

const Label = styled.label`
    font-size: 1em;
    align-self: center;
`

const Form = styled.form`
    display: flex;
    justify-content: center;
    text-align: center;
`

const Div = styled.div`
    padding: 5px;
`

const Input = styled.input`
    background: ${props => props.theme.colors};
    border-radius: 5px 0 0 5px;
    height: 25px;
  `
const Button = styled.button`
    height: 31px;
    border-radius: 0 5px 5px 0 ;
`


export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ""
        }
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        if (!this.state.inputValue) { return }
        this.props.onSubmit(this.state.inputValue);
    };

    handleOnChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    };


    render() {
        return (
            <Box >
                <Form
                    onSubmit={this.handleOnSubmit}
                >
                    <Label
                        htmlFor="searchInput"
                    >
                        Github Users Search
                    </Label>
                    <Div>
                        <Input
                            type="text"
                            in="searchInput"
                            placeholder="Input username"
                            value={this.state.inputValue}
                            onChange={this.handleOnChange}
                        />
                        <Button
                            type="submit"
                        >
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </Button>
                    </Div>
                </Form>
            </Box>
        );
    }
}
