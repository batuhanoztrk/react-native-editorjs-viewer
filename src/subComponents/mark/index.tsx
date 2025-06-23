import { StyleSheet, Text, type TextProps } from 'react-native';
import type { ReactNode } from 'react';

export type IMarkProps = {
  children?: ReactNode;
  style?: TextProps['style'];
} & Omit<TextProps, 'style' | 'children'>;

const Mark = ({ children, style, ...textProps }: IMarkProps) => {
  return (
    <Text allowFontScaling={true} {...textProps} style={[styles.mark, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  mark: {
    backgroundColor: '#FFFBCB',
  },
});

export default Mark;
