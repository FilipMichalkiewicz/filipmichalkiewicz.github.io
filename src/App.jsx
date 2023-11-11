import Navbar from './Navbar';
import {useEffect, useState, useRef} from 'react';
import {IsMobileDevice, CursorState, CurrentView} from './StateProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import Cursor from './Cursor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeView from './HomeView';
import './App.scss';

const App = () => {
    const [mobileDevice, setMobileDevice] = useState((window.innerWidth < 800 ? true : false));
    const [cursorState, setCursorState] = useState('NORMAL');
    const [menuTheme, setMenuTheme] = useState();
    const currentView = useRef(0);

    useEffect(() => {
        AOS.init();

        const container = document.documentElement.querySelector('.container');
        const body = document.documentElement.body;
        const views = {
            home: container.querySelector('#home'),
        };
        const onScroll = () => {
            currentView.current = Math.floor(container.scrollTop/window.innerHeight);
            
            switch(currentView.current) {
                case 0:
                    setMenuTheme({
                        '--menu-color': 'var(--theme-color-0)',
                        '--menu-background-color': '#ffffff50',
                        '--menu-text-logo-color': '#A7A7A7',
                        '--menu-buttons-hover-color': '#555555',
                        '--current-background-color': '#F9F9F9',
                        '--cursor-border-color': 'black',
                        '--mobile-navbar-color': 'black',
                    }) 
                    break;
                case 1:
                    setMenuTheme({
                        '--menu-color': '#ffffff50',
                        '--menu-background-color': '#ffffff10',
                        '--menu-text-logo-color': 'var(--theme-color-1)',
                        '--menu-button-hover-color': 'var(--theme-color-1)',
                        '--current-background-color': 'var(--theme-color-0)',
                        '--cursor-border-color': 'white',
                        '--mobile-navbar-color': 'var(--theme-color-1)',
                    }) 
                    break;
                case 2:
                    setMenuTheme({
                        '--menu-color': 'var(--theme-color-0)',
                        '--menu-background-color': '#ffffff50',
                        '--menu-text-logo-color': '#A7A7A7',
                        '--menu-buttons-hover-color': '#555555',
                        '--current-background-color': '#F9F9F9',
                        '--cursor-border-color': 'black',
                        '--mobile-navbar-color': 'black',
                    }) 
                    break;
                case 3:
                    setMenuTheme({
                        '--menu-color': 'var(--theme-color-0)',
                        '--menu-background-color': '#ffffff50',
                        '--menu-text-logo-color': '#A7A7A7',
                        '--menu-buttons-hover-color': '#555555',
                        '--current-background-color': '#F9F9F9',
                        '--cursor-border-color': 'black',
                        '--mobile-navbar-color': 'black',
                    }) 
                    break;
            }
        }
        const onResize = () => {
            if(window.innerWidth < 800) {
                setMobileDevice(true)
            }else setMobileDevice(false);
        }
        
        container.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onResize);
    }, []);

    return (
        <Router>
            <IsMobileDevice.Provider value={{mobileDevice: mobileDevice, setMobileDevice: setMobileDevice}}>
                <CursorState.Provider value={{cursorState: cursorState, setCursorState: setCursorState}}>
                    <CurrentView.Provider value={{currentView: currentView}}>
                        <div className='container' id='container' style={menuTheme}>
                            {!mobileDevice && <Cursor />}
                            {!mobileDevice && (
                                <div className="view-pagination">
                                {[0,1,2,3].map((_, i) => {return (<span key={i} className={(i == currentView.current ? "current" : "")}></span>)})}
                                </div>
                            )}
                            <Navbar/>
                            <HomeView />
                            <div className='view' id='works' style={{top: '100vh',background: 'var(--theme-color-0)'}}></div>
                            <div className='view' id='about-me' style={{top: '200vh'}}></div>
                            <div className='view' id='contact' style={{top: '300vh'}}></div>
                        </div>
                    </CurrentView.Provider>
                </CursorState.Provider>
            </IsMobileDevice.Provider>
        </Router>
    )
}

export default App;
