import { StyleSheet, Text, type TextProps } from 'react-native';
import type { ReactNode } from 'react';

export type IBoldProps = {
  children?: ReactNode;
  style?: TextProps['style'];
} & Omit<TextProps, 'style' | 'children'>;

const Bold = ({ children, style, ...textProps }: IBoldProps) => {
  return (
    <Text allowFontScaling={true} {...textProps} style={[styles.bold, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: '700',
  },
});

export default Bold;
