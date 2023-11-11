import { useContext } from 'react';
import { IsMobileDevice, CursorState } from './StateProvider';
import { Dots, Circle, Wave, RoundedSquare, BiggerDots, ScrollDownIndicator, StackOverflowIcon, GithubIcon, LinkedInIcon, BehanceIcon} from './Assets';
import { Link } from 'react-router-dom';
import './HomeView.scss';
import MouseParallax from './MouseParallax';

const HomeView = () => {
    const {mobileDevice, _} = useContext(IsMobileDevice);
    const {__, setCursorState} = useContext(CursorState);

    return (
        <div className='view' id='home'>
            <div className="center-container">
                <header 
                onMouseEnter={() => setCursorState('DIFFRENCE')}
                onMouseLeave={() => setCursorState('NORMAL')}
                >
                    {mobileDevice ? 
                    (
                        <h1 data-aos="fade-right"  data-aos-duration="500">
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
                    <h2 data-aos={!mobileDevice ? 'fade-up' : 'fade-right'}  data-aos-duration="500">& UI/UX Designer</h2>
                </header>
            </div>
            {!mobileDevice && (
                <div className="socialmedia-container" onMouseEnter={() => setCursorState('SCATTER')} onMouseLeave={() => setCursorState('NORMAL')}>
                    <Link to="https://stackoverflow.com/users/16566834/locz3k"><StackOverflowIcon color='#F47F24' color2='#BCBBBB'/></Link>
                    <Link to="https://stackoverflow.com/users/16566834/locz3k"><GithubIcon color='#171515'/></Link>
                    <Link to="https://stackoverflow.com/users/16566834/locz3k"><LinkedInIcon color='#0E76A8' /></Link>
                    <Link to="https://stackoverflow.com/users/16566834/locz3k"><BehanceIcon color='#053eff'/></Link>
                </div>
            )}
            <section className='decor'>
                <MouseParallax id='dots-0' factor={.005}><Dots data-aos="fade-up" data-aos-duration="800" size='134' color={!mobileDevice ? 'black' : '#D2D2D2'} /></MouseParallax>
                <MouseParallax id='circle-0' factor={.01} multi={-1}><Circle data-aos="fade-up" data-aos-duration="600" size='60' color='#D2D2D2' /></MouseParallax>
                <Circle data-aos="fade-up" data-aos-duration="400" id='circle-1' size='30' color='#D2D2D2' />
                <Wave data-aos="fade-up" data-aos-duration="800" id='wave-0' size='120' color='black' />
                <Wave data-aos="fade-up" data-aos-duration="900" id='wave-1' size='120' color='var(--theme-color-0)' />
                <Wave data-aos="fade-up" data-aos-duration="700" id='wave-2' size='120' color='black' />
                <RoundedSquare data-aos="fade-up" data-aos-duration="600" id='rounded-square-0' size='50' color='#D2D2D2' />
                <RoundedSquare data-aos="fade-up" data-aos-duration="900" id='rounded-square-1' size='50' color='#D2D2D2' />
                <MouseParallax id='bigger-dots-0' multi={-1} factor={.01}><BiggerDots data-aos="fade-up" data-aos-duration="1000" size='140' color='#D2D2D2' /></MouseParallax>
                <ScrollDownIndicator onMouseEnter={() => setCursorState('FOCUS')} onMouseLeave={() => setCursorState('NORMAL')} data-aos="fade-up" data-aos-duration="500" id='scroll-down-indicator' size='100'/>
            </section>
        </div>
    )
}

export default HomeView;