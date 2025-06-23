import {
  type ImageProps,
  StyleSheet,
  Text,
  type TextProps,
  View,
  type ViewProps,
} from 'react-native';
import { AspectImage } from '../../subComponents';
import type { IUseParseHtmlTags } from '../../types';
import { useMemo } from 'react';
import { useParseHtmlTags } from '../../hooks';

export type IImageProps = {
  data: {
    caption: string;
    file: {
      url: string;
    };
  };
  containerStyle?: ViewProps['style'];
  imageStyle?: ImageProps['style'];
  textStyle?: TextProps['style'];
  otherStyles?: IUseParseHtmlTags['styles'];
  textProps?: Omit<TextProps, 'style' | 'children'>;
};

const Image = ({
  data,
  containerStyle,
  textStyle,
  imageStyle,
  otherStyles,
  textProps,
}: IImageProps) => {
  const { parseHtmlTag, defaultTagList } = useParseHtmlTags({
    styles: {
      ...otherStyles,
      textStyle: textStyle,
    },
    textProps,
  });

  const parsedText = useMemo(
    () => (data?.caption ? parseHtmlTag(defaultTagList, data.caption) : null),
    [data.caption, defaultTagList, parseHtmlTag]
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <AspectImage
        accessible
        accessibilityRole="image"
        accessibilityHint={`${data.caption} image`}
        uri={data.file.url}
        source={{ uri: data.file.url }}
        imageStyle={imageStyle}
      />

      {parsedText && (
        <Text aria-hidden {...textProps} style={[styles.caption, textStyle]}>
          {parsedText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
    alignItems: 'center',
  },
  caption: {
    width: '100%',
    marginTop: 4,
    fontSize: 12,
    color: '#292929',
    textAlign: 'center',
  },
});

export default Image;
