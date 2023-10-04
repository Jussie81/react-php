import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [Info, setInfo] = useState('');

  const clickHandler = () => {
    fetch('http://testphp1.kesug.com', {
      method: "POST",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({action: 1})
    })
    .then(Response => Response.text())
    .then(Response => {
      console.log(Response);
      setInfo(Response);
    })
  }
  return (
    <>
      <div className="container">
        <h1>Hello!</h1>
        <button onClick={clickHandler}>Click</button>
        <div className='mx'>{Info}</div>
      </div>
    </>
  )
}

export default App
