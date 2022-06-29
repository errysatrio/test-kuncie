import { Card } from 'antd';
import { IServerError } from '../../@types/APIResponse';

interface ErrorCardProps {
  error: IServerError;
}
const ErrorCard = (props: ErrorCardProps): React.ReactElement => {
  return (
        <Card className='error-card'>
            <h4>
                {props.error.code}
            </h4>
            <h4>
                oops... something went wrong: {props.error.message}
            </h4>
        </Card>
  );
};

export default ErrorCard;