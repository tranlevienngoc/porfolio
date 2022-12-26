import { Box } from '@chakra-ui/react';

interface Props {
  color?: string;
  size?: string;
}

export default function Supports({ color = '#292D32', size = '16px' }: Props) {
  return (
    <Box
      as='svg'
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11.6333 15.1673C10.8799 15.1673 10.0866 14.9873 9.26659 14.6407C8.46659 14.3007 7.65992 13.834 6.87325 13.2673C6.09325 12.694 5.33992 12.054 4.62659 11.354C3.91992 10.6407 3.27992 9.88732 2.71325 9.11399C2.13992 8.31398 1.67992 7.51398 1.35325 6.74065C1.00659 5.91398 0.833252 5.11398 0.833252 4.36065C0.833252 3.84065 0.926585 3.34732 1.10659 2.88732C1.29325 2.41398 1.59325 1.97398 1.99992 1.59398C2.51325 1.08732 3.09992 0.833984 3.72659 0.833984C3.98659 0.833984 4.25325 0.893984 4.47992 1.00065C4.73992 1.12065 4.95992 1.30065 5.11992 1.54065L6.66659 3.72065C6.80659 3.91398 6.91325 4.10065 6.98659 4.28732C7.07325 4.48732 7.11992 4.68732 7.11992 4.88065C7.11992 5.13398 7.04659 5.38065 6.90659 5.61398C6.80659 5.79398 6.65325 5.98732 6.45992 6.18065L6.00659 6.65398C6.01325 6.67398 6.01992 6.68732 6.02659 6.70065C6.10659 6.84065 6.26659 7.08065 6.57325 7.44065C6.89992 7.81398 7.20659 8.15398 7.51325 8.46732C7.90659 8.85398 8.23325 9.16065 8.53992 9.41398C8.91992 9.73398 9.16659 9.89398 9.31325 9.96732L9.29992 10.0007L9.78659 9.52065C9.99325 9.31398 10.1933 9.16065 10.3866 9.06065C10.7533 8.83398 11.2199 8.79398 11.6866 8.98732C11.8599 9.06065 12.0466 9.16065 12.2466 9.30065L14.4599 10.874C14.7066 11.0407 14.8866 11.254 14.9933 11.5073C15.0933 11.7607 15.1399 11.994 15.1399 12.2273C15.1399 12.5473 15.0666 12.8673 14.9266 13.1673C14.7866 13.4673 14.6133 13.7273 14.3933 13.9673C14.0133 14.3873 13.5999 14.6873 13.1199 14.8807C12.6599 15.0673 12.1599 15.1673 11.6333 15.1673ZM3.72659 1.83398C3.35992 1.83398 3.01992 1.99398 2.69325 2.31398C2.38659 2.60065 2.17325 2.91398 2.03992 3.25398C1.89992 3.60065 1.83325 3.96732 1.83325 4.36065C1.83325 4.98065 1.97992 5.65399 2.27325 6.34732C2.57325 7.05398 2.99325 7.78732 3.52659 8.52065C4.05992 9.25398 4.66659 9.96732 5.33325 10.6407C5.99992 11.3007 6.71992 11.914 7.45992 12.454C8.17992 12.9807 8.91992 13.4073 9.65325 13.714C10.7933 14.2007 11.8599 14.314 12.7399 13.9473C13.0799 13.8073 13.3799 13.594 13.6533 13.2873C13.8066 13.1207 13.9266 12.9407 14.0266 12.7273C14.1066 12.5607 14.1466 12.3873 14.1466 12.214C14.1466 12.1073 14.1266 12.0007 14.0733 11.8807C14.0533 11.8407 14.0133 11.7673 13.8866 11.6807L11.6733 10.1073C11.5399 10.014 11.4199 9.94732 11.3066 9.90065C11.1599 9.84065 11.0999 9.78065 10.8733 9.92065C10.7399 9.98732 10.6199 10.0873 10.4866 10.2207L9.97992 10.7207C9.71992 10.974 9.31992 11.034 9.01325 10.9207L8.83325 10.8407C8.55992 10.694 8.23992 10.4673 7.88659 10.1673C7.56659 9.89398 7.21992 9.57398 6.79992 9.16065C6.47325 8.82732 6.14659 8.47398 5.80659 8.08065C5.49325 7.71398 5.26659 7.40065 5.12659 7.14065L5.04659 6.94065C5.00659 6.78732 4.99325 6.70065 4.99325 6.60732C4.99325 6.36732 5.07992 6.15398 5.24659 5.98732L5.74659 5.46732C5.87992 5.33398 5.97992 5.20732 6.04659 5.09398C6.09992 5.00732 6.11992 4.93398 6.11992 4.86732C6.11992 4.81398 6.09992 4.73398 6.06659 4.65398C6.01992 4.54732 5.94659 4.42732 5.85325 4.30065L4.30659 2.11398C4.23992 2.02065 4.15992 1.95398 4.05992 1.90732C3.95325 1.86065 3.83992 1.83398 3.72659 1.83398ZM9.29992 10.0073L9.19325 10.4607L9.37325 9.99398C9.33992 9.98732 9.31325 9.99399 9.29992 10.0073Z'
          fill={color}
        />
        <path
          d='M12.3333 6.49935C12.06 6.49935 11.8333 6.27268 11.8333 5.99935C11.8333 5.75935 11.5933 5.25935 11.1933 4.83268C10.8 4.41268 10.3667 4.16602 10 4.16602C9.72667 4.16602 9.5 3.93935 9.5 3.66602C9.5 3.39268 9.72667 3.16602 10 3.16602C10.6467 3.16602 11.3267 3.51268 11.92 4.14602C12.4733 4.73935 12.8333 5.46602 12.8333 5.99935C12.8333 6.27268 12.6067 6.49935 12.3333 6.49935Z'
          fill={color}
        />
        <path
          d='M14.6667 6.50065C14.3933 6.50065 14.1667 6.27398 14.1667 6.00065C14.1667 3.70065 12.3 1.83398 10 1.83398C9.72667 1.83398 9.5 1.60732 9.5 1.33398C9.5 1.06065 9.72667 0.833984 10 0.833984C12.8467 0.833984 15.1667 3.15398 15.1667 6.00065C15.1667 6.27398 14.94 6.50065 14.6667 6.50065Z'
          fill={color}
        />
      </svg>
    </Box>
  );
}
