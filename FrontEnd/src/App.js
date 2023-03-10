import './App.css';
import "./logIn/login.css"
import "./main/main.css"
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import LogIn from './logIn/logIn';
import { useState } from 'react';
import Main from './main/main';

function App() {

  const [token,setToken] = useState("")

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={ <LogIn setToken={setToken} />} />
          {/* {token &&  */}
            <Route path='/users' element={<Main />} />
            {/* <Route path={`/users/${token}`} element = {<Users />} /> */}
          {/* } */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
