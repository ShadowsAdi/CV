import photoCV from 'my-first-react-app\src\assets\images\poza.jpg'

function Header() {

    const personalData = []
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