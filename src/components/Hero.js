import * as React from "react";
import { useAPI } from "../hooks/APIContextProvider";
import cartoon from '../images/cartoon.png';
import "../styles/components/Hero.scss";

export default function Hero(){
    const { currentCharacter} = useAPI();
    const {description} = currentCharacter;
    return(
        <div className="hero">
            <div className="hero__wrapper">

                <div>
                    <p className="hero__copy">
                        {description}
                    </p>
                    <button className="cta hero__cta">
                        Get Started
                    </button>
                </div>
                <img src={cartoon}  alt="Iron Man Cartoon" className="hero__graphic"/>
            </div>

        </div>
    );
}