import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './index.css';

const { Sider } = Layout;
const { Item } = Menu;

const menuData = [
  { key: '', title: '首页', path: '', icon: '' },
  { key: '', title: '首页', path: '', icon: '' },
  { key: '', title: '首页', path: '', icon: '' },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return <div className="layout-sidebar">
    <div className="sidebar-control" onClick={() => { setCollapsed(!collapsed) }}>
      {collapsed ? <MenuUnfoldOutlined className="sidebar-control-icon" /> : <MenuFoldOutlined className="sidebar-control-icon" />}
    </div>
    <Sider collapsedWidth={64} trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Item key="1" icon={<UserOutlined />}>
          nav 1
        </Item>
        <Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Item>
        <Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Item>
      </Menu>
    </Sider>
  </div>
};

export default React.memo(Sidebar);
