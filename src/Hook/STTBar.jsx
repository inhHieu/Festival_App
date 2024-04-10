import * as React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

function STTBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar  {...props} /> : null;
}
export default STTBar;