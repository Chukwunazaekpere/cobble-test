import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ProtectedRoutes from './routes/ProtectedRoutes';
import { useDispatch } from 'react-redux';
import { showProcessingGifAction, toggleConfirmAction, toggleModalAction } from './redux/actions/appActions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleModalAction(false));
    dispatch(toggleConfirmAction(false));
    dispatch(showProcessingGifAction({
      showGif: false,
      gifStatus: "loading",
      gifMessage: ""
  }));
  }, [])
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <ProtectedRoutes />
      {/* </header> */}
    </div>
  );
}

export default App;
