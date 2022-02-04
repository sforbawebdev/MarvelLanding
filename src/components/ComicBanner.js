import * as React from "react";
import { useEffect, useState } from "react";
import { useAPI } from "../hooks/APIContextProvider";
import {Carousel} from '../widgets/Carousel';
import "../styles/components/ComicBanner.scss";


const renderList = (list) =>{
    if(list && list.length === 0) return null;

    return list.map((comic, index)=>{
        const {thumbnail, images, title} = comic || {};;
        if(images.length === 0) return null;
        
        const {path, extension} = thumbnail || {};
        const image_path = `${path}.${extension}`;
        return(
            <div key={index} className="comic-banner__item">
                 <img alt={title} src={image_path}/>
            </div>
        )
    })
}

export default function ComicBanner(){
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
    }
    useEffect(() => {

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    });
    const { comicList } = useAPI();
    const slides = renderList(comicList);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: windowSize.width > 375 ? 5: 1,
        slidesToScroll: 1
    };


    return(
        <div className="comic-banner">
            <div className="comic-banner__slider">
                <Carousel slides={slides} settings={settings}/>
            </div>
        </div>
    );
}