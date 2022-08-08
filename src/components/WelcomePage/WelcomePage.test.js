import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom';
import { Routes } from 'react-router-dom';
import { render } from '@testing-library/react';
import { WelcomePage } from './WelcomePage';
import store from '../../store';

describe('Check if Welcome page is correctly rendered', () => {
  test('check if menuItem is rendered', () => {
    render(<Provider store={store}><WelcomePage /></Provider>);
    const [menuItem] = document.getElementsByTagName('article');
    console.log(menuItem);
  });
});
