import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to='/new-goal'>
            <h3>Click here to set a new goal</h3>
            </Link>
        </div>
    );
};

export default Home;