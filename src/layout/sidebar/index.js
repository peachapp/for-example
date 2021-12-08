import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './index.css';

const { Sider } = Layout;
const { Item } = Menu;

const menuData = [
  { key: 'home', title: '首页', path: '/home', icon: <HomeOutlined /> },
  { key: 'about', title: '关于作者', path: '/about', icon: <UserOutlined /> },
  // { key: '404', title: '404', path: '', icon: '' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const collapsed = useSelector(state => state.collapsed);

  const currentPathKey = ((menuData || []).find(menuDataItem => menuDataItem.path === location.pathname) || {}).key || 'home';
  const [selectedKeys, setSelectedKeys] = useState([currentPathKey])

  const onSelectedKeysChange = ({ key }) => {
    navigate(`/${key}`);
    setSelectedKeys([key]);
  };

  return <Sider className="sidebar-container" width={144} collapsedWidth={64} trigger={null} collapsible collapsed={collapsed}>
    <Menu theme="dark" mode="inline" selectedKeys={selectedKeys} onClick={onSelectedKeysChange}>
      {
        (menuData || []).map(menuDataItem => {
          return <Item key={menuDataItem.key} icon={menuDataItem.icon}>
            {menuDataItem.title}
          </Item>
        })
      }
    </Menu>
  </Sider>
};

export default React.memo(Sidebar);
