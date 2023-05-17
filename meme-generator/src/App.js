// import React from "react";
// import Header from "./components/Header";
// import Meme from "./components/Meme";

// export default function App() {

//     return (
//         <div>
//             <Header />
//             <Meme />
//         </div>
//     )
// }




import React from "react";

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)

    console.log("Component Rendered!")

    // side effects
    React.useEffect(() => {
        console.log("Effect ran")
    })

    return (
        <div>
            <h2>The Count is  { count }</h2>
            <button
                className="form--button"
                type="submit">
                Add
            </button>
        </div>
    )
}






