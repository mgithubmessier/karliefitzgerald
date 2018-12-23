import React, { Component } from 'react';
import './body.css';
import educationTemplate from './templates/educationTemplate';
import experienceTemplate from './templates/experienceTemplate';
import aboutTemplate from './templates/aboutTemplate';

export class Body extends Component {
    renderBody(navFocus) {
        switch(navFocus) {
            case 'experience':
                return experienceTemplate();
            case 'about':
                return aboutTemplate();
            case 'education':
                return educationTemplate();
            default:
                return null;
        }
    }
    render() {
        return (
            <section className="body">
                { this.renderBody(this.props.navFocus) }
            </section>
        );
    }
}