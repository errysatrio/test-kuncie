import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import { mockErrorGetAllClasses, mockSuccessGetAllClasses } from '../mockData';
import ClassCard from '../../components/ClassCard/ClassCard';

configure({ adapter: new Adapter() });

describe("ClassCard", () => {
    it("should render ClassCard with text from API Response", () => {
        const item = mockSuccessGetAllClasses.items[0];
        const wrapper = shallow(<ClassCard name={item.name} id={item.id} onTapClassCard={() => { }} />);
        expect(wrapper.text()).toContain('Belajar Javascript Dasar');
        
    });
    it('renders correctly', () => {
        const item = mockSuccessGetAllClasses.items[0];
        const wrapper = shallow(<ClassCard name={item.name} id={item.id} onTapClassCard={() => { }} />);
        expect(wrapper).toMatchSnapshot();
    });
});
