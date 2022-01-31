import * as React from "react"
import { useAPI } from "../hooks/APIContextProvider";
import "../styles/components/ComicBanner.scss"

export default function ComicBanner({}){
    const { comicList } = useAPI();

    return(
        <div>
            
        </div>
    );
}