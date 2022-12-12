import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
  size?: string;
}
export default function IconCloseBlue({ size = '21px', ...props }: Props) {
  return (
    <Box
      as='svg'
      fill='none'
      {...props}
      width={size}
      height={size}
      viewBox='0 0 21 21'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.5791 20.3242C5.0561 20.3242 0.579102 15.8472 0.579102 10.3242C0.579102 4.80122 5.0561 0.324219 10.5791 0.324219C16.1021 0.324219 20.5791 4.80122 20.5791 10.3242C20.5791 15.8472 16.1021 20.3242 10.5791 20.3242ZM10.5791 8.91022L7.7511 6.08122L6.3361 7.49622L9.1651 10.3242L6.3361 13.1522L7.7511 14.5672L10.5791 11.7382L13.4071 14.5672L14.8221 13.1522L11.9931 10.3242L14.8221 7.49622L13.4071 6.08122L10.5791 8.91022Z'
        fill='#106CFF'
      />
    </Box>
  );
}
