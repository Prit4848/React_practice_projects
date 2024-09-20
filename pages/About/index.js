import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <>
        <div className="bg-green-600 flex align-middle text-center  py-5 px-5 justify-between h-20">
         <h4>logo</h4>
         <nav className="flex gap-5">
          <Link href='/About'>About</Link>
          <Link href='/Contect'>Contact</Link>
          <Link href='/Features'>Features</Link>
         </nav>
        </div> 
        <h1>about</h1>
    </>
  );
}
