import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';

function App() {
  return (
<Router>
  <Routes>
     <Route path="/" element={<Login />} />
  </Routes>
</Router>
  );
}

export default App;
