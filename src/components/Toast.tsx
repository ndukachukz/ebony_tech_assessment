import {Toast, useToastState} from '@tamagui/toast';
import {COLORS} from '../constants';

export const AppToast = () => {
  const toast = useToastState();
  // don't show any toast if no toast is present or it's handled natively

  if (!toast || toast.isHandledNatively) {
    return null;
  }
  return (
    <Toast
      key={toast.id}
      duration={toast.duration}
      enterStyle={{opacity: 0, scale: 0.5, y: -25}}
      exitStyle={{opacity: 0, scale: 1, y: -20}}
      y={0}
      opacity={1}
      scale={1}
      animation="100ms"
      viewportName={toast.viewportName}>
      <Toast.Title>{toast.title}</Toast.Title>

      <Toast.Description>{toast.message}</Toast.Description>
    </Toast>
  );
};
