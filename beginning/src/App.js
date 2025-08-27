import Login from './components/Login';
import Profile from './components/Profile';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import userReducer from "./features/User" 
import themeReducer from "./components/Theme"
import ChangeColor from "./components/ChangeColor"
import './App.css';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  }
})

function App() {
  return (
    <>
      <Provider store={store}>
        <Profile />
        <Login />
        <ChangeColor />
      </Provider>
    </>
  );
}

export default App;
