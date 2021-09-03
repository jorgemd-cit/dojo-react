import { render, screen } from '@testing-library/react';
import Title from './Title';

test('Should render title', () => {
  render(<Title text="Testing title" />);

  const titleElement = screen.getByText(/Testing title/i);
  
  expect(titleElement).toBeInTheDocument();
});
