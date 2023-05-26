import React from "react";

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})

    console.log("Component Rendered!")

    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data)) // if we put like this, our component will render infinitely
        // .then(data => console.log(data))

        // Side effects in React
        React.useEffect(() => {
            fetch("https://swapi.dev/api/people/1")
                .then(res => res.json())
                .then(data => setStarWarsData(data))
        })

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}