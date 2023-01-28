import React from "react";


export default function Count(props) {
    console.log("Count Component rendered!")
    return (
        <div className="counter--count">
            <h1>{props.number}</h1>
        </div>
    )
}