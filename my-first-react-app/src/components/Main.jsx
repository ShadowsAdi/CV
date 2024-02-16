import '../assets/styles/main.scss'
import data from '../assets/data';

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
                </div>
                <div>
                </div>
            </div>
            <div className='skills'>
                <h1>SKILLS</h1>
            </div>
        </main>
    );
}

export default Main;