import React from "react";
import PhotoGrid from "../images/photo-grid.png";

// Writin with only props
export default function Hero (props) {
    
    
    // const nums = [1, 2, 3, 4, 5];
    // const square = nums.map((items) => {
    //     return items * items;
    // });
    // console.log(square);

    // const names = ["alice", "bob", "charlie", "danielle"];
    // const uppercase = names.map((name) => {
    //     return name[0].toUpperCase() + name.slice(1);
    // });
    // console.log(uppercase);

    // const pokemon = ["something1", "something2", "something3"];
    // const htmlCase = pokemon.map(names => { return `<p>${names}</p>`; });
    // // return "<p>" + names + "</p>"    >> We can use like this
    // console.log(htmlCase);


    return (
        <section className="hero">
            <img 
                className="hero--photo"
                src={PhotoGrid}
                alt="something"
            />
            <h1 className="hero--header">{props.name}</h1>
            <p className="hero--text">{props.content}</p>
        </section>
    )
}

// Writing with Object Destructuring
// export default function Hero ({name, content}) {
//     return (
//         <section className="hero">
//             <img 
//                 className="hero--photo"
//                 src={PhotoGrid}
//                 alt="something"
//             />
//             <h1 className="hero--header">{name}</h1>
//             <p className="hero--text">{content}</p>
//         </section>
//     )
// }