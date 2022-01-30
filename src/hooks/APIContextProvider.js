import React, { useContext, useState, useEffect, createContext } from "react";

const APIContext = createContext();

export function APIContextProvider({ children }) {
    useEffect(() => {
        async function makeAPIRequest(){
            const base = `https://gateway.marvel.com/`, 
                  endpoint = `/v1/public/characters`,
                  public_key = `fea51487254ee228542369281f464255`,
                  private_key = `15ae1385eb652244d3212c9cf411c411841ede47`;
            const params = {
                method: "GET",
                hash: md5(new Date.getTime() + private_key + public_key),
                ts: new Date.getTime(),
                apikey:private_key,
                
            }      

            return await fetch(`${base}${endpoint}`, params)
                               .then(function(resp) { return resp.json() })
                               .then(function(data) {
                                   console.log(data);
                                   return data;
                               })
                               .catch(function(error){
                                   console.log(error);
                               });

        }

        makeAPIRequest();
    }, [])
    return (
        <APIContext.Provider>
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