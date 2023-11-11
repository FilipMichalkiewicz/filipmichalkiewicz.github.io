import {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { IsMobileDevice, CursorState, CurrentView } from './StateProvider';
import './Navbar.scss';

const Navbar = ({style}) => {
    const {mobileDevice, _} = useContext(IsMobileDevice);
    const {__, setCursorState} = useContext(CursorState);
    const currentView = useContext(CurrentView);
    const [mobileMenuShown, setMobileMenuShown] = useState(false);
    const menuButtons = [];

    const scrollTo = (id) => {
        const view = document.getElementById(id);
        view && view.scrollIntoView();
    }

    ['home', 'works', 'about me', 'contact'].map((text, i) => {
        if(!mobileDevice) {
            menuButtons.push(<div key={i} className={(i == currentView.currentView.current ? 'selected-btn' : 'menu-btn')} onClick={() => scrollTo(text.replace(' ', '-'))}>{text}</div>)
        }else   menuButtons.push(<div key={i} className={(i == currentView.currentView.current ? 'selected' : '')} onClick={() => {setMobileMenuShown(false);scrollTo(text.replace(' ', '-'))}}>{text}</div>)
    
    })

    return (
        <nav style={style}>
            <div className='text-logo' data-aos="zoom-out-right">
                Filip<br/>
                Michałkiewicz
            </div>
            {mobileDevice && (
                <div className="menu-mobile" style={(mobileMenuShown ? {top: '0px'} : null)}>
                    <div className='menu-text-logo'>
                        Filip<br/>
                        Michałkiewicz
                    </div>
                    <div className="close-btn" onClick={() => setMobileMenuShown(false)} >
                        <span></span>
                        <span></span>
                    </div>
                    <div className="menu-btns">
                        {menuButtons}
                    </div>
                    <div className="socialmedia-container">
                        <Link to='https://github.com/filipMichalkiewicz'>Github</Link>
                        <Link to='https://www.linkedin.com/in/filip-michałkiewicz-06a520210/'>LinkedIn</Link>
                        <Link to='https://stackoverflow.com/users/16566834/locz3k'>Stack Overflow</Link>
                    </div>
                </div>
            )}
            {mobileDevice ? (
                <div className='menu-mobile-toggle-btn' onClick={() => setMobileMenuShown(true)}>
                    <span></span>
                    <span></span>
                </div>
            ):(
                <div className='menu' data-aos="zoom-out-down"  onMouseEnter={() => setCursorState('SCATTER')} onMouseLeave={() => setCursorState('NORMAL')}>
                    <div className='menu-btns'>
                        {menuButtons}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;