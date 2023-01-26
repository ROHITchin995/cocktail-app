import React, { useContext, useState, useEffect, useCallback } from "react"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [cocktails, setCocktails] = useState([])

    const fetchDrinks = useCallback(async ()=>{
        setLoading(true)
        try{
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            console.log(data);
        }
        catch(error){
            console.log(error);
            setLoading(false)
        }
    })



    useEffect(() => {
        fetchDrinks()
    }, [searchTerm, fetchDrinks])

    return (
        <AppContext.Provider value={searchTerm}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider }