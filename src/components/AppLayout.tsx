import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  CssBaseline,
} from '@mui/material';
import {
  BusinessCenter,
  Timeline,
  Assessment,
} from '@mui/icons-material';
import { Outlet, Link, useLocation } from 'react-router-dom';

const drawerWidth = 280;

const navigationItems = [
  {
    text: 'Deal Sourcing',
    path: '/deal-sourcing',
    icon: <BusinessCenter />,
  },
  {
    text: 'Acquisition Pipeline',
    path: '/acquisition-pipeline',
    icon: <Timeline />,
  },
  {
    text: 'Due Diligence',
    path: '/due-diligence',
    icon: <Assessment />,
  },
];

export const AppLayout: React.FC = () => {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* Top Navigation Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography variant="h5" noWrap component="div" fontWeight={600}>
            Genshare Unified Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Navigation */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        role="navigation"
      >
        <Toolbar /> {/* Spacer for AppBar */}
        <Box sx={{ overflow: 'auto', mt: 2, px: 1 }}>
          <List sx={{ '& .MuiListItem-root': { mb: 0.5 } }}>
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    selected={isActive}
                    sx={{
                      borderRadius: 2,
                      py: 1.5,
                      px: 2,
                      '&.Mui-selected': {
                        backgroundColor: 'secondary.light',
                        color: 'secondary.contrastText',
                        '&:hover': {
                          backgroundColor: 'secondary.main',
                        },
                        '& .MuiListItemIcon-root': {
                          color: 'secondary.contrastText',
                        },
                      },
                      '&:hover': {
                        backgroundColor: 'grey.100',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: isActive ? 'inherit' : 'text.secondary',
                        minWidth: 40,
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontWeight: isActive ? 600 : 500,
                          fontSize: '0.95rem',
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        role="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
        }}
      >
        <Toolbar /> {/* Spacer for AppBar */}
        <Outlet />
      </Box>
    </Box>
  );
};