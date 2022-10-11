import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('should render same text passed into title props', async () => {
  render(<Header  title={"My Header"} />);
  const haederElement = screen.getByText(/my header/i);
  expect(haederElement).toBeInTheDocument();  
});


// test('should render same text passed into title props', async () => {
//   render(<Header  title={"My Header"} />);
//   const haederElement = screen.getByRole("heading");
//   expect(haederElement).toBeInTheDocument();  
// });


// test('should render a heading with text cat', async () => {
//   render(<Header  title={"My Header"} />);
//   const haederElement = screen.getByRole("heading", {name: "cat"});
//   expect(haederElement).toBeInTheDocument();  
// });


// test('should render a component with title header', async () => {
//   render(<Header  title={"My Header"} />);
//   const haederElement = screen.getByTitle("header");
//   expect(haederElement).toBeInTheDocument();  
// }); 


// test('should render a component with test id header-2', async () => {
//   render(<Header  title={"My Header"} />);
//   const haederElement = screen.getByTestId("header-2");
//   expect(haederElement).toBeInTheDocument();  
// });

// // Find By 
// test('should render a component with same text as it passes to props', async () => {
//   render(<Header  title={"My Header"} />);
//   const haederElement = await screen.findByText(/my header/i);
//   expect(haederElement).toBeInTheDocument();  
// });

// // query by 
// test('should render a component with same text as it passes to props', async () => {
//   render(<Header  title={"My Header"} />);
//   const haederElement = screen.queryByText(/dogs/i);
//   expect(haederElement).not.toBeInTheDocument();  
// });


// test('should render a component with same text as it passes to props', async () => {
//   render(<Header  title={"My Header"} />);
//   const haederElements = screen.getAllByRole("heading");
//   expect(haederElements.length).toBe(2);  
// });