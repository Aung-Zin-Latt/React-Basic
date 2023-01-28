import React from "react";

export default function Joke(props) {

    // Conditional Rendering
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div>
            {props.setup && <h3>Setup: {props.setup} </h3>}
            {isShown && <p>Punchline: {props.punchline} </p>}
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div>
    )
}