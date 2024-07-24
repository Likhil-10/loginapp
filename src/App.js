import LoginPage from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={LoginPage}/>
        <Route exact path="/register" Component={Register}/>
        <Route exact path="/home" Component={Home}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
