import React from "react";
import AirBnbLogo from "../images/airbnb-logo.png";

export default function Navbar() {
    return (
        <nav>
            <img
                className="nav--logo"
                src={AirBnbLogo}
                alt="Air Bnb Logo"
             />
        </nav>
    )
}