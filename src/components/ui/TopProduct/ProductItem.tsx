'use client';

import { Box, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const ProductCard = styled(Card)({
  width: 250,
  height: 320,
  borderRadius: 12,
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
  },
});

const HoverActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  gap: theme.spacing(1),
  background: 'rgba(255, 255, 255, 0.9)',
  padding: theme.spacing(1),
  borderRadius: 8,
  opacity: 0,
  transition: 'opacity 0.3s',
  pointerEvents: 'none',
  [`${ProductCard}:hover &`]: {
    opacity: 1,
    pointerEvents: 'auto',
  },
}));

const ProductCardContent = styled(CardContent)({
  textAlign: 'center',
  padding: '8px 12px',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

interface ProductItemProps {
  name: string;
  price: string;
  image_url: string;
  description: string;
  product_id: number;
  onClick?: () => void;
}

export default function ProductItem({
  name,
  price,
  image_url,
  description,
  product_id,
  onClick,
}: ProductItemProps) {
  return (
    <ProductCard onClick={onClick}>
      <CardMedia
        component="img"
        height="130"
        image={image_url}
        alt={name}
        sx={{ objectFit: 'cover' }}
      />
      <HoverActions>
        <IconButton color="primary" size="small" onClick={(e) => e.stopPropagation()}>
          <VisibilityIcon />
        </IconButton>
        <IconButton color="primary" size="small" onClick={(e) => e.stopPropagation()}>
          <FavoriteIcon />
        </IconButton>
        <IconButton color="primary" size="small" onClick={(e) => e.stopPropagation()}>
          <ShareIcon />
        </IconButton>
      </HoverActions>
      <ProductCardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
          {name}
        </Typography>
        <Typography variant="h6" color="text.primary" sx={{ mt: 1 }}>
          ${price}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
          <Typography variant="caption" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </ProductCardContent>
    </ProductCard>
  );
}
