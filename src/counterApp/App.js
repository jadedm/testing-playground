import React, { Component } from 'react';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			error: ''
		};
	}

	handleDecrement = () => {
		this.setState((prevState) => {
			if (prevState.counter !== 0) {
				return {
					...this.state,
					counter: prevState.counter - 1
				}				
			}
			return {
				...this.state,
				error: 'Count cannot go below 0'
			}
		});
	}

	render() {
		return (
			<div data-test="component-app">
				{this.state.error && <p data-test='error-display'>{this.state.error}</p>}
				<h1 data-test="counter-display">The counter is currently: {this.state.counter} </h1>
				<button 
					data-test="increment-button"
					onClick={() => this.setState((prevState) => ({ error: '', counter: prevState.counter + 1 }))}>
					Increment counter</button>
				<button 
					data-test="decrement-button"
					onClick = { this.handleDecrement }>
					Decrement counter</button>
			</div>
		);
	}
}

export default App;