import { Box, useBreakpointValue } from '@chakra-ui/react';
import AllSymbol from 'components/svg/AllSymbol';
import routes from 'config/routes';
import { AppContext } from 'Context/AppContext';
import NoConnectWallet from 'pages/Overview/NoConnectWallet';
import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import SidebarItem from './SidebarItem';

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showLeftItem, setShowLeftItem] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const variant = useBreakpointValue(
    {
      base: 'drawer',
      lg: 'sidebar',
    },
    { ssr: false }
  );

  const isLargerThan1024 = useBreakpointValue(
    {
      base: false,
      lg: true,
    },
    { ssr: false }
  );

  const { isConnect } = useContext(AppContext);

  return (
    <Box>
      <Router>
        {/* cdnsv */}
        {/* vdsbvjd */}
        <Box>
          <SidebarItem
            variant={variant || 'sidebar'}
            isOpen={isSidebarOpen}
            onClose={toggleSidebar}
            showLeftItem={showLeftItem}
          />
          <Box ml={{ base: 0, lg: 228 }}>
            <Header
              showSidebarButton={!isLargerThan1024}
              onShowSidebar={toggleSidebar}
              onShowLeftItem={setShowLeftItem}
            />
            <Box>
              <Routes>
                {routes.map((route) => {
                  return (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={
                        isConnect ? (
                          <Box>{React.createElement(route.component)}</Box>
                        ) : (
                          <NoConnectWallet />
                        )
                      }
                    />
                  );
                })}
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
      <AllSymbol />
    </Box>
  );
};
export default Layout;
