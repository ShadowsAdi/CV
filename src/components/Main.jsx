import '../assets/styles/main.scss'
import data from '../assets/data';
import Learn from './Learn'
import { useState } from "react";
import Skills from "./HardSkills"
import Education from './Education';

function Main() {

    return(
        <main>
            <div className='summary'>
                <h1>SUMMARY</h1>
                <h3>{data.summary.text}</h3>
            </div>
            <div className='education'>
                <h1>EDUCATION</h1>
                <div><Education education = {data.education.undegrad}/> <button>What did I learn in undergrad?</button></div>
                <div><Education education = {data.education.highschool}/> <button>What did I learn in highschool?</button></div>
            </div>
            <div className='skills'>
                <h1>HARD SKILLS</h1>
                <Skills data = {data.skills.hard}/>
                <h1>SOFT SKILLS</h1>
                <div className='soft'>
                    <i style = {{fontWeight: 700, fontSize: 18}}>{data.skills.soft}</i>
                </div>
                <div className='languages'></div>
                <h1>LANGUAGES</h1>
                <Skills data = {data.skills.languages}/>
                <div className='projects'></div>
            </div>
        </main>
    );
}

export default Main;