import memesData from "../memesData"
import React from 'react'

function Meme(){

    const[meme,setMeme] = React.useState({
        topText: '',
        bottomText: '',
        memeImage: 'https://i.imgflip.com/345v97.jpg'
    })

    const [allMemeImages,setAllMemeImages] = React.useState(memesData.data.memes)

    function handleOnClick(){
        let randomNumber = Math.floor(Math.random() * allMemeImages.length)
        let randomImage = allMemeImages[randomNumber].url
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                memeImage: randomImage
            }
        })
         

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
                <img className="image" src={meme.memeImage} alt="" />
            </div>
        </div>
    )
}

export default Meme