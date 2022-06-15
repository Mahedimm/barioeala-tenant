import React from 'react';
import {Header} from '.';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;