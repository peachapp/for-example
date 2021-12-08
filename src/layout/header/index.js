import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout as LayoutAnt } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { TOGGLE_CLOUSE, TOGGLE_OPEN } from 'store/action/types';
import './index.css';

const { Header: HeaderAnt } = LayoutAnt;

const Header = () => {
  const collapsed = useSelector(state => state.collapsed);

  const dispatch = useDispatch();

  const onCollapsedChange = () => {
    dispatch({ type: collapsed ? TOGGLE_OPEN : TOGGLE_CLOUSE });
  }

  return <HeaderAnt className="header-container" style={{ padding: 0 }}>
    <div className="header-control" onClick={onCollapsedChange}>
      {collapsed ? <MenuUnfoldOutlined className="header-control-icon" /> : <MenuFoldOutlined className="header-control-icon" />}
    </div>
  </HeaderAnt>
};

export default React.memo(Header);
