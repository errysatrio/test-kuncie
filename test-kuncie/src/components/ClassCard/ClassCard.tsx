import { Card } from 'antd';

interface ICardProps {
  id: number;
  name: string;
  onTapClassCard: (id: number) => void
}

const ClassCard = (props: ICardProps) => {
  return (
        <Card
            onClick={() => props.onTapClassCard(props.id)}>
            <h3>
                {props.name ?? 'test'}
            </h3>
        </Card>
  );
};

export default ClassCard;