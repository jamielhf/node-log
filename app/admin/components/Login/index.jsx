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
  loginForGithub = () => {

  }

   render() {
    const { getFieldDecorator } = this.props.form;
     return (
      <Row className={style.login}>
          <Col span={8} offset={8}>
      <Form className={style.form} onSubmit={this.handleSubmit} >
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <Row >
          <Col >
          <a className={style.loginFormButton}>
            登陆
          </a>
          <a onClick={this.loginForGithub}>
             github登陆
          </a>
            <Link to="./reg">
              去注册
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


