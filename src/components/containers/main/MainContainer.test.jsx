import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MainContainer from './MainContainer';
import { BrowserRouter } from 'react-router-dom';

describe('MainContainer', () => {
  it('displays a loading screen then a list of characters ', async() => {
    render(
      <BrowserRouter>
        <MainContainer />
      </BrowserRouter>
    );

    screen.getByText('Loading');

    const ul = await screen.findByTestId('results');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
