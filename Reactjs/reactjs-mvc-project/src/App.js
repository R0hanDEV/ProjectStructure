
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './modules/login/login';
import Landing from './pages/landing/landing';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={Landing} />
          <Route path='/login' Component={Login} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
