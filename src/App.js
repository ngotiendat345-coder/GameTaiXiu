import React from 'react';
import LayoutGameTaiXiu from './container/LayoutGameTaiXiu';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';

function App() {
  const store = createStore(reducer);

  return (
    <div className="App">
      <Provider store={store}>
      <LayoutGameTaiXiu/>
      </Provider>
    </div>
  );
}

export default App;
