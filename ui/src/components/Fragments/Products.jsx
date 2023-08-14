import { Box, Card, CardActionArea, CardMedia, CardContent, Grid, Stack, Typography } from '@mui/material';
import { ProductsContext } from '../../context/ProductsContext';
import { useContext } from 'react';
export default function Products({ videoId }) {
    const { setVideoId, products } = useContext(ProductsContext);
    setVideoId(videoId);
    return (
        <>
            <Stack sx={{ flexBasis: '10%', position: 'relative' }}>
                <Box sx={{
                    maxHeight: 'auto', overflowY: 'scroll', position: 'relative'
                }} >
                    <Grid container spacing={{ xs: 2, md: 3 }} sx={{ zIndex: 1 }}>
                        {products.map((value, index) => (
                            <Grid item xs={12} key={index}>
                                <Box>
                                    <Card sx={{ maxWidth: 'auto', borderRadius: 3 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="auto"
                                                width="100%"
                                                image={'https://source.unsplash.com/random'}
                                                alt="product"
                                                sx={{
                                                    borderRadius: 1
                                                }}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h7" >
                                                    <b>{value.price.toLocaleString('id-ID', {
                                                        style: 'currency',
                                                        currency: 'IDR'
                                                    })}</b>
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {value.title}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card >
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <div style={{ position: "absolute", bottom: 0, width: '100%', height: '20%' }}>
                    <Box sx={{ height: '100%', background: 'linear-gradient(to top, #000000, transparent)' }}></Box>
                </div>
            </Stack >
        </>
    )
}