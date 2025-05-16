import { Text, TextProps } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'subtitle' | 'defaultSemiBold' | 'link';
};

export function ThemedText(props: ThemedTextProps) {
  const { style, lightColor, darkColor, type = 'default', ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const colorScheme = useColorScheme();

  let fontFamily;
  let fontSize;
  let fontWeight;
  let additionalStyle = {};

  switch (type) {
    case 'title':
      fontFamily = 'AmiriBold';
      fontSize = 22;
      break;
    case 'subtitle':
      fontFamily = 'AmiriBold';
      fontSize = 18;
      break;
    case 'defaultSemiBold':
      fontFamily = 'AmiriBold';
      fontSize = 16;
      break;
    case 'link':
      fontFamily = 'Amiri';
      fontSize = 16;
      additionalStyle = {
        color: colorScheme === 'dark' ? '#69B4FF' : '#0A84FF',
        textDecorationLine: 'underline',
      };
      break;
    default:
      fontFamily = 'Amiri';
      fontSize = 16;
  }

  return (
    <Text
      style={[
        { color, fontFamily, fontSize, fontWeight },
        additionalStyle,
        style,
      ]}
      {...otherProps}
    />
  );
}