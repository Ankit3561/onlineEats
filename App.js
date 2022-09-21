import React from 'react';
import Routes from './src/navigation/Routes';
import ColorTheme from './src/utils/ColorTheme';
import {ThemeProvider} from './src/utils/ThemeManger';

const App = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
