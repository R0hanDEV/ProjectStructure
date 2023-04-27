
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UseStatePractice from './components/useStatePractice';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={UseStatePractice} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
