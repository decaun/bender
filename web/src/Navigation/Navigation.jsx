import './Navigation.css'
import React from "react";
import { Link } from 'react-router-dom';


function Navigation() {

	const navStyle = {
        color: 'white'
	};
	
	return (
		<nav>
			<h3>Logo</h3>
			<ul className="nav-links">
				<Link style={navStyle} to="/swipe">
					<li>Swipe</li>
				</Link>
				<Link style={navStyle} to="/events">
					<li>Events</li>
				</Link>
				<Link style={navStyle} to="/messages">
					<li>Messages</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Navigation;
