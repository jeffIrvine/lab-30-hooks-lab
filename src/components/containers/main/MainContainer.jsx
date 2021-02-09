import React, { useEffect, useState } from 'react';
import List from '../../presentational/list/List';
import { getAllCharacters } from '../../../services/getAllCharacters';

const MainContainer = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    getAllCharacters().then((list) => {
      setList(list);
      setLoading(false);
    });
  }, []);

  if(loading) return <h1>Loading</h1>;
  return <List results={list} />;
};

export default MainContainer;
