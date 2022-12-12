import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import Search from '../../svg/Search';
import { ChakraType } from '../../../constants/types';
import useLightMode from '../../../helpers/lightMode/isLightMode';

interface SearchInputProps {
  h?: ChakraType;
  w?: ChakraType;
  value?: string;
  border?: ChakraType;
  borderColor?: string;
  className?: string;
  placeholder?: string;
  paddingRight?: string;
  backgroundColor?: string;
  onChange: (value: string) => void;
  isFocus?: boolean;
  borderRadius?: string;
}

export default function SearchInput({
  h,
  w,
  value,
  className,
  placeholder,
  onChange,
  borderColor,
  border,
  isFocus = false,
  borderRadius,
  ...rest
}: SearchInputProps) {
  const focusUsernameInputField = (input: HTMLInputElement | null) => {
    if (input && isFocus) {
      setTimeout(() => {
        input.focus();
      }, 100);
    }
  };
  const { isLightMode } = useLightMode();
  return (
    <InputGroup w={w} h={h}>
      {value === '' && (
        <InputLeftElement h={h} cursor='pointer'>
          <Search />
        </InputLeftElement>
      )}
      <Input
        w={w}
        h={h}
        border={border}
        borderColor={borderColor}
        type='text'
        fontSize='14px'
        value={value}
        color={isLightMode ? '#171924' : '#F6F7F9'}
        className={className}
        placeholder={placeholder}
        bg={isLightMode ? '#F6F7F9' : '#171924'}
        onChange={(e) => onChange(e.target.value)}
        ref={focusUsernameInputField}
        borderRadius={borderRadius ? borderRadius : '8px'}
        {...rest}
      />
    </InputGroup>
  );
}
