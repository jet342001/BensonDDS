import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ navItems, children }) {
  return (
    <>
      <Header navItems={navItems} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
