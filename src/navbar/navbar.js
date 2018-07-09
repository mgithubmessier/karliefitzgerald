import React, { Component } from 'react';
import './navbar.css';
export class Navbar extends Component {
    click = (navFocus) => {
        this.props.setNavFocus(navFocus)
    }
    render() {
        return (
            <nav className="navbar">
                <div key="about" onClick={() => this.click('about')}><span>About</span></div>
                <div key="education" onClick={() => this.click('education')}><span>Education</span></div>
                <div key="experience" onClick={() => this.click('experience')}><span>Experience</span></div>
            </nav>
        );
    }
}