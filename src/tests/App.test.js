import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from './../App';

test('should render without any errors', () => {

	const div = document.createElement('div');
	render(<App />, div);
	unmountComponentAtNode(div);

});