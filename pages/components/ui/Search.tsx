

import React,{useState} from 'react'
import { Input } from 'antd';


const Search = ({fetchItems}:any) => {
const { Search } = Input;

const onSearch = (q:string) => {
  console.log(q);
  fetchItems(q)
  
}


  return (
    <div> 
        <section className='form-search'>
        <Search placeholder="input search text" 
         enterButton 
         onSearch={onSearch}
        />
        </section>
    </div>
  )
}

export default Search