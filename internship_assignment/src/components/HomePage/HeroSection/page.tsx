'use client';

import { Box, Button, Typography } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        backgroundImage: `url("https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Main content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          pl: { xs: 3, sm: 6, md: 12 },
          pr: { xs: 3, sm: 6, md: 8 },
          maxWidth: '800px',
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          Discover Your Next Adventure
        </Typography>
        <Typography
          variant="h6"
          fontWeight={500}
          mb={4}
          sx={{
            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
          }}
        >
          Choose from our curated experiences, customized for every kind of traveler.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FFD600',
            color: 'black',
            fontWeight: 700,
            width: 'fit-content',
            px: 4,
            py: 1.5,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            '&:hover': {
              backgroundColor: '#FFCA28',
            },
          }}
        >
          BOOK NOW
        </Button>
      </Box>

      {/* Bottom bar */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: { xs: '100%', sm: '80%', md: '40%' },
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 1.5, sm: 4, md: 6 },
          py: 2.5,
          px: 2,
          textAlign: 'center',
          zIndex: 2,
        }}
      >
        <Typography fontWeight={600} fontSize={{ xs: '0.9rem', sm: '1rem' }}>
          Easy Booking
        </Typography>
        <Typography fontWeight={600} fontSize={{ xs: '0.9rem', sm: '1rem' }}>
          Curated Destinations
        </Typography>
        <Typography fontWeight={600} fontSize={{ xs: '0.9rem', sm: '1rem' }}>
          Trusted Support
        </Typography>
      </Box>

      {/* Decorative icon (sunburst) */}
     
    </Box>
  );
}
