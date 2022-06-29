import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import CoreLayout from '../../components/CoreLayout/CoreLayout';

configure({ adapter: new Adapter() });
describe('Core Layout', () => {
  it('should render child component send by props', () => {
    const wrapper = shallow(<CoreLayout content={<div></div>} />);
    expect(wrapper.contains(<div></div>)).toEqual(true);
  });
  it('renders correctly', () => {
    const wrapper = shallow(<CoreLayout content={<div></div>} />);
    expect(wrapper).toMatchSnapshot();
  });
});
