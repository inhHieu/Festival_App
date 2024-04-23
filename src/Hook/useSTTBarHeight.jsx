import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useSTTBarHeight = () => {
  const insets = useSafeAreaInsets();
  return insets.top;
};

export default useSTTBarHeight;