import React, { Component } from 'react';
import ZirconDecorator from '@enact/zircon/ZirconDecorator';

import MainView from './MainView';

class App extends Component {
  render() {
    return (
      <MainView />
    );
  }
}

export default ZirconDecorator(App);
