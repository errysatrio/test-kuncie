import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import Home from '../pages';
import CoreLayout from '../components/CoreLayout/CoreLayout';

configure({ adapter: new Adapter() });
describe('Core Layout', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<CoreLayout content={< Home />} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render child component send by props', () => {
        const wrapper = shallow(<CoreLayout content={< Home />} />);
        expect(wrapper.contains(<Home />)).toEqual(true);
    });
});