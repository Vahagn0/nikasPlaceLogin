import './App.css';
import "./logIn/login.css"
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import LogIn from './logIn/logIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={ <LogIn />} />
          <Route path='/users' element = {<div>aaa</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
