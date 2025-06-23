import { StyleSheet, Text, type TextProps } from 'react-native';
import type { ReactNode } from 'react';

export type ICodeProps = {
  children?: ReactNode;
  style?: TextProps['style'];
} & Omit<TextProps, 'style' | 'children'>;

const Code = ({ children, style, ...textProps }: ICodeProps) => {
  return (
    <Text allowFontScaling={true} {...textProps} style={[styles.code, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  code: {
    color: '#C44437',
    backgroundColor: '#f2f2f2',
  },
});

export default Code;
