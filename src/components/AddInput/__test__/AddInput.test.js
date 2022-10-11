import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodod = jest.fn();

test('should render input element', async () => {
  render(
    <AddInput 
    todos={[]}
    setTodos={mockedSetTodod}
     />
  );
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  expect(inputElement).toBeInTheDocument();  
});

test('should be able to type in input', async () => {
  render(
    <AddInput 
    todos={[]}
    setTodos={mockedSetTodod}
     />
  );
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  fireEvent.change(inputElement, { target : {value: "deploye idp"} })
  expect(inputElement.value).toBe("deploye idp");  
});