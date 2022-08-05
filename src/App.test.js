import { render, screen } from '@testing-library/react';
import { WelcomePage } from './components/WelcomePage/WelcomePage';

test('renders learn react link', async () => {
  render(<WelcomePage />);
  const linkElement = await screen.findByText('Backend');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).not.toBeFalsy();
});
