import { Modal } from 'antd';
import { ICreateRegisterUserResponse, IServerError } from '../../../@types/APIResponse';
import { ICreateRegisteredUserSuccessResponse } from '../../../@types/ICreateRegisterUser';
interface IRegistrationStatusModalProps {
    visible: boolean;
    onCancel: () => void;
    data: IServerError | ICreateRegisterUserResponse | null;
}
const RegistrationStatusModal = (props: IRegistrationStatusModalProps) => {

    const modalContent = (data: IServerError | ICreateRegisterUserResponse | null) => {
        if (data instanceof Object && 'status' in data) {
            return (
                <>
                    <h2>{(data as IServerError).code}</h2>
                    <p>{(data as IServerError).message}</p>
                </>
            );
        } else if (data instanceof Object && !('message' in data)) {
            return (
                <>
                    <p>{(data as ICreateRegisteredUserSuccessResponse).message}</p>
                </>
            );
        }
    };
    return (
        <Modal className='registration-status-modal' title="Basic Modal" visible={props.visible} onCancel={props.onCancel}>
            {modalContent(props.data)}
        </Modal>
    );
};

export default RegistrationStatusModal;