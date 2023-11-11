import {createContext} from 'react';

const IsMobileDevice = createContext(false);

const CursorState = createContext('NORMAL');

const CurrentView = createContext(0);

export {IsMobileDevice, CursorState, CurrentView}