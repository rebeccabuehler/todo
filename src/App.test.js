import React from 'react';
import ReactDOM from 'react-dom';
//import { render, screen } from '@testing-library/react';
import { getQueriesForElement } from '@testing-library/react';
import App from './App';

function render(components) {
  const root = document.createElement('div');
  ReactDOM.render(components, root);
  return getQueriesForElement(root);
}

test('todo list', () => {
  const { getByText, getByLabelText } = render(<App/>);

  getByText("ToDo List");
})

// test('ToDo List', () => {
//   render(<App/>);
//   const root = document.getElementById('todo');
//   const { getByText, getByLabelText } = getQueriesForElement(root);
//   const linkElement = screen.getByText(/ToDo List/i);
//   expect(linkElement).toBeInTheDocument();
//   //use DOM APIs to make assertions
//   expect(root.querySelector('label').textContent).toBe(" Add todo: ")
//   getByText("ToDo List");
// });