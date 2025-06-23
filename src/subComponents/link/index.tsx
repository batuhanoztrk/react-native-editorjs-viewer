import { Alert, Linking, StyleSheet, Text, type TextProps } from 'react-native';
import { type ReactNode, useCallback } from 'react';

export type ILinkProps = {
  children?: ReactNode;
  style?: TextProps['style'];
  href?: string;
} & Omit<TextProps, 'style' | 'children' | 'onPress'>;

const Link = ({ children, style, href, ...textProps }: ILinkProps) => {
  const handleOpenLink = useCallback(async (link?: string) => {
    if (!link) {
      Alert.alert('Missing linkTool');
      return;
    }

    try {
      await Linking.openURL(link);
    } catch {
      Alert.alert(`Don't know how to open this URL: ${link}`);
    }
  }, []);

  return (
    <Text
      allowFontScaling={true}
      {...textProps}
      style={[styles.link, style]}
      onPress={() => handleOpenLink(href)}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  link: {
    color: '#0000EE',
    textDecorationLine: 'underline',
  },
});

export default Link;
