import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import NavBox from '../components/NavBox'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


function IndexPage() {
  return (
    <div>
      <Layout>
      <Header>
        <NavBox></NavBox>
      </Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
