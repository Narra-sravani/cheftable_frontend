import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <Router>
    <div className="App">
       <Navbar /> 
      <Routes>
        <Route path="/" element={<Main />}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
