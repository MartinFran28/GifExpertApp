import { useState } from "react";
import { AddCategory, GiftsGrid } from "../Components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = ( newCategory ) => {
    if (categories.includes( newCategory )) return;
    setCategories( ( categories ) => [ newCategory.trim(), ...categories ] );
  }

  return (

    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={ onAddCategory } />
      {
        categories.map( (categori) => (
          <GiftsGrid key={ categori } category={ categori } />
        ))
      }
    </>
    
  )

}

