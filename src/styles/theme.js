export const theme = Object.freeze({
  colors: {
    white: '#fff',
    black: '#000',
    red: '#e5383b',
    yellow: '#e09f3e',
    gold: '#ffd700',
    grey: '#EFEFEF',
    text: '#2a2a2a',
    background: '#fff',
    primary: '#3d5a80',
    secondary: '#05c',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system ui, sans-serif',
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: 12,
    s: 14,
    m: 20,
    l: 32,
    xl: 42,
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
  shadows: {
    small: '0 5px 7px 2px rgb(51 51 51 / .23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgb(51 51 51 / .18);',
    outline: '0px 0px 0px 2px #07080a;',
  },
  animation: {
    cubicBezier: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  breakpoints: {
    mobile: 480,
    tablet: 576,
    desktop: 1200,
  },
});
