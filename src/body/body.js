import React, { Component } from 'react';
import './body.css';
export class Body extends Component {
    render() {
        return (
            <section className="p20">Body: Nav selection: {this.props.navFocus}</section>
        );
    }
}