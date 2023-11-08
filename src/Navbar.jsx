import {useContext} from 'react';
import { IsMobileDevice } from './StateProvider';
import './Navbar.scss';

const Navbar = ({style}) => {
    const {mobileDevice, _} = useContext(IsMobileDevice);

    return (
        <nav style={style}>
            <div className='text-logo'>
                Filip<br/>
                Michałkiewicz
            </div>
            {mobileDevice ? (
                <div className='menu-toggle-btn'>
                    <span></span>
                    <span></span>
                </div>
            ):(
                <div className='menu'>
                    <div className='selected-btn-bg'></div>
                    <div className='menu-btns'>
                        <div className='selected-btn'>home</div>
                        <div className='menu-btn'>works</div>
                        <div className='menu-btn'>about me</div>
                        <div className='menu-btn'>contact</div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;