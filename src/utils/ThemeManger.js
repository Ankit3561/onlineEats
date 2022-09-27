import React, {createContext, useState} from 'react';
const themes = {
  light: {
    bgColor: '#000000',
    textColor: '#eeeeee',
  },
  dark: {
    bgColor: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  /// This Theme use to dark and light mode
  const [theme, setTheme] = useState('light');
  const [bgColor, setBgColor] = useState('white');
  const [textColor, setTextColor] = useState('black');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setBgColor('black');
      setTextColor('white')
    } else {
      setTheme('light');
      setBgColor('white');
      setTextColor('black')
    }
  };
   
  return (
    <ThemeContext.Provider value={{theme,bgColor,textColor, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
