import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('ToDo', () => {
  const root = document.createElement('div');
  render(<App/>, root);
});
