"use client";

import { Box, Container } from "@mui/material";
import Banner from "~/components/ui/Banner";
import Categories from "~/components/ui/Categories/Categories";
import ProductAll from "~/components/ui/TopProduct/ProductAll";

export default function ProductPage() {
  return (
    <Container maxWidth="xl">
    <main className="flex min-h-screen p-24  " >
          <Box sx={{ flexGrow: 1 }}>
          <ProductAll />
        </Box> 
       </main>
    </Container>    
  );
}
