import * as React from "react";
import Logo from "./Logo";
import "../styles/components/Header.scss";

const renderSignIn = () => {
    return(
        <button className="cta__signin">
            Sign In
        </button>
    )
} 
const renderSignUp = () => {
    return(
        <button className="cta__signup">
            Sign Up
        </button>
    )
} 
export default function Header(){
    return(
        <header className="header">
            <div className="header__wrapper">
                <Logo />
                {renderSignIn()}
                {renderSignUp()}
            </div>

        </header>
    );
}