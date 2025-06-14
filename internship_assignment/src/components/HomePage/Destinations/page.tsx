'use client';

import { useDestinations } from '@/hooks/useDestinations';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Skeleton,
  Link,
} from '@mui/material';

export default function Destinations() {
  const { data, isLoading } = useDestinations();

  return (
    <Box my={10} px={{ xs: 2, md: 6 }}>
      {/* Section Title */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight="bold" color="primary.main">
          Explore Most Popular Destinations
        </Typography>
        <Typography variant="body1" mt={1} color="text.secondary">
          Plan your perfect trip with our most loved and best-selling tour packages.
        </Typography>
      </Box>

      {/* Flex container with fixed-width cards */}
      <Box display="flex" flexWrap="wrap" justifyContent="space-between" gap={3} marginLeft={5} marginRight={5}>
        {(isLoading ? Array(6).fill(null) : data).map((item: any, index: number) => (
          <Box
            key={index}
            sx={{
              width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 20px)' },
              mb: 4,
            }}
          >
            <Card
            sx={{
              width: '95%', // Reduce card width
              margin: 'auto', // Center the card
              borderRadius: 3,
              boxShadow: 3,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-4px)',
              },
            }}
          >
              {isLoading ? (
                <>
                  <Skeleton variant="rectangular" height={180} />
                  <CardContent>
                    <Skeleton width="60%" height={30} />
                    <Skeleton width="40%" height={20} />
                  </CardContent>
                </>
              ) : (
                <>
                  <CardMedia
                    component="img"
                    height="180"
                    image={item.image}
                    alt={item.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Link
                      href="#"
                      underline="hover"
                      color="primary"
                      fontWeight="bold"
                      variant="body1"
                    >
                      {item.name.toUpperCase()}
                    </Link>
                    <Typography color="text.secondary" fontWeight={500} mt={0.5}>
                      Starting From{' '}
                      <span style={{ color: '#00897B', fontWeight: 600 }}>
                        ₹{item.price}/-
                      </span>
                    </Typography>
                  </CardContent>
                </>
              )}
            </Card>
          </Box>
        ))}
      </Box>
      <div className="flex justify-end gap-4 mt-10">
        <button className="bg-gray-300 hover:bg-gray-400 p-3 rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="bg-yellow-400 hover:bg-yellow-500 p-3 rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </Box>
  );
}
