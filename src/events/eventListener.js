import eventManager from './eventManager';

const handleGenericEvent = (callback) => {
    eventManager.on('GENERIC_EVENT', callback);
};

export {
    handleGenericEvent
};
