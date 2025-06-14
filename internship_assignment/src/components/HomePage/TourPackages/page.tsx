"use client";

import { useTopPackages } from "@/hooks/useTopPackages";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Skeleton,
  Button,
  Link,
  Stack,
} from "@mui/material";

export default function TopPackages() {
  const { data, isLoading } = useTopPackages();

  return (
    <Box my={10} px={{ xs: 2, md: 6 }}>
      {/* Section Title */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight="bold" color="primary.main">
          Top Selling Tour Packages of India
        </Typography>
        <Typography variant="body1" mt={1} color="text.secondary">
          Stay updated with our latest news and happenings through Informe.
        </Typography>
      </Box>

      {/* Flex container with responsive cards */}
      <Box
        display="flex "
        flexWrap="wrap"
        justifyContent="space-between"
        gap={3}
        mx={{ xs: 1, sm: 4, md: 6 }}
      >
        {(isLoading ? Array(6).fill(null) : data).map(
          (pkg: any, index: number) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: "100%",
                  sm: "calc(50% - 16px)",
                  md: "calc(33.33% - 20px)",
                },
                mb: 4,
              }}
            >
              <Card
                sx={{
                  width: "95%",
                  margin: "auto",
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {isLoading ? (
                  <>
                    <Skeleton variant="rectangular" height={180} />
                    <CardContent>
                      <Skeleton width="60%" height={30} />
                      <Skeleton width="40%" height={20} />
                      <Skeleton width="50%" height={36} sx={{ mt: 2 }} />
                    </CardContent>
                  </>
                ) : (
                  <>
                    <CardMedia
                      component="img"
                      height="180"
                      image={pkg.image}
                      alt={pkg.title}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent>
                      <Stack spacing={2} alignItems="center">
                        <Link
                          href="#"
                          underline="hover"
                          color="primary"
                          fontWeight="bold"
                          variant="body1"
                        >
                          {pkg.title.toUpperCase()}
                        </Link>

                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#20b2aa",
                            borderRadius: 5,
                            px: 4,
                            "&:hover": {
                              backgroundColor: "#179c96",
                            },
                          }}
                        >
                          View Details
                        </Button>
                      </Stack>
                    </CardContent>
                  </>
                )}
              </Card>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
}
