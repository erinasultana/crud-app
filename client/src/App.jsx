import { useState } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateUsers from './CreateUsers';
import UpdateUsers from './UpdateUsers';
import Users from './Users';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/create' element={<CreateUsers/>}></Route>
          <Route path='/update' element={<UpdateUsers/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
