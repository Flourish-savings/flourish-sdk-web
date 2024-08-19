import React, { useEffect, useRef } from 'react';
import { Flourish } from './flourish';

const FlourishWrapper = ({ token, language, environment, version, onGenericEvent }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const removeListeners = Flourish({
      token,
      language,
      environment,
      version,
      genericEventCallback: onGenericEvent
    });

    return () => {
      if (removeListeners) {
        removeListeners();
      }
    };
  }, [token, language, environment, version, onGenericEvent]);

  return <div ref={containerRef} id="app" style={{ width: '100%', height: '100%' }} />;
};

export default FlourishWrapper;
