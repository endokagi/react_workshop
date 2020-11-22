import React from 'react'
import styled from 'styled-components'
import bg from '../assets/login.jpg'
import { Form, Input, Button, Checkbox } from 'antd';
import { Link, useHistory } from 'react-router-dom';

const StlyedWrapper = styled.div`
    background-image: url('${bg}');
    min-height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;

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
    .login-form-forgot {
        float: right;
    }
    .ant-col-rtl .login-form-forgot {
        float: left;
    }
    .login-form-button {
        width: 100%;
    }

`

const LoginPage = () => {

    const history = useHistory();

    const onFinish = values => {
        console.log('Received values of form: ', values);

        history.push('/');
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <StlyedWrapper>
            <div className="form-card">
                <h1 className="title">Welcome!!</h1>
                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Link to="/HomePage">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                        </Button>
                        </Link>
        Or <Link to="/regist">register now!</Link>
                    </Form.Item>
                </Form>
            </div>
        </StlyedWrapper>
    )
}

export default LoginPage
