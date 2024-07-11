import React, { useEffect, useState } from 'react'


 const useFetch = (url) => {
    const[data,setData]=useState(null)
    const[loading,setLoading]=useState(false)

        useEffect(()=>{
            setLoading(true)
          const fetchData=  async()=>{
try{
    const response=await fetch(url)
    const data=await response.json()
    setLoading(false)
    setData(data)
}catch(error){
    console.log(error.message);
}
        }
        fetchData()
    },[url])
return {data,loading}
    }
    export default useFetch
// const fetchStocksdata=useCallback(async()=>{
//     const response=await fetch(url)
//     const data=await response.json()
//     setStocks(data)
// },[url])
//     useEffect(()=>{
//         fetchStocksdata()
//     },[fetchStocksdata])