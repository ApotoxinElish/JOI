import './index.scss'
import { Card, Form, Input, Button } from 'antd'
// import logo from '@/assets/logo.png'

const Login = () => {
  const onFinish = (values) => {
    console.log(values)
  }
  return (
    <div className="login">
      <Card className="login-container">
        {/* <img className="login-logo" src={logo} alt="" /> */}
        {/* Entry form */}
        <Form onFinish={onFinish} validateTrigger="onBlur">
          <Form.Item
            name="username"
            // If there are multiple check logics, check the first one first, and then check the second one after the first one passes
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: 'Please enter the correct phone number format',
              },
            ]}
          >
            <Input size="large" placeholder="Please enter your phone number" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Please enter the verification code"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
