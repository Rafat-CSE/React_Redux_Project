import logo from './logo.svg';
// import './App.css';
import './bootstrap.css';
import {createStore} from 'redux';
import Home from "./components/pageLayouts/Home";
import {Provider} from "react-redux";
import store from "./store";
import TestRedux from "./components/TestRedux";
import Controller from "./components/Controller";


function App() {

  return (

      <Provider store={store}>
        <div className="m-3 p-1">
            {/*<Home />*/}
            <h1>This is Redux for test</h1>
            <TestRedux />
            <Controller />
        </div>
      </Provider>
  );
}

export default App;
