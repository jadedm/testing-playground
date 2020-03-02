import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './../App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('should render without any errors', () => {
	
	const wrapper = shallow(<App />);
	expect(wrapper).toBeTruthy();

});

test('should render without any errors', () => {
	const div = document.createElement('div');
	render(<App />, div);
	unmountComponentAtNode(div);
});