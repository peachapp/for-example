import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout as LayoutAnt } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FullscreenOutlined,
} from '@ant-design/icons';
import { collapsed__TOGGLE_CLOUSE, collapsed__TOGGLE_OPEN, isFullScreen_TOGGLE_OPEN } from 'store/action/types';
import { isFullScreenAvailable } from 'utils/fullScreen';
import './index.css';

const { Header: HeaderAnt } = LayoutAnt;

const Header = () => {
  const collapsed = useSelector(state => state.collapsed);

  const dispatch = useDispatch();

  const onCollapsedChange = () => {
    dispatch({ type: collapsed ? collapsed__TOGGLE_OPEN : collapsed__TOGGLE_CLOUSE });
  }

  const onIsFullScreenChange = () => {
    dispatch({ type: isFullScreen_TOGGLE_OPEN });
  };

  return <HeaderAnt className="header-container" style={{ padding: 0 }}>
    <div className="header-control" onClick={onCollapsedChange}>
      {
        collapsed ?
          <MenuUnfoldOutlined className="header-control-icon" /> :
          <MenuFoldOutlined className="header-control-icon" />
      }
    </div>
    {
      isFullScreenAvailable ?
        <div className="header-screen" onClick={onIsFullScreenChange}>
          <FullscreenOutlined className="header-screen-icon" />
        </div>
        : null
    }
  </HeaderAnt>
};

export default React.memo(Header);
