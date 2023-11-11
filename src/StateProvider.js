import {createContext} from 'react';

const IsMobileDevice = createContext(false);

const CursorState = createContext('NORMAL');

export {IsMobileDevice, CursorState}