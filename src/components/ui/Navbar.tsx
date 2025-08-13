'use client'
import { FavoriteBorder, Search, Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  InputBase,
  Box,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import Link from 'next/link';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useState } from 'react';

import Categories from "~/components/ui/Categories/Categories";
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);


  const handleMobielOpen = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobielSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <List>
        {[
          { text: 'Products', href: '/products', icon: <AddShoppingCartOutlinedIcon /> },
          { text: 'Cart', href: '/cart', icon: <FavoriteBorderTwoToneIcon /> },
          {
            text: 'Profile', href: '/profile', icon: <Avatar
              alt="User Avatar"
              sx={{ width: { xs: 24, md: 32 }, height: { xs: 24, md: 32 } }} />
          },
        ].map((item) => (
          <ListItem key={item.text} onClick={handleMobielOpen}>
            <Link href={item.href} style={{ textDecoration: 'none', color: 'inherit', width: '100%', display: 'flex', alignItems: 'center' }}>
              {item.icon && <Box sx={{ mr: 1 }}>{item.icon}</Box>}
              <ListItemText primary={item.text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: '#c8dbf5ff', position: 'fixed', zIndex: 1000,  }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            margin: { xs: 'auto', md: 'auto' },
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: { xs: 1, sm: 0 },
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
            }}
          >
            <img
              src="/logo.jpg"
              alt="Logo"
              style={{ width: 40, height: 40, verticalAlign: 'middle', borderRadius: '50%' }}
            />
            <Link href="/" style={{ color: 'Green', textDecoration: 'none', marginLeft:5 ,verticalAlign: 'middle', fontWeight: 'bold' }}>
              ECommerce
            </Link>
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexGrow: 1,
              justifyContent: 'center',
            }}    
          >
            <Categories />
          </Box>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              maxWidth: { sm: '200px', md: '300px' },
              backgroundColor: '#c7f9ffff',
              borderRadius: 1,
              padding: '0 8px',
              margin: { xs: '0 8px', md: '0 16px' },
              alignItems: 'center',
            }}
          >
            <IconButton size="small" aria-label="search">
              <Search />
            </IconButton>
            <InputBase
              placeholder="Search…"
              sx={{ ml: 1, flex: 1, color: '#000' }}
              inputProps={{ 'aria-label': 'search products' }}
            />
          </Box>


          <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
            <IconButton
              size="small"
              onClick={handleMobielSearch}
              aria-label="toggle search"
              sx={{ color: 'inherit' }}
            >
              <Search />
            </IconButton>
            {searchOpen && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  backgroundColor: '#b6e4e0',
                  padding: '8px',
                  boxShadow: 3,
                  zIndex: 1,
                }}
              >
                <InputBase
                  placeholder="Search products…"
                  sx={{ width: '100%', color: '#000', pl: 2 }}
                  inputProps={{ 'aria-label': 'search products mobile' }}
                />
              </Box>
            )}
          </Box>


          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            <Button color="inherit" component={Link} href="/products" aria-label="products">
              <AddShoppingCartOutlinedIcon />
            </Button>
            <Button color="inherit" component={Link} href="/cart" aria-label="cart">
              <FavoriteBorderTwoToneIcon />
            </Button>
            <Button color="inherit" component={Link} href="/cart" aria-label="cart">
              <Avatar
                alt="User Avatar"
                sx={{ width: { xs: 24, md: 32 }, height: { xs: 24, md: 32 } }}
              />
            </Button>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleMobielOpen}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleMobielOpen}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { backgroundColor: '#fff' },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}