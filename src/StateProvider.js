import {createContext} from 'react';

const IsMobileDevice = createContext(false);

const CursorState = createContext({state: 'NORMAL', target: null});

export {IsMobileDevice, CursorState}