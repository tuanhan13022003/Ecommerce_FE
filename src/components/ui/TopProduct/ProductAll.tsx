'use client';

import { useEffect, useState } from 'react';
import { Box, Grid, Typography, Pagination, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ProductItem from './ProductItem';
import { getAllProductsPage, getProductID } from '~/lib/api/product';
import { useRouter } from 'next/navigation';

export default function ProductAll() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProductsPage(page, limit);
        setProducts(data.products);
        setTotalPages(data.totalPages);
        setError(null);
      } catch (err) {
        console.error('Lỗi khi load sản phẩm:', err);
        setError('Đã có lỗi xảy ra khi tải sản phẩm.');
      }
    };

    fetchProducts();
  }, [page, limit]);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value);
    setPage(1);
  };


  return (
    <Box sx={{ p: 3, backgroundColor: '#fff' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'green' }}>
          Tất cả sản phẩm
        </Typography>
      </Box>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <Grid container spacing={2} justifyContent="center" columns={{ xs: 12, sm: 12, md: 12, lg: 20 }}>
        {products.map((product: any) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            key={product.id}
            sx={{ maxWidth: '20%', cursor: 'pointer' }}
          >
            <ProductItem {...product} />
          </Grid>
        ))}
      </Grid>

      
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4, gap: 1 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          siblingCount={0}
          boundaryCount={1}
        />


        <FormControl
          sx={{
            m: 0, p: 0, minWidth: 55,
          }}
        >
          <InputLabel
            id="limit-label"

          >
            View
          </InputLabel>
          <Select
            labelId="limit-label"
            id="limit-select"
            value={limit}
            label="View"
            onChange={handleLimitChange}
            sx={{
              p: 0,
              m: 0,
              fontSize: 14,
              '.MuiSelect-select': {
                py: '7px',
                pr: '4px',
              },
            }}
          >
            {[5, 10, 15, 20].map((value) => (
              <MenuItem key={value} value={value} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
