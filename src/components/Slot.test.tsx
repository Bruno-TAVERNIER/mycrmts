import React from 'react';
import { render, screen } from '@testing-library/react';
import Slot from './Slot';

test('renders learn react link', () => {
  render(<Slot><p>Je teste un slot</p></Slot>);
  const linkElement = screen.getByText(/je teste un slot/i);
  expect(linkElement).toBeInTheDocument();
});