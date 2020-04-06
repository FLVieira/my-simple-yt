import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="logo"><h1>MySimpleYt</h1></div>
        <SearchBar />
        <VideoList />
        <VideoPlayer />
      </div>
    </Provider>
  );
}
