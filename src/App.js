import './App.css';
import NavBar from './components/navbar/navbar.components';
import RouteBody from './routes/body/body.routes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouteBody />
    </div>
  );
}

export default App;
