import React from 'react'

function Meme(){

    const[meme,setMeme] = React.useState({
        topText: '',
        bottomText: '',
        memeImage: 'https://i.imgflip.com/345v97.jpg'
    })

    const [allMemeImages,setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(res => setAllMemeImages(res.data.memes))
    },[])

    
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
                    value={meme.topText}
                 />
                <input 
                    type="text"
                    placeholder="bottom text"
                    name="bottomText"
                    onChange={handleOnChange}
                    value={meme.bottomText}
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