import {Link} from 'react-router-dom'
import './Footer.css';

function Footer(){
    return (
        <footer >
            <p>&copy; wall-street-career 2023</p>
            <nav className="navbar">
                <ul >
                     <li>
                        <Link to="/termOfUse">Term of Use</Link>
                    </li>

                    <li>
                        <Link to="/privateNotice">Private Notice</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer