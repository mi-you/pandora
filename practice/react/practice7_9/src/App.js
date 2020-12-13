import React from 'react';
import { Provider} from 'react-redux'
import { BrowserRouter ,Route} from 'react-router-dom'
import store from './store'

import 'normalize.css'
import './statics/iconfont/iconfont.css'
import { GlobalStyled } from './style.js';

import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled></GlobalStyled>
      <Header />
      <BrowserRouter>
        {/* <Route path='/' exact render={() => <div>home</div>}></Route> */}
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail' exact component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
