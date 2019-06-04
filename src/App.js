import React from 'react';
import Header from './common/header/index'
import store from './store'
// 提供Provider
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'

import Home from './pages/home'
import Detail from './pages/detail'
function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <div>
                <Header />
                <HashRouter>
                    <div>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/detail' exact component={Detail}></Route>
                    </div>
                </HashRouter>
            </div>
        </Provider>
    </div>
  );
}

export default App;
