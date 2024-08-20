import eventManager from './eventManager';

const emitEvent = (event) => {
  eventManager.emit('GENERIC_EVENT', event);
};

export default emitEvent;
