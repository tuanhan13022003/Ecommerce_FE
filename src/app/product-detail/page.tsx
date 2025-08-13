'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getProductID } from '~/lib/api/product';
import { Box, Typography, CircularProgress, Card, CardContent, CardMedia } from '@mui/material';

export default function ProductDetailPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductID(Number(id));
        setProduct(data);
        setError(null);
      } catch (err) {
        console.error('Lỗi khi lấy chi tiết sản phẩm:', err);
        setError('Không thể tải thông tin sản phẩm.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (!id) {
    return <Typography color="error">Không tìm thấy sản phẩm</Typography>;
  }

  if (loading) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!product) {
    return <Typography>Không có dữ liệu sản phẩm</Typography>;
  }

  return (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 600, width: '100%' }}>
        {product.image && (
          <CardMedia
            component="img"
            height="300"
            image={product.image}
            alt={product.name}
          />
        )}
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            {product.name}
          </Typography>
          <Typography variant="h6" color="green" sx={{ mb: 2 }}>
            Giá: {product.price}₫
          </Typography>
          <Typography variant="body1">
            {product.description || 'Không có mô tả'}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
