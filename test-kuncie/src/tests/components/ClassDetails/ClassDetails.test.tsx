import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import ClassDetails from '../../../components/ClassDetails/ClassDetails';

import MentorCard from '../../../components/ClassDetails/MentorCard/MentorCard';
import { mockSuccessGetOneClassDetails } from '../../mockData';

configure({ adapter: new Adapter() });
describe('Class Details', () => {
    it('should render Class Details with text received from props', () => {
        const wrapper = shallow(<ClassDetails data={mockSuccessGetOneClassDetails} />);
        expect(wrapper.text()).toContain('Belajar Javascript Dasar');
        expect(wrapper.text()).toContain('Belajar Javascript Dasar bersama Andi dan Budi');
    });
    it('should renders two Mentor Card with two mentors data',() => {
        const wrapper = shallow(<ClassDetails data={mockSuccessGetOneClassDetails} />);
        const mentorCard = wrapper.find('.mentor-card')
        expect(mentorCard).toHaveLength(2)
    });
    it('renders correctly', () => {
        const mentor = mockSuccessGetOneClassDetails.mentors[0]
        const wrapper = shallow(<MentorCard mentors={mentor} key={0} />);
        expect(wrapper).toMatchSnapshot();
    });
});