import React, { Component }  from 'react';
// import logo from './logo.svg';
import './App.css';
// import Posts  from './components/post';
import Postform from './components/postform';
import {Provider} from 'react-redux';


import store from './store';
// const store=createStore(()=>[],{},applyMiddleware());

class App extends Component {
  
  render() {
  return (
    
    <Provider store={store} >
    <div className="App">
    <h1>Get data</h1>
      <Postform />
      {/* <Posts /> */}
    </div>
    </Provider>
  );
  }
}

export default App;
