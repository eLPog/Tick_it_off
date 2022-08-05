import { render, screen } from '@testing-library/react';
import { WelcomePage } from './WelcomePage';

describe('About App', () => {
  test('renders Backend as text', async () => {
    render(<WelcomePage />);
    const element = await screen.findByText('Backend');
    expect(element).toBeInTheDocument();
    expect(element).not.toBeFalsy();
  });

  test('xxx', async () => {
    render(<WelcomePage />);
    const element = await document.getElementsByClassName('text');
    expect(element).not.toBeFalsy();
    expect(element).toBeDefined();
  });

});
