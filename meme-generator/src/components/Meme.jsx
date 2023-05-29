import memesData from "../memesData"
import React from 'react'

function Meme(){

    const [imageURL,setImageURL] = React.useState("")

    function getRandomMemeURL(){
        const randomNumber = Math.floor((Math.random() * 100));
        const memeURL = memesData.data.memes[randomNumber].url
        return memeURL
    }

    function handleOnClick(){
        setImageURL(getRandomMemeURL())
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
                >
                    Get a new meme image! 🖼️
            </button>
            <div className="image-container">
                <img className="image" src={imageURL} alt="" />
            </div>
        </div>
    )
}

export default Meme