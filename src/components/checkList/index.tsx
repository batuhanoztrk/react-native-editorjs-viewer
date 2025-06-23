import { StyleSheet, FlatList } from 'react-native';
import type { ViewProps, TextProps } from 'react-native';
import type { IUseParseHtmlTags } from '../../types';
import CheckListItem, { type ICheckListItem } from './checkListItem';

export type ICheckListProps = {
  data: {
    items: ICheckListItem[];
  };
  containerStyle?: ViewProps['style'];
  contentContainerStyle?: ViewProps['style'];
  itemContainerStyle?: ViewProps['style'];
  textStyle?: TextProps['style'];
  checkboxStyle?: ViewProps['style'];
  checkboxCheckedStyle?: ViewProps['style'];
  checkboxUncheckedStyle?: ViewProps['style'];
  checkmarkStyle?: ViewProps['style'];
  otherStyles?: IUseParseHtmlTags['styles'];
  textProps?: Omit<TextProps, 'style' | 'children'>;
};

const CheckList = ({
  data,
  containerStyle,
  itemContainerStyle,
  textStyle,
  checkboxStyle,
  checkboxCheckedStyle,
  checkboxUncheckedStyle,
  contentContainerStyle,
  checkmarkStyle,
  otherStyles,
  textProps,
}: ICheckListProps) => {
  return (
    <FlatList
      data={data.items}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <CheckListItem
          item={item}
          itemContainerStyle={itemContainerStyle}
          checkboxStyle={checkboxStyle}
          checkboxCheckedStyle={checkboxCheckedStyle}
          checkboxUncheckedStyle={checkboxUncheckedStyle}
          textStyle={textStyle}
          otherStyles={otherStyles}
          checkmarkStyle={checkmarkStyle}
          textProps={textProps}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
      style={[styles.container, containerStyle]}
      contentContainerStyle={contentContainerStyle}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
});

export default CheckList;
