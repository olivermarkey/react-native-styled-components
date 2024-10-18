import { View as DefaultView } from "react-native";
import { useTheme } from "@react-navigation/native";
import Theme from "@/src/constants/theme";

export interface ViewProps extends React.ComponentProps<typeof DefaultView> {}

export function View(props: ViewProps) {
    const { style, ...otherProps } = props;
    const theme = useTheme().dark ? 'dark' : 'light';
  
    return <DefaultView style={[{ backgroundColor: Theme[theme]['background'] }, style]} {...otherProps} />;
  }