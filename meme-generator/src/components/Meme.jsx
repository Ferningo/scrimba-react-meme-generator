import memesData from "../memesData"
import React from 'react'

function Meme(){

    const[meme,setMeme] = React.useState({
        topText: 'Top text',
        bottomText: 'Bottom text',
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

    function handleOnChange(event){
        const {name,value} = event.target
        setMeme( prevMemeData => {
            return{
                ...prevMemeData,
                [name] : value,
            }
        })

    }


    return(
        <div className="meme-input-container">
            <div className="text-input-container">
                <input
                    type="text" 
                    className="text-input"
                    placeholder="top text"
                    name="topText"
                    onChange={handleOnChange}
                 />
                <input 
                    type="text"
                    placeholder="bottom text"
                    name="bottomText"
                    onChange={handleOnChange}
                />
            </div>
            <button 
                className="generate-meme-button"
                onClick={handleOnClick}
                >
                    Get a new meme image! 🖼️
            </button>
            <div className="image-container">
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
                <img className="image" src={meme.memeImage} alt="" />
            </div>
        </div>
    )
}

export default Meme