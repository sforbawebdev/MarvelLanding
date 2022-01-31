import React, { useContext, useState, useEffect, createContext } from "react";
import API from "../utils/API";
const APIContext = createContext();

export function APIContextProvider({ children }) {
  const api = new API({base: `https://gateway.marvel.com`});
  const [currentCharacter, setCurrentCharacter] = useState([]);
  const [comicList, setComicList] = useState([]);
  useEffect(() => {
    const id= "1009368";
    api.get(`/v1/public/characters/${id}`)
        .then((response)=>{
          const data = response.data.results && response.data.results[0]; 
          setCurrentCharacter(data);
        }).catch(error => console.error(error));
    api.get(`/v1/public/comics`, {"characters": `characters=Iron%20Man`, "format": "comic", "formatType": "comic"})
        .then((response)=>{
          console.log(response);
          const data = response.data.results && response.data.results;
          setComicList(data);
        }).catch(error => console.error(error));    
  
    // async function makeAPIRequest(){
    //     const base = `https://gateway.marvel.com`, 
    //           endpoint = `/v1/public/characters`,
    //           id= "/1009368",
    //           d = new Date(),
    //           time = d.getTime(),
    //           public_key = `41e234fae60e5c2b459e399aa453babd`,
    //           private_key = `21fdbfdcb4408a3d8f75d2b6d464cae06f1f8116`;


    //     const data = await fetch(`${base}${endpoint}${id}?apikey=${public_key}`)
    //                         .then(function(resp) { return resp.json() })
    //                         .then(function(resp) {
    //                             return resp.data.results;
    //                         })
    //                         .catch(function(error){
    //                             console.log("error: ",error);
    //                         });
    //       setCurrentCharacter(data && data[0]);  

    // }
    // makeAPIRequest();
  }, []);
  return (
      <APIContext.Provider value={{currentCharacter, comicList}}>
        {children}
      </APIContext.Provider>
    );
}

export function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    return context;
  }