import ButtonConnectWallet from 'components/common/Buttons/ButtonConnectWallet';
import MoreIcon from 'components/svg/MoreIcon';

const RightMenuNotConnect = () => {
  return (
    <>
      <ButtonConnectWallet
        h='40px'
        w='197px'
        hIcon={24}
        wIcon={24}
        p='8px 24px 8px 24px'
      />
      <MoreIcon ml='20px' />
    </>
  );
};

export default RightMenuNotConnect;
