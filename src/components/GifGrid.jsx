import React from "react";
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <p>{category}</p>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
export default GifGrid;
