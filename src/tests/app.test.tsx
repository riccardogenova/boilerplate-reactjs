/** @format */

import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
  it('renders a heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
