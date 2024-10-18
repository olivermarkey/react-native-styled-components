import { Pressable, ViewStyle, StyleProp } from "react-native";
import Theme from "@/src/constants/theme";
import { useTheme } from "@react-navigation/native";

export interface ButtonProps extends React.ComponentProps<typeof Pressable> {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    variant?: keyof ReturnType<typeof getVariants>;
    size?: keyof ReturnType<typeof getSizes>;
}

export function Button(props: ButtonProps) {
    const { children, style, variant = "default", size = "default", ...otherProps } = props;

    return (
        <Pressable
            style={({ pressed }) => [
                getButtonStyles({ variant, size }),
                style,
                pressed && { opacity: 0.7 },
            ]}
            {...otherProps}
        >
            {children}
        </Pressable>
    )
}

const getDefaultStyles = (theme: 'light' | 'dark'): ViewStyle => {
    return {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Theme[theme]['radius'],
    }
}


const getVariants = (theme: 'light' | 'dark') => ({
    default: {
        backgroundColor: Theme[theme]['primary'],
    },
    destructive: {
        backgroundColor: Theme[theme]['destructive'],
    },
    ghost: {
        backgroundColor: 'transparent',
    },
    outline: {
        backgroundColor: 'transparent',
        borderColor: Theme[theme]['border'],
        borderWidth: 1,
    },
    link: {
        backgroundColor: 'transparent',
        textDecorationLine: 'underline',
    },
});

const getSizes = (theme: 'light' | 'dark') => ({
    default: {
        height: 40,
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 8,
    },
    small: {
        height: 32,
        paddingHorizontal: 12,
        borderRadius: 4,
    },
    large: {
        height: 48,
        paddingHorizontal: 32,
        borderRadius: 10,
    },
    icon: {
        height: 40,
        width: 40,
    },
});

type ButtonStyleOptions = {
    variant: keyof ReturnType<typeof getVariants>;
    size: keyof ReturnType<typeof getSizes>;
}

const getButtonStyles = (options: ButtonStyleOptions) => {
    const { variant, size } = options;
    const theme = useTheme().dark ? 'dark' : 'light';
    const defaultStyles = getDefaultStyles(theme);
    const variants = getVariants(theme);
    const sizes = getSizes(theme);
    return {
        ...defaultStyles,
        ...variants[variant],
        ...sizes[size],
    };
};
