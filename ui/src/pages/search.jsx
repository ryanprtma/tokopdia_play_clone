import { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Stack } from '@mui/material';
import VideoThumbnail from '../components/Fragments/VideoThumbnail';

import VideosThumbnailLayouts from '../layouts/VideosThumbnailLayouts'

import SearchIcon from '@mui/icons-material/Search';

export default function SearchPage() {
    const [videos, setVideos] = useState([]);
    const [search, setSearch] = useState('');

    const handleForm = e => {
        setSearch(e.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const apiUrl = `/api/videos?search=${search}`;
            const response = await fetch(apiUrl, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const results = await response.json();

            setVideos(results.data.videos);
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }

    return (
        <>
            <AppBar position="fixed" sx={{ padding: 1, backgroundColor: "rgb(40, 40, 47)" }}>
                <Toolbar>
                    <Box width="90%">
                        <form >
                            <IconButton type='submit' onClick={handleSubmit}>
                                <SearchIcon sx={{ color: 'white' }} />
                            </IconButton>
                            <input style={{ padding: 10, width: "80%" }} name="search" type="text" className="outlined-rounded-input" placeholder="Search" onChange={handleForm} value={search} required />
                        </form>
                    </Box>
                </Toolbar>
            </AppBar>
            <VideosThumbnailLayouts data={videos}>
                <VideoThumbnail />
            </VideosThumbnailLayouts>
        </>
    )
}