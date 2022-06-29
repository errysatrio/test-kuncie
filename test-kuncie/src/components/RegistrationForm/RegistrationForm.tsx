import { Button, Form, Input, Radio } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ICreateRegisterUserResponse, IServerError } from '../../@types/APIResponse';
import { createRegisteredUser } from '../../services/Class';
import RegistrationStatusModal from './RegistrationStatusModal/RegistrationStatusModal';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const RegistrationForm: React.FC = () => {
    const [form] = Form.useForm();
    const [result, setResult] = useState<ICreateRegisterUserResponse | IServerError | null>(null);
    const [formLayout, setFormLayout] = useState<LayoutType>('vertical');
    const handleCancel = () => {
        setResult(null);
    };
    const { query } = useRouter();

    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

    const onFinish = async (values: any) => {
        if (query.id) {
            values = { ...values, classId: +query.id };
            const result = await createRegisteredUser(values);
            setResult(result);
        }
    };


    const formItemLayout =
        formLayout === 'vertical'
            ? {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            }
            : null;

    const buttonItemLayout =
        formLayout === 'vertical'
            ? {
                wrapperCol: { span: 14, offset: 4 },
            }
            : null;

    return (
        <div className='registration-form'>
            <RegistrationStatusModal onCancel={handleCancel} visible={result !== null} data={result} />
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                initialValues={{ layout: formLayout }}
                onValuesChange={onFormLayoutChange}
                onFinish={onFinish}
            >
                <Form.Item 
                label="FullName"
                name='attendeeFullName'
                rules={[
                    {
                        required: true,
                        message: 'Please input your Full Name!',
                    },
                ]}
                id='form-input-name'
                >
                    <Input placeholder="ex: John Doe" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name='attendeeEmail'
                    id='form-input-email'
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input placeholder="ex: john.doe@gmail.com" />
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                    <Button id='submit-button' className='submit-button' type="primary" htmlType='submit'>Submit</Button>
                </Form.Item>
            </Form >
        </div>
    );
};

export default RegistrationForm;
