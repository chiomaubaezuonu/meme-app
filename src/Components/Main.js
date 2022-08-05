import React from "react"
import memeData from "./memeData"





function Main(){

    const [inputData, setInputData] = React.useState({
        topText: "",
        bottomText: "",
        image:"https://i.imgflip.com/30b1gx.jpg"
    })

    console.log(inputData)

    const [getUrlImage,setGetUrlImage] = React.useState(memeData)

    function handleClick(){
        const memesData = getUrlImage.data.memes
        const getRandom = Math.floor(Math.random() * memesData.length + 1)
        const getUrl = memesData[getRandom].url
        setGetUrlImage(oldUrl => ({
            ...oldUrl,
            image: getUrl
        }))
        

    }

    function changeText(event){
        const {name, value,} = event.target
        setInputData(oldUrl => ({
            ...oldUrl,
            [name] : value
        })) 
    }

   
    
    return(
        <div className="wrapper">
        <div className="main-content">
            <input placeholder="Shut up" 
                name="topText"
                value={inputData.topText}
                onChange={changeText}
            
            />
            <input placeholder="and take my money" 
                name="bottomText"
                value={inputData.bottomText}
                onChange={changeText}
            />
            <button className="btn" onClick={handleClick}>Get a new meme image  🖼</button>
            <div className="meme-div">
                <img className="url-img" src = {getUrlImage.image} />
                <h1 className="meme-text">{inputData.topText}</h1> 

            </div>
        </div>
        </div>
    )
}



export default Main