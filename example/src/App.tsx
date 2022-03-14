import * as React from 'react';

import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { AutoHeightImage } from 'react-native-auto-layout-height-image';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Top Text</Text>
      <AutoHeightImage
        style={styles.image}
        source={{ uri: 'https://placehold.jp/720x480.png' }}
      />
      <Text>Bottom Text</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  image: {
    width: '100%',
  },
});
