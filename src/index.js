import {inject, observer} from 'mobx-react';
import React from 'react';
import RootNavigation from './navigations';

const App = () => {
  return <RootNavigation />;
};

export default inject('RootStore')(observer(App));
