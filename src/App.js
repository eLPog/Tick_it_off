import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from './components/Header/Header';
import { LoginForm } from './components/Forms/LoginForm/LoginForm';
import { StartPage } from './components/StartPage/StartPage';
import { UserStartPage } from './components/User/UserStartPage/UserStartPage';
import { TasksList } from './components/Tasks/TasksList/TasksList';
import { Logout } from './components/Logout/Logout';
import { AddTask } from './components/Forms/AddTask/AddTask';
import { RegisterForm } from './components/Forms/RegisterForm/RegisterForm';
import { AboutApp } from './components/AboutApp/AboutApp';

function App() {
  const isLogged = useSelector((state) => state.authSlice.isLogged);

  return (
    <>
      <Header />
      <div className="mainContainer">
        <Routes>
          <Route path="/*" element={<StartPage />} />
          <Route path="/aboutApp" element={<AboutApp />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/user" element={isLogged ? <UserStartPage /> : <Navigate to="/" />} />
          <Route path="/tasks/*" element={isLogged ? <TasksList /> : <Navigate to="/" />} />
          <Route path="/add" element={isLogged ? <AddTask /> : <Navigate to="/" />} />
          <Route path="/logout" element={isLogged ? <Logout /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
