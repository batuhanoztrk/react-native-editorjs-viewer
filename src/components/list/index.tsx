import {
  SectionList,
  StyleSheet,
  type TextProps,
  type ViewProps,
} from 'react-native';
import { useMemo } from 'react';
import ListItem from './listItem';
import type { IUseParseHtmlTags } from '../../types';

export type IListProps = {
  data: {
    items: Array<string>;
    style: 'ordered' | 'unordered';
  };
  containerStyle?: ViewProps['style'];
  contentContainerStyle?: ViewProps['style'];
  listItemStyle?: {
    containerStyle?: ViewProps['style'];
    textStyle?: TextProps['style'];
    dotStyle?: ViewProps['style'];
    numberTextStyle?: TextProps['style'];
  };
  otherStyles?: IUseParseHtmlTags['styles'];
  textProps?: Omit<TextProps, 'style' | 'children'>;
};

const List = ({
  data,
  containerStyle,
  contentContainerStyle,
  listItemStyle,
  otherStyles,
  textProps,
}: IListProps) => {
  const sections = useMemo(() => {
    return [{ data: data.items }];
  }, [data.items]);

  return (
    <SectionList
      scrollEnabled={false}
      style={[styles.list, containerStyle]}
      contentContainerStyle={contentContainerStyle}
      sections={sections}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => (
        <ListItem
          value={item}
          index={index}
          listStyle={data.style}
          containerStyle={listItemStyle?.containerStyle}
          textStyle={listItemStyle?.textStyle}
          dotStyle={listItemStyle?.dotStyle}
          numberTextStyle={listItemStyle?.numberTextStyle}
          otherStyles={otherStyles}
          textProps={textProps}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginVertical: 8,
  },
});

export default List;
