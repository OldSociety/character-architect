import * as React from 'react'
import { render, screen } from '@testing-library/react';
import App, {timesThree} from '../App';

// NPM TEST files

// THREE TIMES THREE is a starter test to ensure Jest is properly working.
describe('The timesThree function', () => {
  test('should multiply by 3', () => {
    const expected = 6
    expect(timesThree(2)).toBe(expected)
  })
})