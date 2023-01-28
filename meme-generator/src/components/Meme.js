import React from "react";
import memesData from "./memesData";

export default function Meme () {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://cdn.vox-cdn.com/thumbor/qCfHPH_9Mw78vivDlVDMu7xYc78=/715x248:1689x721/920x613/filters:focal(972x299:1278x605):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69305239/shrek4_disneyscreencaps.com_675.0.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/26am.jpg")

    let url;
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
        
        // url = memesArray[randomNumber].url;
    }

    return (
        <main>
            <p>{url}</p>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                />
                <button
                    onClick={getMemeImage}
                    className="form--button"
                    type="submit">
                    Get a new meme image 🈯
                </button>
            </div>
            <img
                src={meme.randomImage}
                alt="Meme"
                className="meme--image"
            />
        </main>
    )
}