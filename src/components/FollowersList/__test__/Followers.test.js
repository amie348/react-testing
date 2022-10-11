import { render, screen, fireEvent } from '@testing-library/react';
import FollowersList from '../FollowersList';
import {  BrowserRouter } from "react-router-dom"


const MockFollowerList = () => {

  return(
    <BrowserRouter>
      <FollowersList/>
    </BrowserRouter>
  )

}

test('should render the Todo list and input field', async () => {
  render(<MockFollowerList />);
  const followerElement  = await screen.findByTestId("follower-item-1");
  expect(followerElement).toBeInTheDocument();

});

test('should render the Todo list and input field', async () => {
  render(<MockFollowerList />);
  const followerElements = await screen.findAllByTestId(/follower-item/i);
  expect(followerElements.length).toBe(5);

});