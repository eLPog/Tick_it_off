import { render, screen } from '@testing-library/react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import store from '../../../store';
import { LoginForm } from './LoginForm';


describe('Check if LoginForm page is correctly rendered', () => {
  test('check if login input is correctly rendered', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>,
    );
    const loginInput = document.getElementById('loginEmail');
    expect(loginInput).toBeTruthy();
    expect(loginInput).toHaveAttribute('required');
  });
  test('check if login email input label exist', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>,
    );
    const loginLabel = screen.getByLabelText('Email');
    expect(loginLabel).toBeInTheDocument();
  });
  test('check if login password input is correctly rendered', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>,
    );
    const passwordInput = document.getElementById('loginPassword');
    expect(passwordInput).toBeTruthy();
    expect(passwordInput).toHaveAttribute('required');
  });
  test('check if login button is disabled', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>,
    );
    const button = screen.getByText('Login');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('disabled');
  });

});
