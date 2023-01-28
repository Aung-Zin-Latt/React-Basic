import React from "react";
import boxes from "./components/Boxes"
import Box from "./components/Box";

export default function App() {

    const [squares, setSquares] = React.useState(boxes)

    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on} />
    ));

    return (
        <main>
            {squareElements}
        </main>
    )
}