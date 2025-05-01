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

        window.addEventListener("scroll", () => {
          const value = window.scrollY
    
          text.style.marginTop = value * -0.01+"px"
          img1.style.top = value *1+"px"
          img2.style.top = value *0.5+"px"
    
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

    <h1 className="title" id="title">Slovenské Vzdelávacie Centrum</h1>
  
</div>
  )
}
