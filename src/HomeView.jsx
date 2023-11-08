import {useState, useContext, useEffect} from 'react';
import { IsMobileDevice, CursorState } from './StateProvider';
import { Dots, Circle, Wave, RoundedSquare, BiggerDots} from './Assets';
import './HomeView.scss';

const HomeView = () => {
    const {mobileDevice, _} = useContext(IsMobileDevice);
    const {cursorState, setCursorState} = useContext(CursorState);

    return (
        <div className='view' id='home'>
            <div className="center-container">
                <header 
                onMouseEnter={() => setCursorState({state: 'DIFFRENCE', target: null})}
                onMouseLeave={() => setCursorState({state: 'NORMAL', target: null})}
                >
                {mobileDevice ? 
                (
                    <h1>
                        Hey there,<br/> 
                        I'm <span style={{color: 'var(--theme-color-0)'}}>Filip</span><br/>
                        Fullstack <br/><span style={{color: 'transparent', WebkitTextStroke: '1px black'}}>Developer</span>
                    </h1>
                ):(
                    <h1>
                        Hey there, I'm <span style={{color: 'var(--theme-color-0)'}}>Filip</span><br/>
                        Fullstack Developer
                    </h1>
                    
                )}
                <h2>& UI/UX Designer</h2>
            </header>
            </div>
            <section className='decor'>
                <Dots id='dots-0' size='134' color={!mobileDevice ? 'black' : '#D2D2D2'} />
                <Circle id='circle-0' size='30' color='#D2D2D2' />
                <Circle id='circle-1' size='30' color='#D2D2D2' />
                <Wave id='wave-0' size='120' color='black' />
                <Wave id='wave-1' size='120' color='var(--theme-color-0)' />
                <Wave id='wave-2' size='120' color='black' />
                <RoundedSquare id='rounded-square-0' size='50' color='#D2D2D2' />
                <RoundedSquare id='rounded-square-1' size='50' color='#D2D2D2' />
                <BiggerDots id='bigger-dots-0' size='140' color='#D2D2D2' />
            </section>
        </div>
    )
}

export default HomeView;