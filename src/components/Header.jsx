import '../assets/styles/header.scss'
import photoCV from '../assets/images/poza.jpg'
import data from "../assets/data"
//used ../ to reference a file in the parent folder (important because i lost a lot of time on this)

function Header() {
    return(
        <header>
            <div>
                <img src = {photoCV} alt='Picture with me'/>
            </div>
            <div className='numeNastere'>
                <h1>Mazere Andreea</h1>
                <h2>14/08/2003</h2>
            </div>
            <div className='personalData'>
                {["Phone: " + data.personalData.phone,
                    "I'm also on Whatsapp",
                    "Email: " + data.personalData.email,
                    "linkedIn: " + data.personalData.linkedIn,
                    "Address: " + data.personalData.address,
                    "Github: " + data.personalData.github,
                    "Driver's license: " + data.personalData.driverslicense].map((text, index) => (
                        <h3 key = {index}>{text}</h3>
                    ))}
            </div>
        </header>
    );
}

export default Header;