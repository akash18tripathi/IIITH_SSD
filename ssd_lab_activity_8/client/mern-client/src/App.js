import './App.css';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage'
import StudentQuery from './components/StudentQuery'
import Profile from './components/Profile';
import TAS from './components/TAS'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="signup" element={<SignUpForm />}/>
        <Route path="login" element={<LoginForm />}/>
        <Route path="profile" element={<Profile />}/>
        <Route path="LandingPage" element={<LandingPage />}/>
        <Route path="student/addQuery" element={<StudentQuery />}/>
        <Route path="tas/queries" element={<TAS />}/>
    </Routes>
  </BrowserRouter>);
}

export default App;
