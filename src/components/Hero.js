import * as React from "react";
import { useAPI } from "../hooks/APIContextProvider";
import cartoon from '../images/cartoon.png';
import "../styles/components/Hero.scss"

export default function Hero({}){
    const { currentCharacter} = useAPI();
    const {description} = currentCharacter;
    return(
        <div>
            <p>
                {description}
            </p>
            <div>
                <button>
                    Get Started
                </button>
            </div>
            <div>
                <img src={cartoon} />
            </div>
        </div>
    );
}