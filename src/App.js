import './App.css';
import NavBar from './components/navbar/navbar.components';
import Home from './routes/home/home.routes';
import { Routes, Route } from 'react-router-dom';
import Submit from './routes/submit/submit.routes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='/submit' element={<Submit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
