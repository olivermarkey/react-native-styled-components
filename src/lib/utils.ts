import { StyleSheet } from 'react-native';

type VariantsConfig<T> = {
  [K in keyof T]?: {
    [variantKey: string]: any;
  };
};

type StylesConfig<T> = {
  base?: any;
  variants?: VariantsConfig<T>;
  defaultVariants?: Partial<T>;
};

function createVariantStyles<T extends Record<string, string>>(stylesConfig: StylesConfig<T>) {
  return (options: Partial<T> = {}, customStyle: any = {}) => {
    const { base = {}, variants = {}, defaultVariants = {} } = stylesConfig;

    const selectedVariants = { ...defaultVariants, ...options };

    const stylesArray = [base];

    // Loop through each variant category and apply the selected variant
    for (const variant in selectedVariants) {
      const variantKey = selectedVariants[variant as keyof T];
      const variantConfig = variants[variant as keyof T];
      
      if (variantConfig && variantKey && variantConfig[variantKey]) {
        stylesArray.push(variantConfig[variantKey]);
      }
    }

    // Flatten and merge with custom styles
    return StyleSheet.flatten([...stylesArray, customStyle]);
  };
}
