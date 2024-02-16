import React from 'react';
import {
  SafeAreaView
} from 'react-native';

import HomeComponent from '../Views/Home/HomeComponent';
import { styles } from './AppStyle';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.wrapper}>
      <HomeComponent></HomeComponent>
    </SafeAreaView>
  );
}

export default App;
