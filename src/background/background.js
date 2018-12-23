import React, { Component } from 'react';
import './background.css';
export class Background extends Component {
    renderBySize(size) {
        if(size === 'sm')
            return (
                <div className="background">
                    <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
                    <iframe src="//lightwidget.com/widgets/cb78d8215b0b5ea5933dec8269c9daa8.html" 
                        scrolling="no" allowtransparency="true" class="lightwidget-widget"></iframe>                        
                </div>
            );
        else {
            return <div className="background">
                <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
                <iframe src="//lightwidget.com/widgets/c99fe825473e57b8b55c788245e409c2.html" 
                    scrolling="no" allowtransparency="true" className="lightwidget-widget"></iframe>                    
            </div>
        }
    }
    render() {
        return (
            <div>{this.renderBySize('lg')}</div>
        );
    }
}