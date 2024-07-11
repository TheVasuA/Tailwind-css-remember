import React, { useState } from 'react'
import "./UploadingData.css"
import Addstockdata from './Addstockdata'
import Showstockdata from './Showstockdata'

const UploadingData = () => {
    const[stockurlupload,setStockurlupload]=useState([])
  return (
    <div>
        <Addstockdata stockurlupload={stockurlupload} setStockurlupload={setStockurlupload} />
        <Showstockdata stockurlupload={stockurlupload} setStockurlupload={setStockurlupload}/>
    </div>
  )
}

export default UploadingData