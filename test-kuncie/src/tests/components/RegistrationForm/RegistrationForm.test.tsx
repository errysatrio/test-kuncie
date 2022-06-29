import React from 'react';
import { configure, render, shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import { mockSuccessGetOneClassDetails } from '../../mockData';
import RegistrationForm from '../../../components/RegistrationForm/RegistrationForm';

configure({ adapter: new Adapter() });

describe('Class Details', () => {
    it('should render Class Details with text received from props', () => {
        const wrapper = render(<RegistrationForm />);
        wrapper.find('#attendeeFullName').prop('attendeeFullName', null)
        expect(wrapper.find('.ant-form-item-explain-error')).toEqual(true);
        //onChange({
        //     target: {
        //         value
        //     }
        // })
    });
    // it('should call function on finish', () => {
    //     const wrapper = render(<RegistrationForm />);
    //     const mockedHandleClickSubmit = jest.fn();
    //     wrapper.find('#submit-button')
    //     const button = wrapper.find('.submit-button');
    //         // if(clickAction.exists()) {
    //         expect(mockedHandleClickSubmit).toHaveBeenCalledTimes(1);
    //     }
    // });
    it('renders correctly', () => {
        const wrapper = shallow(<RegistrationForm />);
        expect(wrapper).toMatchSnapshot();
    });
});