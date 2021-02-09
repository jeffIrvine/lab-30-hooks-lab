import React from 'react';
import PropTypes from 'prop-types';
import Detail from '../detail/Detail';
import { Link } from 'react-router-dom';

const List = ({ results }) => {
  const ListCard = results.map((result) => (
    <Link key={result.id} to = {`/detail/${result.id}`}>
      <li key={result.id}>
        <Detail
          name={result.name}
          image={result.image}
          species={result.species}
        />
      </li>
    </Link>
  ));
  return <ul data-testid="results">{ListCard}</ul>;
};

List.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired
    })
  ).isRequired,
};


export default List;
