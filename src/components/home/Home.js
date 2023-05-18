
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<>
            <h1>Home page </h1>
            <Link to='/about'>Go to About page</Link>
		</>
	)
};