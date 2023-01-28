import React from "react";
import Count from "./components/Count"

export default function App() {
    const [count, setCount] = React.useState(0);

    function add() {
        // console.log("Add")
        setCount(prevCount => prevCount + 1) // prevCount is a callback function
    }

    function minus() {
        if (count > 0) {
            setCount(prevCount => prevCount - 1)
        }
    }

    return (
        <div className="counter">
            <button onClick={minus} className="counter--minus">-</button>
            <Count number={count} />
            <button onClick={add} className="counter--plus">+</button>
        </div>
    )
}

