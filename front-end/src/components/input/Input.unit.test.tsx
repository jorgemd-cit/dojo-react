import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

test('Should render input', () => {
  render(
    <Input
      value="Testing value"
      placeholder="Testing placeholder"
      onChange={() => false} 
    />
  );
  
  const input = screen.getByRole('textbox');
  
  expect(input).toBeInTheDocument();
});

test('Should render input placeholder', () => {
  render(
    <Input
      value="Testing value"
      placeholder="Testing placeholder"
      onChange={() => false} 
    />
  );
  
  const input = screen.getByPlaceholderText('Testing placeholder');
  
  expect(input).toBeInTheDocument();
})

test('Should call function on change', () => {
  const callback = jest.fn()

  render(
    <Input
      value="Testing value"
      placeholder="Testing placeholder"
      onChange={callback} 
    />
  );

  fireEvent.change(screen.getByRole('textbox'), { target: { value: "New value" } })

  expect(callback).toHaveBeenCalledTimes(1)
})
