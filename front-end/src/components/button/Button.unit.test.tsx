import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

test('Should render button', () => {
  render(<Button label="Testing button" onClick={() => false} />);
  
  const button = screen.getByText(/Testing button/i);
  
  expect(button).toBeInTheDocument();
});

test('Should call function on click', () => {
  const callback = jest.fn()

  render(<Button label="Testing button" onClick={callback} />);

  const button = screen.getByRole('button')

  fireEvent.click(button)

  expect(callback).toBeCalled()
})
