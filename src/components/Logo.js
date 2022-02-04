import * as React from "react";
import "../styles/components/Logo.scss";


export default function Logo(){
    return(
        <a href="/" className="logo" aria-label="Home Page">
            <img src={"https://via.placeholder.com/610x142?text=Temporary+Logo"}/>
        </a>
    )
}