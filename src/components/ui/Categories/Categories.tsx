'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Menu, MenuItem, Typography, CircularProgress } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { getCategories } from '~/lib/api/categories';

interface Category {
  icategory_id: number;
  name: string;
}

export default function CategoryDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Failed to load categories', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleClick = (event:any, category: Category) => {
    setAnchorEl(event.currentTarget);
    setSelectedCategory(category);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedCategory(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, p: 1,color: '#0f585eff',  borderRadius: 0.5, backgroundColor: '#c8dbf5ff' }}>
      {loading ? (
        <CircularProgress size={24} sx={{ ml: 2 }} />
      ) : error ? (
        <Typography color="error" sx={{ p: 1 }}>
          {error}
        </Typography>
      ) : categories.length > 0 ? (
        categories.map((category) => (
          <div key={category.icategory_id}>
            <Button
              variant="contained"
              onClick={(event) => handleClick(event, category)}
              sx={{
                borderRadius: 1,
                backgroundColor: 'inherit',
                color: 'black',
                '&:hover': { backgroundColor: '#afbcdfff' },
                textTransform: 'none',
                padding: '5px 15px',
              }}
            >
              {category.name}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && selectedCategory?.icategory_id === category.icategory_id}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              <MenuItem onClick={handleClose}>Tùy chọn 1</MenuItem>
              <MenuItem onClick={handleClose}>Tùy chọn 2</MenuItem>
              <MenuItem onClick={handleClose}>Tùy chọn 3</MenuItem>
            </Menu>
          </div>
        ))
      ) : (
        <Typography sx={{ p: 1 }}>Không có danh mục</Typography>
      )}
    </Box>
  );
}