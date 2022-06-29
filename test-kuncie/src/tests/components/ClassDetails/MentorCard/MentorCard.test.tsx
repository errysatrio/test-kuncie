import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import MentorCard from '../../../../components/ClassDetails/MentorCard/MentorCard';
import { mockSuccessGetOneClassDetails } from '../../../mockData';

configure({ adapter: new Adapter() });
describe('Mentor Card', () => {
    it('renders correctly', () => {
        const mentor = mockSuccessGetOneClassDetails.mentors[0]
        const wrapper = shallow(<MentorCard mentors={mentor} key={0} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render Text component send by props', () => {
        const mentor = mockSuccessGetOneClassDetails.mentors[0]
        const wrapper = shallow(<MentorCard mentors={mentor} key={0} />);
        expect(wrapper.text()).toContain('Andi');
        expect(wrapper.text()).toContain('Engineer Company 1');
    });
});