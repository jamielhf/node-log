import React , { Component } from 'react';
import styles from './index.scss';
import { Row, Col } from 'antd';
import {Link } from 'dva/router';

export default class NavBox extends Component {
  render() {
    return(
    <Row className={styles.navbox}>
      <Col span={12} offset={12}>
      <Row >
      <Col span={4} offset={12}><Link to="/user/login">登陆</Link></Col>
      <Col span={4} >
      <Link to="/user/reg">注册</Link>
      </Col>
      </Row>
      </Col>
   </Row>
    )
  }


}