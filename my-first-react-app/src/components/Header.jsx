import photoCV from '../assets/images/poza.jpg'

export default function Header() {

    const personalData = [];
    return(
        <header>
            <div>
                <img src={photoCV} alt='Picture with me'/>
            </div>
            <div className='general-description'>
                <div>
                    <h1>Mazere Andreea</h1>
                </div>
                <div className='personal-data'>
                    
                </div>
            </div>
        </header>
    );
}