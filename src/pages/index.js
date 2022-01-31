import * as React from "react"
import { APIContextProvider } from "../hooks/APIContextProvider";
import Header from '../components/Header';
import Hero from '../components/Hero';
import "../styles/global/normalize.scss"


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
          </div>
      </main>
    </APIContextProvider>

  )
}

export default IndexPage
