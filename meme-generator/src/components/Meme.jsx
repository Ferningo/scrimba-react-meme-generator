function Meme(){
    return(
        <div className="meme-input-container">
            <div className="text-input-container">
                <input className="text-input" type="text" />
                <input type="text" />
            </div>
            <button className="generate-meme-button">Get a new meme image!</button>
        </div>

    )
}

export default Meme