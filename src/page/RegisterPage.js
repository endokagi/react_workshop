import React from 'react'
import styled from 'styled-components'
import bg from '../assets/regist.jpg'
import {
    Form,
    Input,
    Button
} from 'antd';
import { Link } from 'react-router-dom';

const StlyedWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    min-height: 100vh;
    background-image: url('${bg}');

    .form-card{
        border-radius: 8px;
        box-shadow: 0 0 6px 0 rgba(0,0,0,.15);
        padding: 20px 40px;
        max-width: 400px;
        width: 100%;
        background-color: white;

        @media(max-width: 425px) {
            padding: 20px;
        }
    }

    .title {
        text-align: center;
    }
`
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegisterPage = () => {

    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <StlyedWrapper>
            <div className='form-card'>
                <h1 className='title'>Register</h1>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        label="E-mail"
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
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('The two passwords that you entered do not match!');
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="fristname"
                        label="Fristname"
                        rules={[{ required: true, message: 'Please input your fristname!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="lastname"
                        label="Lastname"
                        rules={[{ required: true, message: 'Please input your lastname!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Link to="/login">
                            Login
                        </Link>
                    </Form.Item>
                </Form>
            </div>
        </StlyedWrapper>
    )
}

export default RegisterPage
