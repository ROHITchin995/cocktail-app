import React from 'react'
import { CocktailList } from '../Components/CocktailList'
import { SearchForm } from '../Components/SearchForm'

export const Home = () => {
    return (
        <main>
            <SearchForm />
            <CocktailList />
        </main>
    )
}
