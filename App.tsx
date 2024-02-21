import React from 'react';
import {
  SafeAreaView
} from 'react-native';

import { styles } from './AppStyle';
import AppNavigator from './src/Navigator/Navigator';
import HomeComponent from './src/Views/Home/HomeComponent';

function App(): React.JSX.Element {
  return (
      <AppNavigator></AppNavigator>
  );
}

export default App;
