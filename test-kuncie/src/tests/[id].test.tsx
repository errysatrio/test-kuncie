import * as React from 'react';
import { configure, render, shallow } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18'
import ClassDetailsPage from '../pages/[id]';
import axios from 'axios';
import * as nextRouter from 'next/router';
import { mockSuccessGetOneClassDetails } from './mockData';
import CoreLayout from '../components/CoreLayout/CoreLayout';

jest.mock("axios")
jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/1",
            pathname: "/1",
            query: "",
            asPath: "",
        };
    },
}));
const mockedAxios = axios as jest.Mocked<typeof axios>;

configure({ adapter: new Adapter() });

describe('renders', () => {
    it('renders page correctly', () => {
        const wrapper = shallow(<CoreLayout content={< ClassDetailsPage />} />);
        expect(wrapper).toMatchSnapshot();
    });
})

describe('services', () => {
    it('should fetch data for class details', () => {
        const page = render(<ClassDetailsPage />)
        mockedAxios.get.mockResolvedValue(mockSuccessGetOneClassDetails)
        expect(mockedAxios).toHaveBeenCalled();
    })

    it('should return instance of IClassDetailsData', () => {

    })
});


