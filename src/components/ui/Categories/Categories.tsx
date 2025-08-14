

'use client';

import { useEffect, useState } from 'react';
import { Box, Button, Menu, Typography, CircularProgress } from '@mui/material';
import styled from '@emotion/styled';
import { getCategories } from '~/lib/api/categories';
import MenuCategorie from './MenuCategories';

interface Category {
  category_id: number; // đổi từ icategory_id sang category_id
  name: string;
}

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 2,
  padding: 1,
  color: '#0f585eff',
  borderRadius: 0.5,
  backgroundColor: '#c8dbf5ff',
});

export default function CategoryDropdown() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        console.log('Categories API response:', data);
        setCategories(data);
      } catch (error) {
        console.error('Failed to load categories', error);
        setError('Không thể tải danh mục');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>, categoryId: number) => {
    console.log('Clicked category ID:', categoryId);
    setAnchorEl(event.currentTarget);
    setSelectedCategoryId(categoryId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedCategoryId(null);
  };

  return (
    <StyledBox>
      {loading ? (
        <CircularProgress size={24} sx={{ ml: 2 }} />
      ) : error ? (
        <Typography color="error" sx={{ p: 1 }}>
          {error}
        </Typography>
      ) : categories.length > 0 ? (
        categories.map((category) => (
          <div key={category.category_id}>
            <Button
              variant="contained"
              onClick={(event) => handleClick(event, category.category_id)}
              sx={{
                borderRadius: 1,
                backgroundColor: 'inherit',
                color: 'black',
                '&:hover': { backgroundColor: '#afbcdfff' },
                textTransform: 'none',
                padding: '5px 15px',
                marginInline: '5px'
              }}
              aria-label={`Danh mục ${category.name}`}
            >
              {category.name}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && selectedCategoryId === category.category_id}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              {selectedCategoryId && (
                <MenuCategorie categoryId={selectedCategoryId} onClose={handleClose} />
              )}
            </Menu>
          </div>
        ))
      ) : (
        <Typography sx={{ p: 1 }}>Không có danh mục</Typography>
      )}
    </StyledBox>
  );
}
