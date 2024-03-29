import './App.css';
 import About from './components/About';
import Message from './components/Message';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cards from './components/Cards';

function App() {
  const [mode, setMode] = useState('light'); // by default mode
  const [btnmode, setbtnmode] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const alertShow = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const changedarkmode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      setbtnmode('Enable Light Mode');
      alertShow('Dark Mode has been Enabled', 'success');
      document.title = 'Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setbtnmode('Enable Dark Mode');
      alertShow('Light Mode has been Enabled', 'success');
      document.title = 'Light Mode';
    }
  };
  return (
    <>
      
      <div>
        <BrowserRouter>
        <Navbar title="REACTAPP" mode={mode} changedarkmode={changedarkmode} btnmode={btnmode} />
        <Message alert={alert} />
          <Routes>
            <Route path="/textform" element={ <TextForm heading="Commect Below To Express Your Thoughts" mode={mode} alertShow={alertShow} />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Cards/>} />
          </Routes>  
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
