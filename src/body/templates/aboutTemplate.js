import React from 'react';
export default function () {
    return (
        <ul>
            <li>Karlie Fitzgerald is just about the best girlfriend in the WORLD.</li>
            <li>She rocks the world of PR and ain't gonna take music recommendations from no-BODY</li>
            <li>Her favorite place is new york city, likely some kind of barre studio or place with corgis or boston terriers, speaking of which, here are a few</li>
            <li className="dogs">
                <img width="75px"src={require("../img/about/corgi1.jpg")}/>
                <img width="75px"src={require("../img/about/corgi2.jpg")}/>
                <img width="75px"src={require("../img/about/corgi3.jpg")}/>
                <img width="75px"src={require("../img/about/corgi4.jpg")}/>
                <img width="75px"src={require("../img/about/corgi5.jpeg")}/>
                <img width="75px"src={require("../img/about/terrier1.jpg")}/>
                <img width="75px"src={require("../img/about/terrier2.jpg")}/>
                <img width="75px"src={require("../img/about/terrier3.jpg")}/>
                <img width="75px"src={require("../img/about/terrier4.jpg")}/>
            </li>
            <li>Her belief that the blue line is best will be short lived, because the orange line will take it over...psh, orange is her favorite color too.</li>
            <li>She has so much love to give, but most of it is for her ma'am.</li>
            <li>HAPPY BIRTHDAY KARLIE!!!</li>
        </ul>
    )
}