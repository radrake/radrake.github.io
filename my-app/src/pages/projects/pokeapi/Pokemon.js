import React, { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import Pagination from './Pagination'
import axios from 'axios'
import img from './chimchar.png'

export default function Pokemon() {
    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)
  
    useEffect(() =>{
      setLoading(true)
      let cancel
      axios.get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
        setPokemon(res.data.results.map(p => p.name))
        setLoading(false)
      })
    
      return () => cancel()
    }, [currentPageUrl])
  
    function goToNextPage() {
      setCurrentPageUrl(nextPageUrl)
    }
  
    function goToPrevPage() {
      setCurrentPageUrl(prevPageUrl)
    }
  
    if (loading) return "Loading..."
  
  
    return (
      <>
        <img src={img} alt="" height="100" />
        <PokemonList pokemon={pokemon}/>
        <Pagination 
          goToNextPage={nextPageUrl ? goToNextPage : null}
          goToPrevPage={prevPageUrl ? goToPrevPage : null}
        />
      </>
    );
}
