import React, { Component } from 'react';
import './background.css';

export class Background extends Component {
    render() {
        return (
            <img className="background" alt="background" src={require("../../../assets/img/background.jpg")} />
        );
    }
}