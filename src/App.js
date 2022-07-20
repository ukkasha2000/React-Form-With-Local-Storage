import './App.css';
import RegistrationForm from './components/registration-form/RegistrationForm';
import Login from './components/login-form/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegistrationForm />} />
        <Route path='login' element={<Login />} />
        {/* </Route> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
