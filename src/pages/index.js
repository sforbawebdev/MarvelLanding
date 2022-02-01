import * as React from "react"
import { APIContextProvider } from "../hooks/APIContextProvider";
import Header from '../components/Header';
import Hero from '../components/Hero';
import MainImage from "../components/MainImage";
import MultiColumn from "../components/MultiColumn";
import ComicBanner from '../components/ComicBanner';
import "../styles/global/normalize.scss";


const renderTitle = () =>{
  return(
    <h1>
      Contrary to popular belief, he knows exactly what he's doing.
    </h1>
  )
}
const IndexPage = () => {
  return (
    <APIContextProvider>
      <Header />
      <main>
          <Hero />
          <div>
            {renderTitle()}
            <div>
            <MainImage />
            <MultiColumn />
            </div>

            <ComicBanner />
          </div>
      </main>
    </APIContextProvider>

  )
}

export default IndexPage
