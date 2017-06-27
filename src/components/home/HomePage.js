import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>Administrator</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid corporis culpa eum fuga illo inventore minima molestias nesciunt, officia officiis quasi quos rerum totam voluptatem? Debitis eveniet explicabo fuga!</p>
				<Link to='about' className="btn btn-primary btn-lg">Learn More!</Link>
			</div>
		);
	}
}

export default HomePage;
