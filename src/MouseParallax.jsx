import {useState, useEffect, Children, createContext, useContext} from 'react';

const abs = Math.abs;

const MouseParallax = ({children, factor, multi, id}) => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const element = document.querySelector(`#${id}`);
    const elementBounds = element && element.getBoundingClientRect();
    const dy = element && (multi || 1) * (abs(elementBounds.y + element.offsetHeight/2) - abs(mousePosition.y)) || 0, 
    dx = element && (multi || 1)* (abs(elementBounds.x + element.offsetWidth/2) - abs(mousePosition.x)) || 0;

    useEffect(() => window.addEventListener('mousemove', e => setMousePosition({x: e.clientX, y: e.clientY})), []);

    return (
        <div id={id} style={{transform: `translate3d(${dx * factor}px, ${dy * factor}px, 0)`, transition: 'transform 0s'}}>{children}</div>
    );
}

export default MouseParallax