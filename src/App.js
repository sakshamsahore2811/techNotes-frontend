import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Public from './components/Public';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Public/>}/>
      </Route>
    </Routes>
  );
}

export default App;
