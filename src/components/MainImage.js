import * as React from "react";
import { useAPI } from "../hooks/APIContextProvider";
import "../styles/components/MainImage.scss";

export default function MainImage(){
    const { currentCharacter} = useAPI();
    const {thumbnail, name} = currentCharacter || {};

    const {path, extension} = thumbnail || {};
    return(
        <img alt={name} className="main-image" src={`${path}.${extension}`} />
    )
}