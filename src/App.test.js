import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('ToDo List', () => {
  render(<App />);
  const root = document.getElementById('todo');
  const linkElement = screen.getByText(/ToDo List/i);
  expect(linkElement).toBeInTheDocument();
  expect(root.querySelector('label').textContent).toBe("Add todo: ")
});