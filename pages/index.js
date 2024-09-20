"use client"
import axios from "axios";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React, { useState } from "react";

export default function Home() {
  const [Image, setImage] = useState([])
  const generateImage =async ()=>{
    let response = await axios.get("https://picsum.photos/v2/list")
    let data = response.data;
    setImage(data)
    console.log(data)
  }
  return (
    <>
        <div className="bg-green-600 flex align-middle text-center  py-5 px-5 justify-between h-20 font-bold text-yellow-50">
         <h4 >logo</h4>
         <nav className="flex gap-5">
          <Link href='/About'>About</Link>
          <Link href='/Contect'>Contact</Link>
          <Link href='/Features'>Features</Link>
         </nav>
        </div> 
        <button onClick={generateImage} className="boarder-3 text-yellow-50 font-bold border-black bg-green-600  p-4 m-5 w-30 h-16 hover:bg-slate-500 rounded-lg">getImages</button>
        <div className="p-10 ">
         {Image.map((element)=>{
           return (<img width={300} height={300} src={element.download_url} className="inline-block m-5 rounded-lg border" />)
         })}
        </div>
    </>
  );
}
