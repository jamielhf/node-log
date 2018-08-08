import React , { Component } from 'react';
import styles from './index.scss';
import { Row, Col } from 'antd';


export default class NavBox extends Component {
  render() {
    return(
    <Row className={styles.navbox}>
      <Col span={12} offset={12}>
      <Row >
      <Col span={4} offset={12}>登陆</Col>
      <Col span={4} >注册</Col>
      </Row>
      </Col>
   </Row>
    )
  }


}