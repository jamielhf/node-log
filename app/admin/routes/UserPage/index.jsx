import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import FooterLayout from '../../components/FooterLayout';

import { Layout } from 'antd';



function UserPage() {
  return (
    <div>
      <Layout>
      user
      <FooterLayout></FooterLayout>
    </Layout>
    </div>
  );
}

UserPage.propTypes = {
};

export default connect()(UserPage);
