import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MyBooks = () => {
  const [data,setData] = useState([])
  const [title,setTitle] =useState("")

  const getData = async()=>{
    let physicsUrl = `https://www.googleapis.com/books/v1/volumes?q=chemistry&key=AIzaSyCJH3VI8VhqeMJWUi3Sup1e_2gHWiux_BI&maxResults=10`
    await axios.get(physicsUrl)
    .then(res=>setData((res.data.items)))
    .catch(err=>console.log(err))
    setTitle(data[0].volumeInfo.title)

    //let imgSrc = result.data.items
    console.log("data",data[0].volumeInfo.title);

  }
  useEffect((e)=>{
    getData()
  })
 
  
  return (
    <>
       <h1>Title : {title}</h1>
    
    </>
  )
}

export default MyBooks