/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Detail from '../../presentational/detail/Detail';
import { getSingleCharacter } from '../../../services/getSingleCharacter';

const DetailContainer = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    getSingleCharacter(match.params.id).then((detail) => {
      setDetail(detail);
      setLoading(false);
    });
  }, []);

  if(loading) return <h1>Loading</h1>;
  return <Detail {...detail} />;
};

export default DetailContainer;
