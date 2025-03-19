'use client';

import React from 'react'
import { useEffect } from "react";

export default function ParallaxBanner() {
    useEffect(() => {
        const text = document.getElementById("title")
        if (text==null){
          return
        }
    
        const img1 = document.getElementById("layer1")
        if (img1==null){
          return
        }
    
        const img2 = document.getElementById("layer2")
        if (img2==null){
          return
        }

        // const cloud1 = document.getElementById("layer3")
        // if (cloud1==null){
        //   return
        // }
    
        window.addEventListener("scroll", () => {
          const value = window.scrollY
    
          text.style.marginTop = value * -0.01+"px"
          img1.style.top = value *1+"px"
          img2.style.top = value *0.5+"px"
          // cloud1.style.top = value *0.25+"px"
    
        })
      })
  return (
    <div className="imageWrapper">
      
    <img
    id="layer1"
      src="/layer-1.png"
      alt="Layer 1"
      className="background"
    />
    <img
    id = "layer2"
      src="/layer-2.png"
      alt="Layer 2"
      className="foreground"
    />

    {/* <img
    id="layer3"
      src="/layer-3.png"
      alt="Layer 3"
      className="foreground cloud"
    />
    <img
    id = "layer3"
      src="/layer-4.png"
      alt="Layer 3"
      className="foreground"
    /> */}
    <h1 className="title" id="title">Slovenské Vzdelávacie Centrum</h1>
  
</div>
  )
}
