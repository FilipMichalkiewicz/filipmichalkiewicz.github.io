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
                    <h1 data-aos="fade-up"  data-aos-duration="300">
                        Hey there, I'm <span style={{color: 'var(--theme-color-0)'}}>Filip</span><br/>
                        Fullstack Developer
                    </h1>
                    
                )}
                <h2 data-aos="fade-up"  data-aos-duration="500">& UI/UX Designer</h2>
            </header>
            </div>
            <section className='decor'>
                <Dots data-aos="fade-up" data-aos-duration="800" id='dots-0' size='134' color={!mobileDevice ? 'black' : '#D2D2D2'} />
                <Circle data-aos="fade-up" data-aos-duration="600" id='circle-0' size='30' color='#D2D2D2' />
                <Circle data-aos="fade-up" data-aos-duration="400" id='circle-1' size='30' color='#D2D2D2' />
                <Wave data-aos="fade-up" data-aos-duration="800" id='wave-0' size='120' color='black' />
                <Wave data-aos="fade-up" data-aos-duration="900" id='wave-1' size='120' color='var(--theme-color-0)' />
                <Wave data-aos="fade-up" data-aos-duration="700" id='wave-2' size='120' color='black' />
                <RoundedSquare data-aos="fade-up" data-aos-duration="600" id='rounded-square-0' size='50' color='#D2D2D2' />
                <RoundedSquare data-aos="fade-up" data-aos-duration="900" id='rounded-square-1' size='50' color='#D2D2D2' />
                <BiggerDots data-aos="fade-up" data-aos-duration="1000" id='bigger-dots-0' size='140' color='#D2D2D2' />
            </section>
        </div>
    )
}

export default HomeView;