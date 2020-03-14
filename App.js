import Main from './src';
import React from 'react';
import {RootStore} from './src/models/Store';
import {Provider} from 'mobx-react';

const App = () => (
  <Provider RootStore={RootStore}>
    <Main />
  </Provider>
);

export default App;
