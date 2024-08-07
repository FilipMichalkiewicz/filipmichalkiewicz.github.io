import './Header.scss'
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header>
            <div className="status section-container">
                <section className="left-section"></section>
                <section className="center-section">
                    <span>open for work</span>
                </section>
                <section className="right-section"></section>
            </div>
            <div className="menu section-container">
                <section className="left-section">
                    <span className="author">
                        filip<br />
                        michałkiewicz
                    </span>
                </section>
                <nav className="center-section">
                    {
                        ['home', 'about me', 'projects', 'resume', 'contact'].map((text, i) => {
                            return <li key={text}><Link style={{'--animation-delay': i*300 + 200 + 'ms'}}  className={text == 'home' ? 'current' : null} to={'/'+text.replace(' ', '-')} >{text}</Link></li>
                        })
                    }
                </nav>
                <section className="right-section"></section>
            </div>
        </header>
    )
}

export default Header;