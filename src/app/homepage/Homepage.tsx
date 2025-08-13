'use client';

import styled from '@emotion/styled';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Banner from '~/components/ui/Banner';
import ProductItem from '~/components/ui/TopProduct/ProductItem';
import { getAllProducts } from '~/lib/api/product';
import { useRouter } from 'next/navigation';

const StyledBox = styled(Box)({
  padding: '0 24px',
  backgroundColor: '#fff',
});

export interface Product {
  product_id: number;
  name: string;
  description: string;
  price: string;
  image_url: string;
}

export default function HomePage() {
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data.products.slice(0, 8));
        setError(null);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
      }
    };

    fetchProducts();
  }, []);

  const goToDetail = (id: number) => {
    router.push(`/product-detail?id=${id}`);
  };

  return (
    <Container maxWidth="xl" sx={{ padding: 0 }}>
      <main
        style={{
          minHeight: 'calc(100vh - 64px)',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '100%', margin: '0 auto' }}>
          <Banner />
        </Box>

        <StyledBox>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff1744', margin: '20px 0' }}>
              Popular Products
            </Typography>
          </Box>

          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          <Grid container spacing={3} columns={{ xs: 12, sm: 12, md: 12, lg: 20 }} sx={{ justifyContent: 'center', mt: '5px' }}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={4} sx={{  cursor: 'pointer' }} key={product.product_id}>
                <ProductItem
                  name={product.name}
                  price={product.price}
                  image_url={product.image_url}
                  description={product.description}
                  product_id={product.product_id}
                  onClick={() => goToDetail(product.product_id)}
                />
              </Grid>
            ))}
          </Grid>
        </StyledBox>

        <Button
          variant="contained"
          color="info"
          sx={{ mt: 3, width: 200, alignSelf: 'center' }}
          onClick={() => router.push('/product-page')}
        >
          View All Products
        </Button>
      </main>
    </Container>
  );
}
