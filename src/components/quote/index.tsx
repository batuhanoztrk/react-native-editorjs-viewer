import { useParseHtmlTags } from '../../hooks';
import { useMemo } from 'react';
import {
  StyleSheet,
  Text,
  type TextProps,
  View,
  type ViewProps,
} from 'react-native';
import type { IUseParseHtmlTags } from '../../types';

export type IQuoteProps = {
  data: {
    text: string;
    caption?: string;
    alignment?: 'left' | 'center';
  };
  containerStyle?: ViewProps['style'];
  textStyle?: TextProps['style'];
  captionTextStyle?: TextProps['style'];
  otherStyles?: IUseParseHtmlTags['styles'];
  textProps?: Omit<TextProps, 'style' | 'children'>;
};

const Quote = ({
  data,
  containerStyle,
  textStyle,
  captionTextStyle,
  otherStyles,
  textProps,
}: IQuoteProps) => {
  const { parseHtmlTag, defaultTagList } = useParseHtmlTags({
    styles: {
      ...otherStyles,
      textStyle,
    },
    textProps,
  });

  const parsedText = useMemo(
    () => parseHtmlTag(defaultTagList, data.text),
    [data.text, parseHtmlTag, defaultTagList]
  );

  return (
    <View accessible style={[styles.container, containerStyle]}>
      <Text
        accessibilityRole="text"
        allowFontScaling={true}
        {...textProps}
        style={[
          styles.quoteText,
          {
            textAlign: data.alignment ?? 'left',
          },
          textStyle,
        ]}
      >
        {parsedText}
      </Text>

      {data.caption && (
        <Text
          {...textProps}
          style={[
            styles.caption,
            { textAlign: data.alignment ?? 'left' },
            captionTextStyle,
          ]}
        >
          -{data.caption}
        </Text>
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#292929',
    borderStyle: 'solid',
  },
  quoteText: {
    fontSize: 16,
    color: '#292929',
  },
  caption: {
    marginTop: 12,
    fontSize: 14,
    color: '#292929',
  },
});

export default Quote;
