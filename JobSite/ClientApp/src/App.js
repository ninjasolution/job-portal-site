import React, {  } from 'react';
import Markup from './markup/Markup';
import './css/plugins.css';
import './css/style.css';
import './css/templete.css';
import './css/skin/skin-1.css';
import './plugins/slick/slick.min.css';
import './plugins/slick/slick-theme.min.css';
import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <Provider store = {store} className="App">
      <BrowserRouter>
        <Markup />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
