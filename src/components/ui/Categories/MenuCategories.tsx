'use client';

import { useEffect, useState } from 'react';
import { MenuItem, CircularProgress, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { getProductsByCategory } from '~/lib/api/product';

interface Product {
  product_id: number;
  category_id: number;
  name: string;
}

interface MenuCategorieProps {
  categoryId: number;
  onClose: () => void;
}

export default function MenuCategorie({ categoryId, onClose }: MenuCategorieProps) {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await getProductsByCategory(categoryId);

        if (!res || !Array.isArray(res.products)) {
          throw new Error('Invalid API response');
        }
        setProducts(res.products.slice(0, 5));
        setError(null);
      } catch (err) {
        console.error('Failed to load products:', err);
        setError('Không thể tải sản phẩm');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const handleProductClick = (id: number) => {
    router.push(`/product-detail?id=${id}`);
    onClose();
  };

  return (
    <>
      {loading ? (
        <MenuItem disabled>
          <CircularProgress size={24} />
        </MenuItem>
      ) : error ? (
        <MenuItem disabled>
          <Typography color="error">{error}</Typography>
        </MenuItem>
      ) : products.length > 0 ? (
        products.map((p) => (
          <MenuItem key={p.product_id} onClick={() => handleProductClick(p.product_id)}>
            {p.name}
          </MenuItem>
        ))
      ) : (
        <MenuItem disabled>Không có sản phẩm</MenuItem>
      )}
    </>
  );
}
