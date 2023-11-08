import {useContext, useEffect, useState} from 'react';
import {CursorState} from './StateProvider';
import './Cursor.scss';

const Cursor = () => {
    const {cursorState, _} = useContext(CursorState);
    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});

    const cursorStates = {
        NORMAL: {
            width: '80px',
            height: '80px',
            border: '1px solid var(--cursor-border-color)'
        },
        DIFFRENCE: {
            width: '120px',
            height: '120px',
            background: 'var(--current-background-color)',
            mixBlendMode: 'difference'
        }
    }
    useEffect(() => {
        const onMouseMove = e => {
            setCursorPosition({x: e.clientX, y: e.clientY});
        }
        window.addEventListener("mousemove", onMouseMove);
    }, []);

    return (
        <div className="cursor-container">
            <div style={{top: `${cursorPosition.y-(Number.parseInt(cursorStates[cursorState.state].width.replace("px", ""))/2)}px`,left: `${cursorPosition.x-(Number.parseInt(cursorStates[cursorState.state].width.replace("px", ""))/2)}px`, ...cursorStates[cursorState.state]}} className={`cursor ${cursorState.state}`}><span className='middle-dot'></span></div>
        </div>
    )
}

export default Cursor