import React , { Component } from 'react';
import NavBox from '../components/NavBox'
import { Layout } from 'antd';

const { Header } = Layout;

export default class HeaderLayout extends Component {
  render() {
    return(
      <Header>
        <NavBox></NavBox>
      </Header>
    )
  }


}