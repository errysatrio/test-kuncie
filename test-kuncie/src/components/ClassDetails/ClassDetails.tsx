import { Card } from 'antd';
import { IClassDetailsData } from '../../@types/IClassDetails';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import MentorCard from './MentorCard/MentorCard';

export interface IClassDetailsPageProps {
  data: IClassDetailsData;
}

const ClassDetail = (props: IClassDetailsPageProps) => {
  return (
    <Card className='class-details'>
      <h3>
        {props.data.name ?? 'test'}
      </h3>
      <div>
        {
          props?.data?.mentors?.map(
            (el, id) => (<MentorCard mentors={el} key={id} />),
          )
        }
      </div>
      <h4>
        {props.data.description ?? 'test'}
      </h4>
      <RegistrationForm />
    </Card>
  );
};

export default ClassDetail;