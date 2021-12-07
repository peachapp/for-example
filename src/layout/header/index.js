import React from 'react';
import { Layout as LayoutAnt } from 'antd';
import './index.css';

const { Header: HeaderAnt } = LayoutAnt;

const Header = () => {
  return <HeaderAnt className="site-layout-background" style={{ padding: 0 }}>
    biaoti
  </HeaderAnt>
};

export default React.memo(Header);
