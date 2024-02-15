import '../assets/styles/header.scss'
import photoCV from '../assets/images/poza.jpg'
//used ../ to reference a file in the parent folder (important because i lost a lot of time on this)

function Header() {
    return(
        <header>
            <div>
                <img src = {photoCV} alt='Picture with me'/>
            </div>
            <div className='numeNastere'>
                <h1>Mazere Andreea</h1>
                <h1>14/08/2003</h1>
            </div>
            <div className='personalData'>
                <h3>Phone:</h3>
                <h3>I'm also on Whatsapp</h3>
                <h3>Email:</h3>
                <h3>linkedIn:</h3>
                <h3>Address:</h3>
                <h3>Github:</h3>
                <h3>Driver's license:</h3>
            </div>
        </header>
    );
}

export default Header;