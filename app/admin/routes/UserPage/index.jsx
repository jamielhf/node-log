import React from 'react';
import { connect } from 'dva';
import { Router, Route, Switch } from 'dva/router';
import styles from './index.css';
import FooterLayout from '../../components/FooterLayout';


import { Layout } from 'antd';
import Login from '../../components/Login';
import Reg from '../../components/Reg';

const UserPage = (props) => {
  console.log(props.a);
  return (
      <Layout>
      user
      <Switch>
        <Route path="/user/login" component={Login} />
        <Route path="/user/reg" component={Reg} />
      </Switch>
      111
      <FooterLayout></FooterLayout>
    </Layout>
  );
}

UserPage.propTypes = {
};

export default connect()(UserPage);
