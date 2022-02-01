import * as React from "react";
import Logo from "./Logo";
import "../styles/components/Header.scss";

const renderSignIn = () => {
    return(
        <button>
            Sign In
        </button>
    )
} 
const renderSignUp = () => {
    return(
        <button>
            Sign Up
        </button>
    )
} 
export default function Header(){
    return(
        <header>
            <Logo />
            {renderSignIn()}
            {renderSignUp()}
        </header>
    );
}