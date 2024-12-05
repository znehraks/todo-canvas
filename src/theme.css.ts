import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
  },
});
