import React, { useContext, useState, useEffect, createContext } from "react";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [currentCharacter, setCurrentCharacter] = useState([]);
  useEffect(() => {
    async function makeAPIRequest(){
        const base = `https://gateway.marvel.com`, 
              endpoint = `/v1/public/characters`,
              id= "/1009368",
              d = new Date(),
              time = d.getTime(),
              public_key = `41e234fae60e5c2b459e399aa453babd`,
              private_key = `21fdbfdcb4408a3d8f75d2b6d464cae06f1f8116`;


        const data = await fetch(`${base}${endpoint}${id}?apikey=${public_key}`)
                            .then(function(resp) { return resp.json() })
                            .then(function(resp) {
                                return resp.data.results;
                            })
                            .catch(function(error){
                                console.log("error: ",error);
                            });
          setCurrentCharacter(data && data[0]);  

    }
    makeAPIRequest();
  }, []);
  return (
      <APIContext.Provider value={{currentCharacter}}>
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