import { render, screen } from '@testing-library/react';
import { AboutApp } from '../components/AboutApp/AboutApp';

test('renders learn react link', async () => {
  render(<AboutApp />);
  const linkElement = await screen.findByText('Backend');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).not.toBeFalsy();
});
