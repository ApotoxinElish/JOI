import './index.scss'
import { Card, Form, Input, Button } from 'antd'
// import logo from '@/assets/logo.png'

const Login = () => {
  return (
    <div className="login">
      <Card className="login-container">
        {/* <img className="login-logo" src={logo} alt="" /> */}
        {/* Entry form */}
        <Form>
          <Form.Item>
            <Input size="large" placeholder="Please enter your phone number" />
          </Form.Item>
          <Form.Item>
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
