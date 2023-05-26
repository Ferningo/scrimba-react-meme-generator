import trollFace from '../assets/troll-face.png'

function Header(){
    return(
        <div className="header-container">
            <div className="header-title-container">
                <img src={trollFace} alt="" className='header-logo' />
                <h2 className="header-title">Meme generator</h2>
            </div>
            <p className='header-project-name'>React Course - Project 3</p>
        </div>
    )
}

export default Header