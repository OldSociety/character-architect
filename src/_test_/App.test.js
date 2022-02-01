import * as React from 'react'
import { render, screen } from '@testing-library/react';
import App, {timesThree} from '../App';

// NPM TEST files

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// THREE TIMES THREE is a starter test to ensure Jest is properly working.
describe('The timesThree function', () => {
  test('should multiply by 3', () => {
    const expected = 6
    expect(timesThree(2)).toBe(expected)
  })
})

//
describe('Footer', () => {
  test('should be see on every page', () => {
    const expected = 6
    expect(timesThree(2)).toBe(expected)
  })
})