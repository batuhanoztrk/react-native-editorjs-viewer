import {
  StyleSheet,
  Text,
  type TextProps,
  View,
  type ViewProps,
} from 'react-native';
import { decode } from 'html-entities';

export type IDelimiterProps = {
  data: Record<string, never>;
  containerStyle?: ViewProps['style'];
  textStyle?: TextProps['style'];
  textProps?: Omit<TextProps, 'style' | 'children'>;
};

const Delimiter = ({ containerStyle, textStyle, textProps }: IDelimiterProps) => {
  return (
    <View aria-hidden style={[styles.container, containerStyle]}>
      <Text {...textProps} style={[styles.delimiter, textStyle]}>{decode('&ast;')}</Text>
      <Text {...textProps} style={[styles.delimiter, textStyle]}>{decode('&ast;')}</Text>
      <Text {...textProps} style={[styles.delimiter, textStyle]}>{decode('&ast;')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 8,
    paddingVertical: 16,
  },
  delimiter: {
    marginHorizontal: 6,
    fontSize: 24,
    color: '#181819',
  },
});

export default Delimiter;
