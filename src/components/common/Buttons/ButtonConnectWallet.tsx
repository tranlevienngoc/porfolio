import { ButtonProps } from '@chakra-ui/react';

import ButtonBase from './ButtonBase';
import ConnectWallet from '../../svg/ConnectWallet';

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
