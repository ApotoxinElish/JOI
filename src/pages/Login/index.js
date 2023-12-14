import './index.scss'
import { Card, Form, Input, Button, message } from 'antd'
// import logo from '@/assets/logo.png'
import { useDispatch } from 'react-redux'
import { fetchLogin } from '@/store/modules/user'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async (values) => {
    values.email = ''
    console.log(values)
    // Triggering the asynchronous action fetchLogin
    await dispatch(fetchLogin(values))
    console.log(localStorage.getItem('is_login'))
    if (localStorage.getItem('is_login') === 'true') {
      // 1. Go to Home page
      navigate('/chat')
      // 2. Give the user a hint
      message.success('Login successful')
    } else {
      message.error('Login fail')
    }
  }
  return (
    <div className="login">
      <Card className="login-container" title="登录">
        {/* <img className="login-logo" src={logo} alt="" /> */}
        {/* Entry form */}
        <Form onFinish={onFinish} validateTrigger="onBlur">
          <Form.Item
            name="phone"
            // If there are multiple check logics, check the first one first, and then check the second one after the first one passes
            rules={[
              {
                required: true,
                message: '请输入手机号！',
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '请输入正确的手机号！',
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
                message: '请输入密码！',
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
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
