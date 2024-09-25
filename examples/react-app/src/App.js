import React, { useEffect, useRef} from 'react';
import './App.css';
import { Flourish } from 'flourish-sdk-web';

function App() {
  const flourishRef = useRef(null);

  useEffect(() => {
    const genericEventCallback = (eventData) => {
      console.log('Generic event received in React Example:', eventData);
    };

    const flourishComponent = Flourish(
      'TOKEN_HERE',
      'en',
      'staging',
      genericEventCallback
    );

    if (flourishRef.current) {
      flourishRef.current.appendChild(flourishComponent);
    }

    return () => {
      if (flourishRef.current) {
        flourishRef.current.removeChild(flourishComponent);
      }
    };
  }, []);

  return (
    <div
      ref={flourishRef}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}

export default App;
