import React, { Component } from 'react';
import { Navbar } from './components/navbar/navbar';
import { Body } from './components/body/body';
import { Background } from './components/background/background';
import './app.css';
export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navFocus: 'about'
        };
    }        
    giveBodyNavFocus = (newNavFocus) => {
        // setState is necessary to trigger a re-rendering of all child components
        this.setState({ navFocus: newNavFocus });
    }
    render() {
        return (
            <div>
                <Background></Background>
                <Navbar setNavFocus={this.giveBodyNavFocus}></Navbar>
                <Body navFocus={this.state.navFocus}></Body>
            </div>
        );
    }
}