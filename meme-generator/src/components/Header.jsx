import trollFace from '../assets/troll-face.png'

function Header(){
    return(
        <div className="header-container">
            <div className="header-title-container">
                <img src={trollFace} alt="" className='header-logo' />
                <h1 className="header-title">Meme generator</h1>
            </div>

        </div>
    )
}

export default Header