import React from 'react';
import { Text as NativeText, TextProps } from 'react-native';

type IText = {
  weight?: '400' | '700';
} & TextProps;

const Text: React.FC<IText> = ({
  children,
  style,
  weight = '400',
  ...rest
}) => {
  return (
    <NativeText
      {...rest}
      style={[
        {
          fontFamily: `DeliusUnicase_${
            weight === '400' ? '400Regular' : '700Bold'
          }`,
        },
        style,
      ]}
    >
      {children}
    </NativeText>
  );
};

export default Text;
