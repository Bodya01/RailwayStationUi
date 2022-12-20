import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Suspense } from 'react';
import { useEffect } from 'react';

const drawerWidth = 240;
const navItems = ['Train Schedule', 'Help', 'My Cabinet'];

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}



const StyledLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    &.active {
      color: #007bff;
    }
  `;

export function SharedLayout(props) {
    const [isLoggedIn, setLoggedIn] = React.useState(false)
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    function CheckIfUserIsLoggedIn() {
        let res = localStorage.getItem("authData");

        res == null ? setLoggedIn(false) : setLoggedIn(true);
    }

    useEffect(() => {
        CheckIfUserIsLoggedIn()
    })

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                AnyTrain
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <HideOnScroll>
                    <AppBar style={{ background: '#f8f9fa' }}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                style={{ color: '#000' }}
                            >
                                MUI
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <Button sx={{ color: '#000' }}>
                                    <StyledLink to={'/schedule'} style={{ color: '#000; text-decoration: none' }}>Train Schedule</StyledLink>
                                </Button>
                                <Button sx={{ color: '#000' }}>
                                    <StyledLink to={'/help'} style={{ color: '#000; text-decoration: none' }}>Help</StyledLink>
                                </Button>
                                <Button sx={{ color: '#000' }} onClick={() => {
                                    if (isLoggedIn) {
                                        localStorage.removeItem('authData')
                                        setLoggedIn(false)
                                    }
                                }}>
                                    {!isLoggedIn 
                                    ? <StyledLink to={'/login'} style={{ color: '#000; text-decoration: none' }}>{"Log in"}</StyledLink>
                                    : <>Log out</>}
                                </Button>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box >

            <div style={{ position: 'relative', top: '64px', backgroundColor: '#F5F5F5', minWidth: '100%', minHeight: '91vh' }}>
                <Suspense fallback={<div>Loading subpage...</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    );
}