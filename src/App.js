import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { LoginForm } from './components/Forms/LoginForm/LoginForm';
import { StartPage } from './components/StartPage/StartPage';
import { UserStartPage } from './components/User/UserStartPage/UserStartPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<StartPage />} />
        <Route path="/user" element={<UserStartPage />} />
        <Route path="/login" element={<LoginForm />} />

      </Routes>
    </>
  );
}

export default App;
