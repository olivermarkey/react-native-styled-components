import { Text as DefaultText } from "react-native";
import { useTheme } from "@react-navigation/native";
import Theme from "@/src/constants/theme";

export interface TextProps extends React.ComponentProps<typeof DefaultText> {}

export function Text(props: TextProps) {
    const { style, ...otherProps } = props;
    const theme = useTheme().dark ? 'dark' : 'light';
  
    return <DefaultText style={[{ color: Theme[theme]['text'] }, style]} {...otherProps} />;
  }