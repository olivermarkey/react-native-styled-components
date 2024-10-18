import { TextInput as DefaultTextInput, TextStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import Theme from "@/src/constants/theme";

export interface TextInputProps extends React.ComponentProps<typeof DefaultTextInput> { }

export function TextInput(props: TextInputProps) {
    const { style, ...otherProps } = props;
    const theme = useTheme().dark ? 'dark' : 'light';

    return (
        <DefaultTextInput
            style={[
                getInputStyles(theme),
                style,
            ]}
            placeholderTextColor={Theme[theme]['mutedForeground']}
            {...otherProps}
        />
    )
}

const getInputStyles = (theme: "light" | "dark"): TextStyle => {
    return {
        display: "flex",
        height: 40,
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Theme[theme]['border'],
        backgroundColor: Theme[theme]['background'],
        color: Theme[theme]['text'],
    }
}

