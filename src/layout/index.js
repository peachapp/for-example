import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Layout as LayoutAnt } from 'antd';
import { requestFull } from 'utils/fullScreen';
import Sidebar from './sidebar/index';
import Header from './header/index';
import './index.css';

const { Content } = LayoutAnt;

const Layout = (props) => {
  const contentRef = useRef(null);
  const isFullScreen = useSelector(state => state.isFullScreen);

  useEffect(() => {
    if (isFullScreen) {
      requestFull(contentRef.current);
    };
  }, [isFullScreen])

  return <LayoutAnt className="layout-container">
    <Header />
    <LayoutAnt>
      <Sidebar />
      <Content
        style={{
          minHeight: 280,
        }}
      >
        <div className="layout-content" ref={contentRef}>
          {props.children}
        </div>
      </Content>
    </LayoutAnt>
  </LayoutAnt>
};

export default React.memo(Layout);
