import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Public from './components/Public';
import Login from './features/auth/Login';
import DashLayout from './features/auth/DashLayout';
import Users from './components/Users';
import Notes from './components/Notes';
import Welcome from './features/auth/Welcome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Public/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="/dash" element={<DashLayout/>}>
      <Route index element={<Welcome/>}/>
      <Route path="/dash/users" element={<Users/>}/>
      <Route path="/dash/notes" element={<Notes/>}/>
      </Route>
      </Route>
    </Routes>
  );
}

export default App;
