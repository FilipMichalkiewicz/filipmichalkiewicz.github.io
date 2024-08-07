import './Home.scss'
import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/Assets'
import Image from '../assets/image-1.png'
import { FaGithub, FaStackOverflow, FaLinkedin, FaDribbble } from "react-icons/fa";

function Home() {
    return (
        <main className="home section-container">
            <section className="left-section">
                <div className="content">
                    <div className="hello">
                        <span className="line"><span>hi</span><span className="empty-space-fill"></span><span style={{maxWidth: '3.25rem'}} className="empty-space-fill"></span></span>
                        <span className="line"><span>i’m <i>filip</i></span><span className="empty-space-fill"></span></span>
                        <span className="line"><span>fullstack</span><span className="empty-space-fill"></span></span>
                        <span className="line"><span>developer</span><span className="empty-space-fill"></span></span>
                        <span className="line"><span>and <i>ui/ux</i></span><span className="empty-space-fill"></span></span>
                        <span className="line"><span>designer</span><span className="empty-space-fill"></span></span>
                    </div>
                    <blockquote>Creating seamless digital experiences with a blend of technical expertise and creative design.</blockquote>
                    <Link className="contact-button" to="/contact">
                        <div className="wrapper">
                            <span className="text">let's talk</span>
                            <ArrowIcon className="arrow" color="#FF6960" />
                        </div>
                    </Link>
                    <div className="media-buttons">
                        <Link className="media-button" style={{"--animation-duration": ".8s"}} to="/"><FaStackOverflow /></Link>
                        <Link className="media-button" style={{"--animation-duration": "1.1s"}} to="/"><FaGithub /></Link>
                        <Link className="media-button" style={{"--animation-duration": "1.4s"}} to="/"><FaLinkedin /></Link>
                        <Link className="media-button" style={{"--animation-duration": "1.7s"}} to="/"><FaDribbble /></Link>
                    </div>
                </div>
            </section>
            <section className="center-section">
                <div className="content"></div>
            </section>
            <section className="right-section">
                <div className="content">
                    <div className="quote">
                        <span className="line"><span><i>"</i>innovation</span></span>
                        <span className="line"><span>distinguishes</span></span>
                        <span className="line"><span>between a</span></span>
                        <span className="line"><span>leader and</span></span>
                        <span className="line"><span>a follower<i>"</i></span></span>
                    </div>
                    <span className="quote-author"><span>~ steve jobs</span></span>
                    <div className="action-buttons">
                        <Link style={{backgroundColor: "var(--accent-color)", "--animation-duration": "1s"}} to="/about-me">
                            <div className="wrapper">
                                <span className="text">about me</span>
                                <ArrowIcon className="arrow" color="white" />
                            </div>
                        </Link>
                        <Link style={{backgroundColor: "var(--accent-color-2)", "--animation-duration": "1.3s"}} to="/projects">
                            <div className="wrapper">
                                <span className="text">projects</span>
                                <ArrowIcon className="arrow" color="white" />
                            </div>
                        </Link>
                        <Link style={{backgroundColor: "var(--accent-color-3)", "--animation-duration": "1.6s"}} to="/resume">
                            <div className="wrapper">
                                <span className="text">resume</span>
                                <ArrowIcon className="arrow" color="white" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;