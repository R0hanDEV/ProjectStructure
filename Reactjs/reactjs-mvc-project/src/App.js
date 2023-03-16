
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import InputForm from './pages/form/inputForm';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={InputForm} />
          <Route path='/login' Component={InputForm} />
          <Route path='/signup' Component={InputForm} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
