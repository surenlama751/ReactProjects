import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Todolist from './Todolist/Todolist';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Todolist/>
      <Routes>
        <Route path="/" element={<Todolist/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
