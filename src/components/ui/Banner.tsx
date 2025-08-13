
// 'use client';

// import { Box, Stack } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// export default function Banner() {
//   return (
//     <Box sx={{ flexGrow: 1, ml:'20px' }}>
//       <Grid container spacing={1}>
//         <Grid item xs={12} md={8}>
//           <Swiper
//             modules={[Autoplay, Pagination]}
//             spaceBetween={10}
//             slidesPerView={1}
//             autoplay={{ delay: 3500 }}
//             pagination={{ clickable: true }}
//             loop
//             style={{maxWidth: '800px', height: '100%' }}
//           >
//             {['banner1.jpg', 'banner2.jpg', 'banner1.jpg', 'banner2.jpg'].map((img, index) => (
//               <SwiperSlide key={index}>
//                 <img
//                   src={`Banner/${img}`}
//                   alt={`Banner ${index}`}
//                   style={{
//                     width: '100%',
//                     height: 'auto',
//                     borderRadius: '8px',
//                     objectFit: 'cover',
//                     maxHeight: '600px'
//                   }}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </Grid>
//                         <Grid
//       item
//       xs={12}
//       sm={4}
//       sx={{
//         display: { xs: 'none', sm: 'flex' },
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//           <Stack spacing={2}>
//             <img
//               src="Banner/banner1.jpg"
//               alt="Banner1"
//               style={{ width: '100%', maxWidth: '250px', borderRadius: '8px' }}
//             />
//             <img
//               src="Banner/banner2.jpg"
//               alt="Banner1"
//               style={{ width: '100%', maxWidth: '250px', borderRadius: '8px' }}
//             />
//           </Stack>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

'use client';

import { Box, Container, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Banner() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 2 }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {/* Swiper chính chiếm 12 ở mobile, 8 ở md trở lên */}
          <Grid item xs={12} md={8}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 2500 }}
              pagination={{ clickable: true }}
              loop
              style={{ maxWidth: '700px', height: '100%' }}
            >
              {['banner1.jpg', 'banner2.jpg', 'banner1.jpg', 'banner2.jpg'].map((img, index) => (
                <SwiperSlide key={index}>
                  <Box
                    component="img"
                    src={`Banner/${img}`}
                    alt={`Banner ${index}`}
                    sx={{
                      width: '100%',
                      height: { xs: '200px', sm: '300px', md: '400px' },
                      borderRadius: 2,
                      objectFit: 'cover',
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>

          {/* Cột 2 ảnh đứng: ẩn trên xs, hiển thị từ sm trở lên */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {['banner1.jpg', 'banner2.jpg'].map((img, idx) => (
              <Box
                key={idx}
                component="img"
                src={`Banner/${img}`}
                alt={`Side Banner ${idx}`}
                sx={{
                  width: '100%',
                  height: { sm: '140px', md: '195px' },
                  borderRadius: 2,
                  objectFit: 'cover',
                }}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
