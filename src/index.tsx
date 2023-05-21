import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

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
