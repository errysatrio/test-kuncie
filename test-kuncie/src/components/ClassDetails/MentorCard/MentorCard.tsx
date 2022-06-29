import Card from 'antd/lib/card/Card';
import { IMentorDetailsData } from '../../../@types/IClassDetails';

interface MentorCardProps {
  mentors: IMentorDetailsData;
  key: number;
}

const MentorCard = (props: MentorCardProps) => {
  return (
    <Card key={props.key} className="mentor-card">
      <h4>
        {props.mentors.name}
      </h4>
      <h4>
        {props.mentors.description}
      </h4>
    </Card>
  );
};

export default MentorCard;