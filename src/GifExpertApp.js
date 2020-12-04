import { useState } from "react"
import React from 'react'
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['Fender']);

    // const handleAdd = () =>{
    //     setCategories( [...categories, 'Epiphone'])
    //     console.log('categories', categories)
    // }

    //handleAdd('Epiphone');
    return (

        <>
            <h2>GifExpertApp</h2>
            <hr />  
            <AddCategory  
                setCategories={setCategories}
            />

          <ol>
              {
                  categories.map( category => 
                   <GifGrid 
                   key={ category }
                   category={ category } />
                  )
              }
          </ol>
        </>
    )
}


export default GifExpertApp