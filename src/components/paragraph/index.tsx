import { useParseHtmlTags } from '../../hooks';
import { useMemo } from 'react';
import { StyleSheet, Text, type TextProps } from 'react-native';
import type { IUseParseHtmlTags } from '../../types';

export type IParagraphProps = {
  data: {
    text: string;
  };
  style?: TextProps['style'];
  otherStyles?: IUseParseHtmlTags['styles'];
  textProps?: Omit<TextProps, 'style' | 'children'>;
};

const Paragraph = ({ data, style, otherStyles, textProps }: IParagraphProps) => {
  const { parseHtmlTag, defaultTagList } = useParseHtmlTags({
    styles: {
      ...otherStyles,
      textStyle: style,
    },
    textProps,
  });

  const parsedText = useMemo(
    () => parseHtmlTag(defaultTagList, data.text),
    [data.text, defaultTagList, parseHtmlTag]
  );

  return (
    <Text
      accessible
      accessibilityRole="text"
      allowFontScaling={true}
      {...textProps}
      style={[styles.paragraph, style]}
    >
      {parsedText}
    </Text>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 16,
    marginVertical: 8,
    color: '#292929',
  },
});

export default Paragraph;
