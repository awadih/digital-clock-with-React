import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/** Should show the HTML output of the App  */
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    screen.debug();
  });
});

test('renders Digital clock', () => {
  render(<App />);
  const linkElement = screen.getByText(/Digital clock/i);
  expect(linkElement).toBeInTheDocument();
});
