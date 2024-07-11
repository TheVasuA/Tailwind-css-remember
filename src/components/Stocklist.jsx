import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import "../App.css"
const Stocklist = () => {

    const[url,setUrl]=useState("http://localhost:3000/stocks/")
const{data:stocks,loading}=useFetch(url)

  return (
    <div>
        <h1>Stock List</h1>
        <button onClick={()=>setUrl("http://localhost:3000/stocks/")}>Stocks</button>
        <button onClick={()=>setUrl("http://localhost:3000/indices/")}>Indices</button>
        {loading&&<h3>loading</h3>}
        {
           stocks&&stocks.map((stock)=>{
               return(
                <div key={stock.code}>
                    <h3>{stock.code}</h3>
                <img alt={stock.code} src={stock.singleLine_url} className='hidden-image image_all'></img>
               </div>
               ) 
            })
        }
    </div>
  )
}

export default Stocklist