import React from 'react';
export default function () {
    return (
        <section>
            <img src={require("../img/education/boston_university.png")} height="100px" width="100px"/>
            <h2>Education</h2>
            <h3>Boston University</h3>
            <ul>
                <li>Degree</li>
                <ul>
                    <li>Bachelor of the Science, Communication (Public Relations Track)</li>
                </ul>
                <li>Activities and Societies</li>
                <ul>
                    <li>Boston University Stage Troupe</li>
                    <li>Boston University Arts Initiative Student Advisory Board</li>
                </ul>
            </ul>
            <img src={require("../img/education/bancroft_school.png")} height="100px"/>
            <h3>Bancroft School</h3>
            <ul>
                <li>Activities and Societies</li>
                <ul>
                    <li>Powder and Wig Theater Society</li>
                    <li>Speech and Debate Team</li>
                    <li>Worcester City Chorus</li>
                    <li>Varsity Softball</li>
                    <li>Chordially Yours A Capella</li>
                    <li>Book Club</li>
                </ul>
            </ul>
        </section>
    )
}