import { Form, Input,Row, Col, Button,Icon } from 'antd';
import React, {Component} from 'react';
import {Link} from 'dva/router';
import style from './index.scss';


const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

   render() {
    const { getFieldDecorator } = this.props.form;
     return (
      <Row>
          <Col span={8} offset={8}>
      <Form onSubmit={this.handleSubmit} className={style.loginForm}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        {/* <a className="login-form-forgot" href="">Forgot password</a> */}
        <Row >
          <Col span={4} offset={4}>
          <Button type="primary" htmlType="submit" className={style.loginFormButton}>
            登陆
          </Button>
          </Col>
          
          <Col span={4} offset={2}>
            <Link to="./reg">
              <Button type="primary">
              去注册
              </Button>
            </Link>
          </Col>
        </Row>
        </Form>
        </Col>
         </Row>
     )
  }
};



export default Form.create()(Login);


