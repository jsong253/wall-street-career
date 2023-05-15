
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header'

export default Home = () => {
	return (
		<>
            <Header />
            <h1>Home page </h1>
            <Link to='/about'>Go to Aboutpage</Link>
		</>
	)
};