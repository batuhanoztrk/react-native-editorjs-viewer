import { StyleSheet, Text, type TextProps } from 'react-native';
import type { ReactNode } from 'react';

export type IUnderlineProps = {
  children?: ReactNode;
  style?: TextProps['style'];
} & Omit<TextProps, 'style' | 'children'>;

const Underline = ({ children, style, ...textProps }: IUnderlineProps) => {
  return (
    <Text allowFontScaling={true} {...textProps} style={[styles.underline, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  underline: {
    textDecorationLine: 'underline',
  },
});

export default Underline;
