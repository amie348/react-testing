import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MocktodoFooter = ({numberOfIncompleteTasks}) => {

  return(  
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
  );

}

describe("this block is testing th footer", () => {


  test('should render the correct amount of incomplete tasks', async () => {
    render(<MocktodoFooter  numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();  
  });
   
  
  test('should render "task" when the number of incomplete task in one', async () => {
    render(<MocktodoFooter  numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();  
  });

})






// test('should render "task" when the number of incomplete task in one', async () => {
//   render(<MocktodoFooter  numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toContainHTML("p")
// });