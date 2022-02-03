import * as React from "react";
import { useAPI } from "../hooks/APIContextProvider";
import cartoon from '../images/cartoon.png';
import "../styles/components/Hero.scss";

export default function Hero(){
    const { currentCharacter} = useAPI();
    const {description} = currentCharacter;
    return(
        <div class="hero">
            <div className="hero__wrapper">

                <div>
                    <p class="hero__copy">
                        {description}
                    </p>
                    <button class="cta hero__cta">
                        Get Started
                    </button>
                </div>
                <img src={cartoon}   class="hero__graphic"/>
            </div>

        </div>
    );
}