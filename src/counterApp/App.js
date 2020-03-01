import React, { Component } from 'react';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}

	render() {
		return (
			<div data-test="component-app">
				<h1 data-test="counter-display">The counter is currently: {this.state.counter} </h1>
				<button 
					data-test="increment-button"
					onClick={() => this.setState((prevState) => ({ counter: prevState.counter + 1 }))}>
					Increment counter</button>
			</div>
		);
	}
}

export default App;