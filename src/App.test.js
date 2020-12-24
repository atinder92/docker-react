import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Learning docker on screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learning docker/i);
});
