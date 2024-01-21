/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

// import Products from "../pages/Products";

const Items=({item})=>{

    
    return (
        <>
        <div className="container mx-auto p-4 border-2-black">
            <h1 className="">{item.title}</h1>
            <img src={item.image} alt="item"/>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </div>

       
        </>
    )
}
export default Items