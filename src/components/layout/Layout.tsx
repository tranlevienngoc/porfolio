import { Box, useBreakpointValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import SidebarItem from './SidebarItem';
import AllSymbol from '../svg/AllSymbol';
import routes from '../../config/routes';

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

  return (
    <Box>
      <Router>
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
                        <Box>{React.createElement(route.component)}</Box>
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
