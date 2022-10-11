import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import {  BrowserRouter } from "react-router-dom"

const MockTodo = () => {
  return(
    <BrowserRouter>
      <Todo/>
    </BrowserRouter>
  )
}


const addTeask = (tasks) => {

  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
  const buttonElement = screen.getByRole("button", {name: "Add"});

  tasks.map( task  => {
    fireEvent.change(inputElement, {target : { value : task}});
    fireEvent.click(buttonElement);
  })


}

describe("Todd testing" ,  () => {

  test('should render the Todo list and input field', async () => {
    render(<MockTodo />);
    addTeask(["add event"])
    const divElement  = screen.getByText(/add event/i);
    expect(divElement).toBeInTheDocument();
 
 });

 test('should render the Todo list and input field', async () => {
  render(<MockTodo />);
  addTeask(["add event1", "add event2", "add event3"])
  const divElements = screen.getAllByTestId("container-task");
  expect(divElements.length).toBe(3);

  });

  test('should render the Todo list and input field', async () => {
    
      render(<MockTodo />);
      addTeask(["add event1"])
      const divElement = screen.getByText(/add event1/i);
      fireEvent.click(divElement);
      expect(divElement).toHaveClass("todo-item-active");
  
    });

})

