'use client';

import { Box, Typography, Grid, TextField, Button, IconButton } from '@mui/material';
import { Facebook, Twitter, YouTube } from '@mui/icons-material';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#f8f8f8',
        padding: { xs: '20px', md: '40px' },
        borderTop: '1px solid #e0e0e0',
        color: '#666',
        fontSize: { xs: '0.875rem', md: '1rem' },
        top: 70,
        position: 'relative',
        zIndex: 1000,
      }}
    >
      <Grid container spacing={4} sx={{ justifyContent: 'space-between' }}>
        {/* Logo và mô tả */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h5" sx={{ color: '#d32f2f', mb: 2, fontWeight: 'bold' }}>
            ninico
          </Typography>
          <Typography variant="body2">
            Elegant pink origami design three dimensional view and decoration co-exist.
          </Typography>
        </Grid>

        {/* Thông tin */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            Information
          </Typography>
          <Box>
            <Typography variant="body2">Custom Service</Typography>
            <Typography variant="body2">FAQs</Typography>
            <Typography variant="body2">Ordering Tracking</Typography>
            <Typography variant="body2">Contacts</Typography>
            <Typography variant="body2">Events</Typography>
          </Box>
        </Grid>

        {/* Tài khoản */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            My Account
          </Typography>
          <Box>
            <Typography variant="body2">Delivery Information</Typography>
            <Typography variant="body2">Privacy Policy</Typography>
            <Typography variant="body2">Discount</Typography>
            <Typography variant="body2">Custom Service</Typography>
            <Typography variant="body2">Terms Condition</Typography>
          </Box>
        </Grid>

        {/* Mạng xã hội */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            Social Network
          </Typography>
          <Box>
            <Typography variant="body2">
              <IconButton color="inherit" aria-label="twitter">
                <Twitter />
                <Typography variant="body2" sx={{ ml: 1 }}>Twitter</Typography>
              </IconButton>
            </Typography>
            <Typography variant="body2">
              <IconButton color="inherit" aria-label="facebook">
                <Facebook />
                <Typography variant="body2" sx={{ ml: 1 }}>Facebook</Typography>
              </IconButton>
            </Typography>
            <Typography variant="body2">
              <IconButton color="inherit" aria-label="youtube">
                <YouTube />
                <Typography variant="body2" sx={{ ml: 1 }}>Youtube</Typography>
              </IconButton>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}