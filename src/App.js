import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { LoginForm } from './components/Forms/LoginForm/LoginForm';
import { StartPage } from './components/StartPage/StartPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<StartPage />} />
        <Route path="/login" element={<LoginForm />} />

      </Routes>
    </>
  );
}

export default App;
