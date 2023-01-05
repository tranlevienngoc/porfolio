import { createContext, ReactNode, useEffect, useState } from 'react';

interface props {
  children: ReactNode;
}

interface ValueContext {
  addressWallet: string;
  setAddressWallet: (value: string) => void;
  isConnect: boolean;
  setIsConnect: (value: boolean) => void;
}

const value: ValueContext = {
  addressWallet: '',
  setAddressWallet: () => ({}),
  isConnect: false,
  setIsConnect: () => ({}),
};

export const AppContext = createContext(value);

export const AppProvider = ({ children }: props) => {
  const [addressWallet, setAddressWallet] = useState(
    localStorage.getItem('connected') || ''
  );

  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    if (addressWallet) {
      setIsConnect(true);
    } else {
      setIsConnect(false);
    }
  }, [addressWallet]);

  const value = {
    addressWallet,
    setAddressWallet,
    isConnect,
    setIsConnect,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
