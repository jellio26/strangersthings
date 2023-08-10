import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import { Routes } from 'react-router-dom';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />

      <Routes>
        <Route path='/' element={<h1>Home Page</h1>}></Route>
        <Route path='/Posts' element={<h2>Posts</h2>}></Route>
      </Routes>
    </>
  );
}

export default App;
