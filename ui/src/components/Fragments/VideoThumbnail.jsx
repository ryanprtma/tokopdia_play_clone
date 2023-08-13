import React from 'react';

import { Card, CardActionArea, CardMedia, Chip, Stack, Typography } from '@mui/material';

import DiscountIcon from '@mui/icons-material/Discount';
import VisibilityIcon from '@mui/icons-material/Visibility';

function VideoThumbnail(props) {
    const { additionalProp } = props;
    return (
        <>
            <Card sx={{ maxWidth: 350, borderRadius: 3 }}>
                <div style={{ position: "relative" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="500"
                            image={additionalProp.thumbnail_url}
                            alt="video thumbnail"
                        />
                        <div style={{ position: "absolute", color: "white", top: 20, left: "5%", }}>
                            <Stack direction="row" spacing={1}>
                                <Chip label="LIVE" color="primary" size="small" sx={{
                                    borderRadius: 1, '& .MuiChip-label': {
                                        fontWeight: 'bold'
                                    },
                                    bgcolor: '#f94d63'
                                }} />

                                <Chip icon={<VisibilityIcon color="white" />} label="15k" size="small" sx={{
                                    borderRadius: 1,
                                    bgcolor: 'rgba(0,0,0,.54)',
                                    color: 'white'
                                }} />
                            </Stack>
                        </div>

                        <div style={{ position: "absolute", color: "white", bottom: 10, left: "5%", }}>
                            <Typography bgcolor={"#f94d63"} variant="caption" px={0.5} pt={0.5} pb={1} borderRadius={1} sx={{ fontSize: "0.6rem" }}><b>Hanya saat live</b></Typography>
                            <br />
                            <Chip icon={<DiscountIcon />} label="Diskon 10%" color="success" size="small" sx={{
                                borderRadius: 1, '& .MuiChip-label': {
                                    fontWeight: 'bold'
                                },
                                bgcolor: 'rgb(0, 170, 91)'
                            }} />
                            <br />
                            <br />
                            <Typography variant="h6"><strong>Title</strong></Typography>
                            <Typography variant="subtitle1">Store name</Typography>
                        </div>
                    </CardActionArea>
                </div >
            </Card >
        </>
    );
}

export default VideoThumbnail;
