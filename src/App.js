import React, { useState } from 'react';
import './App.css';
import SandMassage from './components/SandMassage'

function App() {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [arr, setArr] = useState([]);

  function handleSandMassage() {
    if (!!name && !!message) {
      let objMessage = {
        name,
        message
      }
      setArr([...arr, objMessage])
      setName('');
      setMessage('');
    }
  }

  return (
    <div className="Container">
      <div className="Container-mensagens">
        {arr.length > 0 && (
          arr.map((item) => {
            if (item.name === 'eu') {
              return (
                <div className="componenteEu">
                  
                    <h1>{item.name}</h1>
                    
                    <h1>{item.message}</h1>

                </div>
              )
            } else {
              return (
                <div className="componenteProximo">
                  
                    <h1>{item.name}</h1>
                    
                    <h1>{item.message}</h1>

                  

                </div>
              )

            }
          })
        )}
      </div>

      <SandMassage
        onSandMessage={handleSandMassage}
        name={name}
        setName={setName}
        message={message}
        setMessage={setMessage}

      />
    </div>
  );
}

export default App;
