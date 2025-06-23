import { useParseHtmlTags } from '../../../hooks';
import { useMemo } from 'react';
import {
  StyleSheet,
  Text,
  type TextProps,
  View,
  type ViewProps,
} from 'react-native';
import type { IUseParseHtmlTags } from '../../../types';
import CustomCheckbox from '../customCheckBox';

export type ICheckListItem = {
  text: string;
  checked: boolean;
};

export type ICheckListItemProps = {
  item: ICheckListItem;
  itemContainerStyle?: ViewProps['style'];
  checkboxStyle?: ViewProps['style'];
  checkboxCheckedStyle?: ViewProps['style'];
  checkboxUncheckedStyle?: ViewProps['style'];
  textStyle?: TextProps['style'];
  otherStyles?: IUseParseHtmlTags['styles'];
  checkmarkStyle?: ViewProps['style'];
  textProps?: Omit<TextProps, 'style' | 'children'>;
};

const CheckListItem = ({
  itemContainerStyle,
  item,
  checkboxStyle,
  checkboxCheckedStyle,
  checkboxUncheckedStyle,
  textStyle,
  otherStyles,
  checkmarkStyle,
  textProps,
}: ICheckListItemProps) => {
  const { parseHtmlTag, defaultTagList } = useParseHtmlTags({
    styles: {
      ...otherStyles,
      textStyle: textStyle,
    },
    textProps,
  });

  const parsedText = useMemo(
    () => parseHtmlTag(defaultTagList, item.text),
    [item.text, defaultTagList, parseHtmlTag]
  );

  return (
    <View style={[styles.container, itemContainerStyle]}>
      <CustomCheckbox
        checked={item.checked}
        style={checkboxStyle}
        checkedStyle={checkboxCheckedStyle}
        uncheckedStyle={checkboxUncheckedStyle}
        checkmarkStyle={checkmarkStyle}
      />
      <Text {...textProps} style={[styles.text, textStyle]}>{parsedText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  text: {
    fontSize: 16,
    flex: 1,
  },
});

export default CheckListItem;
