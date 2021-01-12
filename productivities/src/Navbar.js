import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">
                    <h3>Productivites</h3>
                </Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/your-goals">
                            Your Goals
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;