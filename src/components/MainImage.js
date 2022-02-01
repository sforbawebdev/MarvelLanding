import * as React from "react";
import { useAPI } from "../hooks/APIContextProvider";

export default function MainImage(){
    const { currentCharacter} = useAPI();
    const {thumbnail} = currentCharacter || {};
    console.log(currentCharacter);
    const {path, extension} = thumbnail || {};
    return(
        <div>
            <img src={`${path}.${extension}`} />
        </div>
    )
}