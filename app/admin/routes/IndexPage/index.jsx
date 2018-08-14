import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import HeaderLayout from '../../layouts/HeaderLayout';
import FooterLayout from '../../components/FooterLayout';

import { Layout } from 'antd';



function IndexPage() {
  return (
    <div>
      <Layout>
      <HeaderLayout/>
      
      <FooterLayout></FooterLayout>
    </Layout>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
