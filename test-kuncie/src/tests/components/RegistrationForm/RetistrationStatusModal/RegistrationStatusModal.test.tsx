import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import RegistrationStatusModal from '../../../../components/RegistrationForm/RegistrationStatusModal/RegistrationStatusModal';
import { mockErrorCreateRegisteredUser } from '../../../mockData';

configure({ adapter: new Adapter() });

describe('Class Details', () => {
    it('should render Registation Form with text received from props', () => {
        const wrapper = shallow(<RegistrationStatusModal data={mockErrorCreateRegisteredUser} visible={true} onCancel={() => { }} />);
        expect(wrapper.text()).toContain('Could not join');
        expect(wrapper.text()).toContain('400');
    });
    it('renders correctly', () => {
        const wrapper = shallow(<RegistrationStatusModal data={mockErrorCreateRegisteredUser} visible={true} onCancel={() => { }} />);
        expect(wrapper).toMatchSnapshot();
    });
});