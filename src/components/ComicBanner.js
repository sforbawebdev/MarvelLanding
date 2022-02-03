import * as React from "react";
import { useAPI } from "../hooks/APIContextProvider";
import {Carousel} from '../widgets/Carousel';
import "../styles/components/ComicBanner.scss";


const renderList = (list) =>{
    if(list && list.length === 0) return null;

    return list.map((comic, index)=>{
        const {thumbnail, images} = comic || {};;
        if(images.length === 0) return null;

        const {path, extension} = thumbnail || {};
        const image_path = `${path}.${extension}`;
        return(
            <div key={index} className="comic-banner__item">
                 <img src={image_path}/>
            </div>
        )
    })
}
export default function ComicBanner({}){
    const { comicList } = useAPI();
    const slides = renderList(comicList);
    console.log(slides);
    return(
        <div className="comic-banner">
            <div className="comic-banner__slider">
                <Carousel slides={slides}/>
            </div>
        </div>
    );
}