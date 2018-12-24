import React, { Component } from 'react';
import './body.css';
import contentService from '../../../content/content.service';

export class Body extends Component {
    key = 0;
    constructList(list, content) {
        content.entries && content.entries.forEach(entry => {
            if (typeof entry === 'object') {
                entry.thumbnail && list.props.children.push(<img src={entry.thumbnail} height="100" alt={entry.heading} key={this.key++} />)
                entry.heading && list.props.children.push((<h2 key={this.key++}>{entry.heading}</h2>));
                if (entry.entries) {
                    list.props.children.push((<ul key={this.key++} children={[]}></ul>));
                    this.constructList(list.props.children[list.props.children.length - 1], entry)
                }                
            } else if (typeof entry === 'string') {
                list.props.children.push(<li key={this.key++}>{entry}</li>);   
            }
        });
    }
    renderBody(navFocus) {
        const content = contentService(navFocus);
        let list = (<div children={[]}></div>);
        this.constructList(list, content);
        return list;
    }
    render() {
        return (
            <section className="body">
                { this.renderBody(this.props.navFocus) }
            </section>
        );
    }
}