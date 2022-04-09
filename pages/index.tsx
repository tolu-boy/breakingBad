import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/ui/Header'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'

const Home: NextPage = () => {
const [items, setItems] = useState([])
const [isLoading, setIsLoading] = useState(true);

const fetchItems:any = async (query:string)=>{
  const res = await axios(`https://breakingbadapi.com/api/characters?name=${query}`)
  console.log(res.data);
  setItems(res.data)  
  setIsLoading(false)
}

const fetchItem:any = async ()=>{
  const res = await axios(`https://breakingbadapi.com/api/characters`)
  console.log(res.data);
  setItems(res.data)  
  setIsLoading(false)
}



useEffect(()=>{
fetchItem()
},[])

  return (
   <div className='container'>
     <Header/>
     <Search  fetchItems={(q:string)=> fetchItems(q)} />
    <CharacterGrid isLoading={isLoading} items ={items} />
   </div>
  )
}

export default Home
