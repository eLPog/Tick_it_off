import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from './components/Header/Header';
import { LoginForm } from './components/Forms/LoginForm/LoginForm';
import { StartPage } from './components/StartPage/StartPage';
import { UserStartPage } from './components/User/UserStartPage/UserStartPage';
import { TasksList } from './components/Tasks/TasksList';
import { Logout } from './components/Logout/Logout';

function App() {
  const isLogged = useSelector((state) => state.authSlice.isLogged);
  console.log(`Zalogowany? ${isLogged}`);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<StartPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/user" element={isLogged ? <UserStartPage /> : <Navigate to="/" />} />
        <Route path="/tasks" element={isLogged ? <TasksList /> : <Navigate to="/" />} />
        <Route path="/logout" element={isLogged ? <Logout /> : <Navigate to="/" />} />

      </Routes>
    </>
  );
}

export default App;
