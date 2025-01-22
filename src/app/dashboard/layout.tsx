'use client';

import * as React from 'react';
import {styled, useTheme, Theme, CSSObject} from '@mui/material/styles';
import {useRouter, usePathname} from 'next/navigation';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AuthProvider from '@/auth/AuthProvider';
import {LinearProgress} from '@mui/material';
import {useSelector} from 'react-redux';
import {selectLoading} from '@/redux/selectors/common-selector';
import LogoDevIcon from '@mui/icons-material/LogoDev';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({theme, open}) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Layout({children}: {children: React.ReactNode}) {
  const isLoading = useSelector(selectLoading);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const navItems = [
    {text: 'Home', icon: <HomeIcon />, path: '/dashboard/home'},
    {
      text: 'Profile',
      icon: <AccountCircleIcon />,
      path: '/dashboard/profile',
    },
  ];

  return (
    <AuthProvider>
      <Box sx={{display: 'flex'}}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={[{marginRight: 5}, open && {display: 'none'}]}>
              <MenuIcon />
            </IconButton>
            <LogoDevIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: {xs: 'none', md: 'flex'},
                fontWeight: 700,
                // letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              MY APP
            </Typography>
          </Toolbar>
          {isLoading && <LinearProgress sx={{position: 'absolute', bottom: 0, width: '100%'}} />}
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {navItems.map(item => (
              <ListItem key={item.text} disablePadding sx={{display: 'block'}} onClick={() => router.push(item.path)}>
                <ListItemButton
                  sx={[
                    {minHeight: 48, px: 2.5},
                    open ? {justifyContent: 'initial'} : {justifyContent: 'center'},
                    pathname === item.path && {backgroundColor: theme.palette.action.selected},
                  ]}>
                  <ListItemIcon sx={[{minWidth: 0, justifyContent: 'center'}, open ? {mr: 3} : {mr: 'auto'}]}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} sx={[open ? {opacity: 1} : {opacity: 0}]} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    </AuthProvider>
  );
}
