import React from "react";
import GifItem from "./GifItem";
import useFetchGifs from "./hooks/useFetchGifs";

const GifGrid = ({ category }) => {

  const {images,isLoading} = useFetchGifs(category)

  return (
    <>
      <p>{category}</p>
      {
        isLoading && (<h2>cargando...</h2>)
      }
      <div className='card-grid'>
        {images.map((image) => (
          <GifItem key={image.id} {...image}/>
        ))}
      </div>
    </>
  );
};

export default GifGrid;
