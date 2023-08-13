import { useContext } from 'react';
import VideoThumbnail from '../components/Fragments/VideoThumbnail';
import Navbar from '../components/Fragments/Navbar'

import VideosThumbnailLayouts from '../layouts/VideosThumbnailLayouts'

import { VideosThumbnailContext } from '../context/VideosThumbnailContext';

export default function HomePage() {
    const { videos } = useContext(VideosThumbnailContext);
    const data = videos;
    return (
        <>
            <Navbar />
            <VideosThumbnailLayouts data={data}>
                <VideoThumbnail />
            </VideosThumbnailLayouts>
        </>
    )
}