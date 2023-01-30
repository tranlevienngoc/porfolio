import { KeyConnect } from 'constants/app';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface props {
  children: ReactNode;
}

interface ValueContext {
  walletAddress: string;
  setwalletAddress: (value: string) => void;
  isConnect: boolean;
  setIsConnect: (value: boolean) => void;
}

const value: ValueContext = {
  walletAddress: '',
  setwalletAddress: () => ({}),
  isConnect: false,
  setIsConnect: () => ({}),
};

export const AppContext = createContext(value);

export const AppProvider = ({ children }: props) => {
  const [walletAddress, setwalletAddress] = useState(
    localStorage.getItem(KeyConnect) || ''
  );

  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    if (walletAddress) {
      setIsConnect(true);
    } else {
      setIsConnect(!!walletAddress);
    }
  }, [walletAddress]);

  const value = {
    walletAddress,
    setwalletAddress,
    isConnect,
    setIsConnect,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
