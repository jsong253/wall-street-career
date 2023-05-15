import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header'

export default About = () => {
	return (
		<>
            <Header />
            <h1>About page </h1>
            <Link to='/about'>Go to Homepage</Link>
		</>
	)
};