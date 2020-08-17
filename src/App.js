import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyled } from './style.js';
import { IconStyled } from './static/iconfont/iconfont';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './common/header';
import Footer from './common/Footer';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <IconStyled />
      <BrowserRouter>
        <Switch>
          <Route path='/login' exact component={Login}></Route>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
            <Footer />
          </div>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
