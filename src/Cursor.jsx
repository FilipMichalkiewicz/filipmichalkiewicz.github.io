import {useContext, useEffect, useState} from 'react';
import {CursorState} from './StateProvider';
import './Cursor.scss';

const Cursor = () => {
    const {cursorState, _} = useContext(CursorState);
    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const cursor = document.querySelector('.cursor');

    useEffect(() => {
        setCursorPosition({x: mousePosition.x - (cursor ? cursor.offsetWidth/2 : 0), y: mousePosition.y - (cursor ? cursor.offsetHeight/2 : 0)});
    }, [mousePosition.x, mousePosition.y]);

    useEffect(() => window.addEventListener("mousemove", (e) => setMousePosition({x: e.clientX, y: e.clientY})), []);

    return (
        <div style={{top: `${cursorPosition.y}px`,left: `${cursorPosition.x}px`}} className='cursor' type={cursorState}><span className='middle-dot'></span></div>
    )
}

export default Cursor