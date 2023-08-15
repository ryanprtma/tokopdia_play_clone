import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Card, CardActionArea, CardMedia, Chip, Stack, Typography } from '@mui/material';

import DiscountIcon from '@mui/icons-material/Discount';
import VisibilityIcon from '@mui/icons-material/Visibility';

function VideoThumbnail(props) {
    const { additionalProp } = props;
    const [product, setProduct] = useState();

    const fetchWebApi = async (videoId) => {
        try {
            const apiUrl = `http://localhost:3000/api/videos/${videoId}/products`;
            const response = await fetch(apiUrl, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const results = await response.json();
            setProduct(results.data.products);
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    useEffect(() => {
        fetchWebApi(additionalProp._id);
    }, [additionalProp._id]);
    return (
        <>
            <Card sx={{ maxWidth: 350, borderRadius: 3 }}>
                <div style={{ position: "relative" }}>
                    <Link to={`/play/channels/${additionalProp._id}`}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="515"
                                image={additionalProp.thumbnail_url}
                                alt="video thumbnail"
                            />
                            <div style={{ position: "absolute", color: "white", top: 20, left: "5%", }}>
                                <Stack direction="row" spacing={1}>
                                    {/* <Chip label="LIVE" color="primary" size="small" sx={{
                                        borderRadius: 1, '& .MuiChip-label': {
                                            fontWeight: 'bold'
                                        },
                                        bgcolor: '#f94d63'
                                    }} /> */}

                                    <Chip icon={<VisibilityIcon color="white" />} label={additionalProp.views ?? 0} size="small" sx={{
                                        borderRadius: 1,
                                        bgcolor: 'rgba(0,0,0,0.54)',
                                        color: 'white'
                                    }} />
                                </Stack>
                            </div>

                            <div style={{ position: "absolute", color: "white", bottom: 10, left: "5%", }}>
                                <Typography bgcolor={"#f94d63"} variant="caption" px={0.5} pt={0.5} pb={1} borderRadius={1} sx={{ fontSize: "0.6rem" }}><b>Hanya saat live</b></Typography>
                                <br />
                                <Chip icon={<DiscountIcon />} label={`${!product ? "Harga termurah" : (!product[0].discount ? "Harga termurah" : product[0].discount + "%")}`} color="success" size="small" sx={{
                                    borderRadius: 1, '& .MuiChip-label': {
                                        fontWeight: 'bold'
                                    },
                                    bgcolor: 'rgb(0, 170, 91)'
                                }} />
                                <br />
                                <br />
                                <Typography variant="h6"><strong>{additionalProp.title ?? "Title"}</strong></Typography>
                                <Typography variant="subtitle1">{additionalProp.store_name ?? "Store Name"}</Typography>
                            </div>
                        </CardActionArea>
                    </Link>
                </div >
            </Card >
        </>
    );
}

export default VideoThumbnail;
