import React from "react";
// import KatieImg from "katie-zaferes.png";
import StarLogo from "../images/star.png";

export default function Card (props) {
    let badgeText;
    if (props.item.openSports === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            {
                badgeText &&
                <div className="card--badge">{badgeText}</div>
            }
            {
                props.item.coverImg &&
                <img     // This is a condition, if props.item.img is true, then it will do behind &&
                    className="card--image"
                    src={props.item.coverImg}
                    // src={`../images/${props.item.img}`}       >>> We can write like this
                    alt="Katie Zaferes"
                />
            }
            <div className="card--stats">
                <img src={StarLogo} alt="Star Icon" width={'17px'} className="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) ◉ </span>
                <span className="gray">{props.item.country}</span>
            </div>
            <p className="card--title" style={{ display: props.item.title ? "block" : "none" }}>{props.item.title}</p>  {/* This is another condition with ternary operator */}
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}