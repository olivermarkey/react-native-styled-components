import Theme from "@/src/constants/theme";
import { useTheme } from "@react-navigation/native";
import { View as DefaultView, ViewStyle } from "react-native";

export interface CardProps extends React.ComponentProps<typeof DefaultView> { }

export function Card(props: CardProps) {
    const { style, children, ...otherProps } = props;
    const theme = useTheme().dark ? 'dark' : 'light';

    return (
        <DefaultView style={[getCardStyles(theme), style]} {...otherProps}>
            {children}
        </DefaultView>
    );
}

const getCardStyles = (theme: "light" | "dark"): ViewStyle => {
    return {
        padding: 20,
        backgroundColor: Theme[theme]['card'],
        borderRadius: Theme[theme]['radius'],
        shadowColor: Theme[theme]['ring'],
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    }
}
