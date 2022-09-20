import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('todo list', () => {
  const { getByText, getByLabelText } = render(<App/>);

  getByText("ToDo List");
  getByLabelText('Add todo:');
  getByText('Add todo');
});

test('add items to list', () => {
  const { getByText, getByLabelText } = render(<App/>);

  getByText("ToDo List");
  const input = getByLabelText('Add todo:');
  fireEvent.change(input, {target: {value: "wash car"}});
  fireEvent.click(getByText('Add todo'));
  //confirm data
  getByText(/wash car/);
});

//userEvent expresses intent better
test('user-event allows users to add...', () => {
  const { getByText, getByLabelText } = render(<App/>);
  const input = getByLabelText('Add todo:');
  const button = getByText('Add todo');

  userEvent.type(input, 'Learn Spanish');
  userEvent.click(button);

  getByText(/Learn Spanish/);
});
