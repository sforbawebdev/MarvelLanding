import * as React from "react"
import { useAPI } from "../hooks/APIContextProvider";
import "../styles/components/ComicBanner.scss"

const renderList = (list) =>{
    if(list && list.length === 0) return null;

    return list.map((comic, index)=>{
        const {thumbnail, images} = comic || {};;
        if(images.length === 0) return null;

        const {path, extension} = thumbnail || {};
        const image_path = `${path}.${extension}`
        return(
            <li key={index}>
                <a href="#">
                    <img src={image_path}/>
                </a>
            </li>
        )
    })
}
export default function ComicBanner({}){
    const { comicList } = useAPI();

    return(
        <ul>
            {renderList(comicList)}
        </ul>
    );
}