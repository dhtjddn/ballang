"use client";

import axios from "axios"
import { useEffect, useState } from "react";


function HomePage() {
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.ballang.yoojinyoung.com/products')
  .then(response => {
    setProducts(response.data.result);
    console.log(response.data.result);
    
    
  })
  .catch(error => {
    console.error("Error fetching data", error);
  })
  }, [])
  
 
 
  
  return (
    <main>
      <h2 className="font-bold text-center text-3xl pt-7 pb-7">Trending</h2>

      
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">
      {products.map((product) => (
        <ul key={product.id}>
          <li>
            <a className="relative flex flex-col group" href="#">
            <div className="relative mb-4 w-full aspect-square">
              <img src={product.imgSrc} className=" h-full w-full" />
            </div>
            <div className="grid gap-y-2">
            <div className="text-sm font-bold">{product.brand.nameEn}</div>
            <h6 className="text-xl">{product.name}</h6>
            <div className="text-sm flex flex-col sm:flex-row items-baseline gap-1.5">
              <span className="text-red-500 line-through font-semibold">₩{product.originalPrice.toLocaleString()}</span>
              <span className="font-bold">₩{product.price.toLocaleString()}</span>
            </div>
            </div>
              </a>
          </li>

       
        </ul>
        
      ))}
      
      </ul>
      </main>
     

  )
}

export default HomePage
