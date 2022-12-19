import { Box } from '@chakra-ui/react';

interface props {
  isSendPage?: boolean;
}

export default function Chain({ isSendPage = false }: props) {
  return (
    <Box
      as='svg'
      w={{
        base: isSendPage ? '24px' : '32px',
        xl: isSendPage ? '24px' : '48px',
      }}
      h={{
        base: isSendPage ? '24px' : '32px',
        xl: isSendPage ? '24px' : '48px',
      }}
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' rx='12' fill='#627EEA' />
      <path
        d='M23.9971 8V19.8264L33.9928 24.2929L23.9971 8Z'
        fill='white'
        fill-opacity='0.602'
      />
      <path d='M23.9971 8L14 24.2929L23.9971 19.8264V8Z' fill='white' />
      <path
        d='M23.9971 31.9568V39.9926L33.9995 26.1543L23.9971 31.9568Z'
        fill='white'
        fill-opacity='0.602'
      />
      <path
        d='M23.9971 39.9926V31.9555L14 26.1543L23.9971 39.9926Z'
        fill='white'
      />
      <path
        d='M23.9971 30.0968L33.9928 24.293L23.9971 19.8291V30.0968Z'
        fill='white'
        fill-opacity='0.2'
      />
      <path
        d='M14 24.293L23.9971 30.0968V19.8291L14 24.293Z'
        fill='white'
        fill-opacity='0.602'
      />
    </Box>
  );
}
