import {React, useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const middleCursor = document.querySelector(".middle-cursor");
const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const updateMousePosition = e => {
      setMousePosition({x: e.clientX, y: e.clientY});
    }
    window.addEventListener("mousemove", updateMousePosition);
    if(mousePosition.x < window.innerWidth && mousePosition.y < window.innerHeight && mousePosition.x > 0 && mousePosition.y > 0) (window.innerWidth >= 1000 ? setShown(true) : setShown(false));
  });
  return (shown && (<div className="cursor" style={{top: `${mousePosition.y-40}px`, left: `${mousePosition.x-40}px`}}></div>))
}

root.render(
    <div className="container">
        <Cursor />
        <header>
          <h1>
            Hey there, I’m <span style={{color: "#4831D4"}}>Filip</span><br/>
            Full-Stack Developer
          </h1>
          <h2>& UI/UX Designer</h2>
        </header>
        <h3>I'm currently working on my portfolio. Come back later!</h3>
    </div>
);
