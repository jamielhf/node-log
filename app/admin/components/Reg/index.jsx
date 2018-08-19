import { Form, Input,Row, Col, Button, } from 'antd';
import React, {Component} from 'react';
import {Link} from 'dva/router';

const FormItem = Form.Item;

class Register extends Component {
  constructor() {
    super();
    this.state = {
      confirmDirty: false,
      formLayout: 'horizontal',
    };
  }
 

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };
  
    const { formLayout } = this.state;
    return (
      <Row>
         <Col span={12} offset={6}>
      <Form  layout={formLayout} onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="邮箱"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '请输入正确邮箱',
            }, {
              required: true, message: '请填写邮箱',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="密码"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              昵称
            </span>
          )}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
     
        <FormItem>
        <Row >
          <Col span={4} offset={4}>
            <Button type="primary" htmlType="submit">注册</Button>
          </Col>
          
          <Col span={4} offset={2}>
            <Link to="./login">
              <Button type="primary">
              返回登陆
              </Button>
            </Link>
          </Col>
        </Row>

        </FormItem>
      </Form>
      </Col>
      </Row>
    );
  }
}


export default Form.create()(Register);
