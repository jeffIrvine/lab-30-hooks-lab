import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ name, species, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <p>{name}</p>
      <span>{species}</span>
    </figcaption>
  </figure>
);

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};


export default Detail;
