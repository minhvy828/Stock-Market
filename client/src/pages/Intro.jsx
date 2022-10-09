import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/textLogo.png';

function Intro() {
	return (
		<div className="intro-container">
			<img src={Logo} alt="" />
			<div className="intro-form-container">
				<h1 className="intro-title">Welcome to StockX</h1>
				<p className="intro-subtitle">
					Exchange, trade, monitor<br></br>stocks and cryptos.
				</p>
				<Link to="/login">
					<button className="intro-login-btn">Log In</button>
				</Link>
				<Link to="/signup">
					<button className="intro-signup-btn">Sign UP</button>
				</Link>
			</div>
		</div>
	);
}

export default Intro;
