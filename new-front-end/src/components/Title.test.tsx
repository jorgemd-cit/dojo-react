import { render, screen } from '@testing-library/react';
import Title from './Title';

test('should render title', () => {
  render(<Title text="Teste do título" />);

  const linkElement = screen.getByText("Teste do título");
  
  expect(linkElement).toBeInTheDocument();
})
