import { useMemo } from 'react';
import { StyleSheet, Text, type TextProps } from 'react-native';
import type { IUseParseHtmlTags } from '../../types';
import { useParseHtmlTags } from '../../hooks';

export type IHeaderProps = {
  data: {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    text: string;
  };
  style?: (level: 1 | 2 | 3 | 4 | 5 | 6) => TextProps['style'];
  otherStyles?: (level: 1 | 2 | 3 | 4 | 5 | 6) => IUseParseHtmlTags['styles'];
  textProps?: Omit<TextProps, 'style' | 'children'>;
};

const Header = ({ data, style, otherStyles, textProps }: IHeaderProps) => {
  const headingStyleByLevel = useMemo(
    () => styles[`h${data.level}`],
    [data.level]
  );

  const { parseHtmlTag, defaultTagList } = useParseHtmlTags({
    styles: {
      ...otherStyles?.(data.level),
      textStyle: style?.(data.level),
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
      accessibilityRole="header"
      allowFontScaling={true}
      {...textProps}
      style={[styles.header, headingStyleByLevel, style?.(data.level)]}
    >
      {parsedText}
    </Text>
  );
};

export const styles = StyleSheet.create({
  header: {
    marginVertical: 8,
    color: '#181819',
  },
  h1: {
    fontWeight: '700',
    fontSize: 28,
  },
  h2: {
    fontWeight: '700',
    fontSize: 24,
  },
  h3: {
    fontWeight: '600',
    fontSize: 20,
  },
  h4: {
    fontWeight: '600',
    fontSize: 18,
  },
  h5: {
    fontWeight: '600',
    fontSize: 16,
  },
  h6: {
    fontWeight: '500',
    fontSize: 16,
  },
});

export default Header;
