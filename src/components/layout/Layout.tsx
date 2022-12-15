import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import SidebarItem from './SidebarItem';
import routes from '../../config/routes';

const Layout = () => {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showLeftItem, setShowLeftItem] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <Box>
      <Router>
        <Box>
          <SidebarItem
            variant={isLargerThan1024 ? 'sidebar' : 'drawer'}
            isOpen={isSidebarOpen}
            onClose={toggleSidebar}
            showLeftItem={showLeftItem}
          />
          <Box ml={isLargerThan1024 ? 228 : 0}>
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
    </Box>
  );
};
export default Layout;
