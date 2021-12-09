import { useEffect } from 'react';
import RoutersConfig from 'routers/index';
import { useDispatch } from 'react-redux';
import { isFullScreen_TOGGLE_CLOUSE } from 'store/action/types';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const onFullscreenchange = (e) => {
    if (document.fullscreenElement) {
      // 全屏
    } else {
      dispatch({ type: isFullScreen_TOGGLE_CLOUSE });
    };
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', onFullscreenchange);
    // 组件销毁
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenchange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <RoutersConfig />
    </div>
  );
}

export default App;
