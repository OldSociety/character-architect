import * as React from 'react'
import { render, screen } from '@testing-library/react';
import App, {timesThree} from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


describe('The timesThree function', () => {
  test('should multiply by 3', () => {
    const expected = 6
    expect(timesThree(2)).toBe(expected)
  })
})

describe('Header', () => {
  test('should be see on every page', () => {
    const expected = 6
    expect(timesThree(2)).toBe(expected)
  })
})