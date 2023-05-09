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

    console.log("Component Rendered!")

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        // .then(data => setStarWarsData(data))
        .then(data => console.log(data))

        // Side effects in React

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}






