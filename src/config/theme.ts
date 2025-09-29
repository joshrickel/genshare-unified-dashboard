import { createTheme } from '@mui/material/styles';

/**
 * Custom MUI theme configuration
 * Designed for clean, professional dashboard with light theme and card-based layout
 */
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2BBF96', // Genshare teal brand color
      light: '#5CCFAF',
      dark: '#20917C',
    },
    secondary: {
      main: '#20917C', // Dark teal accent
      light: '#2BBF96',
      dark: '#1A7A68',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2BBF96',
      light: '#5CCFAF',
      dark: '#20917C',
    },
    warning: {
      main: '#f39c12',
      light: '#e67e22',
      dark: '#d35400',
    },
    error: {
      main: '#e74c3c',
      light: '#c0392b',
      dark: '#a93226',
    },
    background: {
      default: '#f8f9fa', // Slightly warmer background
      paper: '#ffffff',
    },
    grey: {
      50: '#f8f9fa',
      100: '#e9ecef',
      200: '#dee2e6',
      300: '#ced4da',
      400: '#adb5bd',
      500: '#6c757d',
      600: '#495057',
      700: '#343a40',
      800: '#212529',
      900: '#121416',
    },
    text: {
      primary: '#212529',
      secondary: '#6c757d',
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", sans-serif',
    h1: {
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: '1.875rem',
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.025em',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: '-0.025em',
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#495057',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#6c757d',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
      color: '#6c757d',
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)',
          border: '1px solid #e9ecef',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1)',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#212529',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          borderBottom: '1px solid #e9ecef',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#f8f9fa',
          borderRight: '1px solid #dee2e6',
          '& .MuiListItemButton-root': {
            borderRadius: '8px',
            margin: '2px 8px',
            '&.Mui-selected': {
              backgroundColor: '#E6F7F3',
              '&:hover': {
                backgroundColor: '#CCF0E8',
              },
            },
            '&:hover': {
              backgroundColor: '#e9ecef',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: '8px',
          padding: '8px 16px',
        },
        contained: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          fontWeight: 500,
        },
      },
    },
  },
});