import './App.css';
import { BrowserRouter as  Router,Routes,Route} from "react-router-dom";
import Start from './components/start';
import Login from './components/login';
import Navbar from './components/navbar';
import Home from './components/home';
import Playing from './components/playing';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" Component={Start}/>
          <Route exact path="/home" Component={Home}/>
          <Route exact path="/login" Component={Login}/>
          <Route exact path="/playing" Component={Playing}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
