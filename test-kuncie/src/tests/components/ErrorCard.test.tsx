import React from 'react';
import { configure, shallow } from 'enzyme';
import ErrorCard from '../../components/ErrorCard/ErrorCard';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import { mockErrorGetAllClasses } from '../mockData';

configure({ adapter: new Adapter() });

describe("ErrorCard", () => {
    it("should render ErrorCard with text from error message", () => {
        const wrapper = shallow(<ErrorCard error={mockErrorGetAllClasses} />);
        expect(wrapper.text()).toContain('mollit officia magna anim');
    });
    
  it('renders correctly', () => {
        const wrapper = shallow(<ErrorCard error={mockErrorGetAllClasses} />);
    expect(wrapper).toMatchSnapshot();
  });
});
