import {
  StyleSheet,
  Text,
  type TextProps,
  View,
  type ViewProps,
} from 'react-native';

export type IFallbackProps = {
  blockType: string;
  containerStyle?: ViewProps['style'];
  textStyle?: TextProps['style'];
  textProps?: Omit<TextProps, 'style' | 'children'>;
};

const Fallback = ({ blockType, containerStyle, textStyle, textProps }: IFallbackProps) => {
  return (
    <View accessibilityRole="alert" style={[styles.container, containerStyle]}>
      <Text accessible {...textProps} style={[styles.alertText, textStyle]}>
        Type &quot;{blockType}&quot; is yet not supported
      </Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    width: '100%',
    padding: 16,
    backgroundColor: '#F4EDED',
    borderColor: '#E88285',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
  },
  alertText: {
    fontSize: 16,
    color: '#E44045',
    textAlign: 'center',
  },
});

export default Fallback;
