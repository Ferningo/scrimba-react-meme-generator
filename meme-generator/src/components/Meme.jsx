function Meme(){
    function handleOnClick(){
        console.log('Click!')
    }

    function handleOnHover(){
        console.log('Mouse Hovering!')
    }


    return(
        <div className="meme-input-container">
            <div className="text-input-container">
                <input className="text-input" type="text" placeholder="top text" />
                <input type="text"   placeholder="bottom text"/>
            </div>
            <button 
                className="generate-meme-button"
                onClick={handleOnClick}
                onMouseOver={handleOnHover}
                >
                
                    Get a new meme image! 🖼️
            </button>
        </div>

    )
}

export default Meme