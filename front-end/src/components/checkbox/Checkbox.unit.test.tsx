import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

test('Should render checkbox', () => {
  render(
    <Checkbox
      checked={false}
      onCheck={() => false} 
    />
  );
  
  const checkbox = screen.getByRole('checkbox');
  
  expect(checkbox).toBeInTheDocument();
});

test('Should call function on check', () => {
  const callback = jest.fn()

  render(
    <Checkbox
      checked={false}
      onCheck={callback} 
    />
  );

  fireEvent.click(screen.getByRole('checkbox'))

  expect(callback).toHaveBeenCalledTimes(1)
})
