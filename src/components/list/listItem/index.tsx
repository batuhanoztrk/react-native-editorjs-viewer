import {
  StyleSheet,
  Text,
  type TextProps,
  View,
  type ViewProps,
} from 'react-native';
import { useParseHtmlTags } from '../../../hooks';
import { useMemo } from 'react';
import type { IUseParseHtmlTags } from '../../../types';

export type IItemIListProps = {
  value: string;
  index: number;
  listStyle: 'ordered' | 'unordered';
  containerStyle?: ViewProps['style'];
  dotStyle?: ViewProps['style'];
  numberTextStyle?: TextProps['style'];
  textStyle?: TextProps['style'];
  otherStyles?: IUseParseHtmlTags['styles'];
  textProps?: Omit<TextProps, 'style' | 'children'>;
};

const ListItem = ({
  value,
  index,
  listStyle,
  dotStyle,
  textStyle,
  numberTextStyle,
  containerStyle,
  otherStyles,
  textProps,
}: IItemIListProps) => {
  const { parseHtmlTag, defaultTagList } = useParseHtmlTags({
    styles: otherStyles,
    textProps,
  });

  const parsedText = useMemo(
    () => parseHtmlTag(defaultTagList, value),
    [parseHtmlTag, defaultTagList, value]
  );

  return (
    <View style={[styles.container, containerStyle]}>
      {
        {
          ordered: <View style={[styles.listStyleDot, dotStyle]} />,
          unordered: (
            <Text {...textProps} style={[styles.listStyleNumber, numberTextStyle]}>
              {index + 1}.
            </Text>
          ),
        }[listStyle]
      }

      <Text
        accessible
        accessibilityRole="text"
        allowFontScaling={true}
        {...textProps}
        style={[styles.listItem, textStyle]}
      >
        {parsedText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    paddingLeft: 12,
    flex: 1,
    gap: 16,
  },
  listItem: {
    fontSize: 16,
    color: '#292929',
    flex: 1,
  },
  listStyleNumber: {
    fontSize: 16,
    color: '#292929',
  },
  listStyleDot: {
    backgroundColor: '#292929',
    borderRadius: 6,
    height: 6,
    width: 6,
    marginTop: 8,
  },
});

export default ListItem;
