import React from 'react';
import { useTheme } from './themeprovider';

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

