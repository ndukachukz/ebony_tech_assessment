import {Dimensions, PixelRatio, StyleSheet} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const SCALE = 375;

const scaleFontSize = (fontSize: number) => {
  const ratio = fontSize / SCALE;
  const newSize = Math.round(ratio * SCREEN_WIDTH);
  return newSize;
};

export const globalStyles = StyleSheet.create({
  body_text: {
    fontSize: scaleFontSize(14),
  },
  header_text: {
    fontSize: scaleFontSize(24),
  },
  button_text: {
    fontSize: scaleFontSize(20),
  },
});
