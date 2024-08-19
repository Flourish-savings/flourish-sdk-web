import React, { useEffect, useState } from 'react';
import './App.css';
import FlourishWrapper from './flourishWrapper';


function App() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    setAccessToken("FLOURISH_TOKEN_HERE");
  }, []);

  const genericEventCallback = (eventData) => {
    console.log('Generic event data', eventData);
  };

  return (
    <div className="App">
      <h1>Flourish SDK Integration</h1>
      <FlourishWrapper
        token={accessToken}
        environment="staging"
        language="en"
        onGenericEvent={genericEventCallback}
      />
    </div>
  );
}

export default App;
