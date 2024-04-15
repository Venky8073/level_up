import React from 'react';
import { useTheme } from './themeprovider';

const Header = () => {
  const { background, text } = useTheme();

  return (
    <header style={{ background, color: text }}>
      <h1>this is the header</h1>
    </header>
  );
};

export default Header;
