import React from 'react';
import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const MyComponent = () => {
  return (
    <View>
      <Svg height="100" width="100">
        <Circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="2"
          fill="red"
        />
      </Svg>
    </View>
  );
};

const LINKING_ERROR =
  `The package 'react-native-test-native-view-library' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type TestNativeViewLibraryProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'TestNativeViewLibraryView';

export const TestNativeViewLibraryView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<TestNativeViewLibraryProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

export function TestTextView() {
  return (
    <View style={styles.sectionContainer}>
      <MyComponent />
      {/* <SvgXml xml={xml} width="100%" height="100%" /> */}
      <Text style={[styles.sectionTitle]}>{'title'}</Text>
      <Text style={[styles.sectionDescription]}>{'children'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
