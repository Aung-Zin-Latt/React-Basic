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
import boxes from "./components/Boxes"
import Box from "./components/Box";

export default function App() {

    const [squares, setSquares] = React.useState(boxes)
    
    // we write like this is imperative
    // function toggle(id) {
    //     setSquares(prevSquares => {
    //         const newSquares = []
    //         for (let i=0; i < prevSquares.length; i++) {
    //             const currentSquare = prevSquares[i]
    //             if (currentSquare.id === id) {
    //                 const updatedSquare = {
    //                     ...currentSquare,
    //                     on: !currentSquare.on
    //                 }
    //                 newSquares.push(updatedSquare)
    //             } else {
    //                 newSquares.push(currentSquare)
    //             }
    //         }
    //         return newSquares
    //     })
    // }
    

    // we write like this is declarative
    function toggle(id) {
        setSquares(prevSquare => {
            return prevSquare.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    const squareElements = squares.map(square => (
        <Box
            key={square.id} // we cannot call props.key in Box.js, that's why we create id={square.id}
            // id={square.id}
            on={square.on}
            toggle={() => toggle(square.id)} // if we write like this, we don't need id={square.id}
        />
    ));

    return (
        <main>
            {squareElements}
        </main>
    )
}



