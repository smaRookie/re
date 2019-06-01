import React from 'react';
import Header from './common/header/index'
import store from './store'
// 提供Provider
import { Provider } from 'react-redux'
function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Header />
        </Provider>
    </div>
  );
}

export default App;
