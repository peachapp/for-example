import React from 'react';
import { Layout as LayoutAnt } from 'antd';
import Sidebar from './sidebar/index';
import Header from './header/index';
import './index.css';

const { Content } = LayoutAnt;

const Layout = (props) => {
  return <LayoutAnt className="layout-container">
    <Header />
    <LayoutAnt className="site-layout">
      <Sidebar />
      <Content
        className="site-layout-background"
        style={{
          padding: 16,
          minHeight: 280,
        }}
      >
        {props.children}
      </Content>
    </LayoutAnt>
  </LayoutAnt>
};

export default React.memo(Layout);
