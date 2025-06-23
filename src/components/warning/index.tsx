import { View, Text, StyleSheet } from 'react-native';
import type { ViewProps, TextProps } from 'react-native';
import { useParseHtmlTags } from '../../hooks';
import { useMemo } from 'react';
import type { IUseParseHtmlTags } from '../../types';

export type IWarningProps = {
  data: {
    title: string;
    message: string;
  };
  containerStyle?: ViewProps['style'];
  titleTextStyle?: TextProps['style'];
  messageTextStyle?: TextProps['style'];
  otherStyles?: IUseParseHtmlTags['styles'];
  textProps?: Omit<TextProps, 'style' | 'children'>;
};

const Warning = ({
  data,
  containerStyle,
  titleTextStyle,
  messageTextStyle,
  otherStyles,
  textProps,
}: IWarningProps) => {
  const { defaultTagList, parseHtmlTag: parseTitleHtmlTag } = useParseHtmlTags({
    styles: {
      ...otherStyles,
      textStyle: titleTextStyle,
    },
    textProps,
  });

  const { parseHtmlTag: parseMessageHtmlTag } = useParseHtmlTags({
    styles: {
      ...otherStyles,
      textStyle: messageTextStyle,
    },
    textProps,
  });

  const parsedTitle = useMemo(
    () => (data?.title ? parseTitleHtmlTag(defaultTagList, data.title) : null),
    [data.title, defaultTagList, parseTitleHtmlTag]
  );

  const parsedMessage = useMemo(
    () =>
      data?.message ? parseMessageHtmlTag(defaultTagList, data.message) : null,
    [data.message, defaultTagList, parseMessageHtmlTag]
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <Text {...textProps} style={[styles.title, titleTextStyle]}>{parsedTitle}</Text>
      <Text {...textProps} style={[styles.message, messageTextStyle]}>{parsedMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF3CD',
    borderColor: '#FFEEBA',
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: '#856404',
  },
});

export default Warning;
