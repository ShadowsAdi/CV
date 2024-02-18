import '../assets/styles/main.scss'
import data from '../assets/data';
import Learn from './Learn'
import { useState } from "react";
import HardSkills from "./Skills"

function Main() {

    return(
        <main>
            <div className='summary'>
                <h1>SUMMARY</h1>
                <p>{data.summary.text}</p>
            </div>
            <div className='education'>
                <h1>EDUCATION</h1>
                <div>
                    <p>
                        {data.education.undegrad[data.education.undegrad.length - 1]}
                    </p>
                    <ul>
                        {data.education.undegrad.slice(0,data.education.undegrad.length - 1).map((item,index) => (
                            <li key = {index}>{item}</li>
                        ))}
                    </ul>
                    <Learn load = {() => {

                    }}/>
                </div>
                <div>
                    <p>
                        {data.education.highschool[data.education.highschool.length - 1]}
                    </p>
                    <ul>
                        {data.education.highschool.slice(0,data.education.highschool.length - 1).map((item,index) => (
                            <li key = {index}>{item}</li>
                        ))}
                    </ul>
                    <button onclick>What did I learn in highschool?</button>
                </div>
            </div>
            <div className='skills'>
                <HardSkills data = {data.skills.hard}/>
                <h1>SOFT SKILLS</h1>
                <div className='soft'>
                    <i style = {{fontWeight: 700, fontSize: 18}}>{data.skills.soft}</i>
                </div>
                <div className='languages'></div>
                <div className='projects'></div>
            </div>
        </main>
    );
}

export default Main;