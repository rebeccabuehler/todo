import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('ToDo', () => {
  const root = document.createElement('div');
  render(<App/>, root);
  //after rendering our component use DOM APIs (query selector) to make assertions.
  expect(root.querySelector('h1').textContent).toBe('Todo List');
});
