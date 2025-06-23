import { StyleSheet, Text, type TextProps } from 'react-native';
import type { ReactNode } from 'react';

export type IItalicProps = {
  children?: ReactNode;
  style?: TextProps['style'];
} & Omit<TextProps, 'style' | 'children'>;

const Italic = ({ children, style, ...textProps }: IItalicProps) => {
  return (
    <Text allowFontScaling={true} {...textProps} style={[styles.italic, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  italic: {
    fontStyle: 'italic',
  },
});

export default Italic;
