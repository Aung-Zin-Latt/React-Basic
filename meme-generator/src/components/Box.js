import React from "react";

export default function Box(props) {

    // const [on, setOn] = React.useState(props.on)

    // function toggle() {
    //     setOn(prevOn => !prevOn)
    // }

    // const styles = {
    //     backgroundColor: on ? "#222222" : "transparent"
    // }

        // derrived state
        const styles = {
            backgroundColor: props.on ? "#222222" : "transparent"
        }

    return (
        // derrived state => onClick
        <div
            style={styles} 
            className="box"
            onClick={props.toggle}
            // onClick={() => props.toggle(props.id)} 
        >        
        </div>
    )
}