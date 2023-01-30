import { KeyConnect } from 'constants/app';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface props {
  children: ReactNode;
}

interface ValueContext {
  walletAddress: string;
  onSetWalletAddress: (value: string) => void;
  isConnect: boolean;
  onSetConnectStatus: (value: boolean) => void;
}

const value: ValueContext = {
  walletAddress: '',
  onSetWalletAddress: () => ({}),
  isConnect: false,
  onSetConnectStatus: () => ({}),
};

export const AppContext = createContext(value);

export const AppProvider = ({ children }: props) => {
  const [walletAddress, onSetWalletAddress] = useState(
    localStorage.getItem(KeyConnect) || ''
  );

  const [isConnect, onSetConnectStatus] = useState(false);

  useEffect(() => {
    onSetConnectStatus(!!walletAddress);
  }, [walletAddress, onSetConnectStatus]);

  const value = {
    walletAddress,
    onSetWalletAddress,
    isConnect,
    onSetConnectStatus,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
