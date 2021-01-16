
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = ({ pages }) => {
    const [articlesOpen, setArticlesOpen] = useState(false);
    return (
        <div className="navbarContainer">
            <nav className="navbar">
                <div className="brand">
                    RGScience
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li onClick={() => {
                        setArticlesOpen(!articlesOpen);
                    }}>
                        Articles
                        {
                            articlesOpen ? <ul>
                                {
                                    pages.map(({ title, path }) => (
                                        <li>
                                            <Link to={path}>{title}</Link>
                                        </li>
                                    ))
                                }
                            </ul> : ''
                        }
                    </li>

                </ul>
            </nav>
        </div>
    )
};

export default Navbar;
