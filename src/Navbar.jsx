import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import { IsMobileDevice, CursorState } from './StateProvider';
import './Navbar.scss';

const Navbar = ({style}) => {
    const {mobileDevice, _} = useContext(IsMobileDevice);
    const {__, setCursorState} = useContext(CursorState);
    const [mobileMenuShown, setMobileMenuShown] = useState(false);

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
                        <div className='selected'>home</div>
                        <div>works</div>
                        <div>about me</div>
                        <div>contact</div>
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
                <div className='menu' data-aos="zoom-out-down">
                    <div className='selected-btn-bg'></div>
                    <div className='menu-btns'>
                        <div onMouseEnter={() => setCursorState('SCATTER')} onMouseLeave={() => setCursorState('NORMAL')} className='selected-btn'>home</div>
                        <div onMouseEnter={() => setCursorState('SCATTER')} onMouseLeave={() => setCursorState('NORMAL')} className='menu-btn'>works</div>
                        <div onMouseEnter={() => setCursorState('SCATTER')} onMouseLeave={() => setCursorState('NORMAL')} className='menu-btn'>about me</div>
                        <div onMouseEnter={() => setCursorState('SCATTER')} onMouseLeave={() => setCursorState('NORMAL')} className='menu-btn'>contact</div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;