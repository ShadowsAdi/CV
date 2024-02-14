import '../assets/styles/header.css'
//used ../ to reference a file in the parent folder (important because i lost a lot of time on this)

function Header() {

    return(
        <header>
            <div>
                <img src = 'src/assets/images/poza.jpg' alt='Picture with me'/>
            </div>
            <div className='general-description'>
                <div>
                    <h1>Mazere Andreea</h1>
                </div>
                <div className='personal-data'>
                    <h2>Lol</h2>
                </div>
            </div>
        </header>
    );
}

export default Header;