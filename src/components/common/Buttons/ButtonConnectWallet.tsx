import { ButtonProps } from '@chakra-ui/react';
import ConnectWallet from 'components/svg/ConnectWallet';

import ButtonBase from './ButtonBase';

interface Props extends ButtonProps {
  fsText?: number;
  fwText?: number;
  colorText?: string;
  hIcon?: number;
  wIcon?: number;
}
export default function ButtonConnectWallet({
  fsText,
  fwText,
  hIcon,
  wIcon,
  ...props
}: Props) {
  return (
    <ButtonBase
      {...props}
      fsText={fsText}
      fwText={fwText}
      bg='blue.100'
      leftIcon={<ConnectWallet h={hIcon} w={wIcon} />}
      colorText='white'
      content='Connect Wallet'
    />
  );
}
