import React, { Component } from 'react';
import {
  ConnectedSearchbar as Searchbar,
  ConnectedFeeds as Feeds,
  ConnectedMessageBox as MessageBox,
} from './components';
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Flickr Feeds</h1>
        <div className="search-bar__container">
          <Searchbar />
        </div>
        <div className="message-box__container">
          <MessageBox />
        </div>
        <div className="feeds__container">
          <Feeds />
        </div>
      </div>
    );
  }
}

export default App;
