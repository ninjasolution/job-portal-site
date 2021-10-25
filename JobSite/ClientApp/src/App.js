import React from 'react';
import Markup from './markup/Markup';
import './css/plugins.css';
import './css/style.css';
import './css/templete.css';
import './css/skin/skin-1.css';
import './plugins/slick/slick.min.css';
import './plugins/slick/slick-theme.min.css';
import {  } from 'react-router-redux'
import { Provider } from 'react-redux'
import { configStore } from './reducers'
const store = configStore(undefined);

function App() {
  return (
    <Provider store = {store} className="App">
      <Markup />
    </Provider>
  );
}

export default App;
