/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

// import Products from "../pages/Products";

const Items=({item})=>{

    
    return (
        <>
        <div>
            <h1>{item.title}</h1>
            <img src={item.image} alt="item"/>
        </div>

       
        </>
    )
}
export default Items