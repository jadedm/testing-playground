import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './../App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this seupt
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
	const wrapper = shallow(<App {...props} />);
	if (state) { wrapper.setState(state) };
	return wrapper;
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {String} val - value of the data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`);
};

test('should render counterApp component without any errors', () => {	
	const wrapper = setup();
	const appComponent = findByTestAttr(wrapper, 'component-app');
	expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
	const wrapper = setup();
	const button = findByTestAttr(wrapper, 'increment-button');
	expect(button.length).toBe(1);
});

test('renders decrement button', () => {
	const wrapper = setup();
	const button = findByTestAttr(wrapper, 'decrement-button');
	expect(button.length).toBe(1);
});

test('renders counter display', () => {
	const wrapper = setup();
	const counterDisplay = findByTestAttr(wrapper, 'counter-display');
	expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
	const wrapper = setup();
	let initialCounterState = wrapper.state('counter');
	expect(initialCounterState).toBe(0);
});

test('clicking button increments counter display', () => {
	const counter = 7;
	const wrapper = setup(null, { counter });

	// find the button and click
	const button = findByTestAttr(wrapper, 'increment-button');
	button.simulate('click');
	wrapper.update();

	// find the display and test the value
	const counterDisplay = findByTestAttr(wrapper, 'counter-display');
	expect(counterDisplay.text()).toContain(counter + 1);
});

test('clicking the decrement button decrements the counter display', () => {
	const counter = 5;
	const wrapper = setup(null, { counter });

	// find the button and simulate a click
	const button = findByTestAttr(wrapper, 'decrement-button');
	button.simulate('click');
	wrapper.update();
	
	// find the display and test the value
	const counterDisplay = findByTestAttr(wrapper, 'counter-display');
	expect(counterDisplay.text()).toContain(counter - 1);

});

test('decrementing below 0 throws and error', () => {
	const counter = 0;
	const wrapper = setup(null, { counter });
	
	// find the button and simulate a click
	const button = findByTestAttr(wrapper, 'decrement-button');
	button.simulate('click');
	wrapper.update();

	// find the display and test the error value is set or not
	const errorDisplay = findByTestAttr(wrapper, 'error-display');
	expect(errorDisplay.length).toBe(1);

});

// clear error on increment

test('incrementing count should reset error', () => {
	
	const counter = 0;
	const wrapper = setup(null, { counter });

	// find the button and simulate a click
	const decrementButton = findByTestAttr(wrapper, 'decrement-button');
	decrementButton.simulate('click');
	wrapper.update();

	const incrementButton = findByTestAttr(wrapper, 'increment-button');
	incrementButton.simulate('click');
	wrapper.update();

	const errorDisplay = findByTestAttr(wrapper, 'error-display');
	expect(errorDisplay.length).toBe(0);
})