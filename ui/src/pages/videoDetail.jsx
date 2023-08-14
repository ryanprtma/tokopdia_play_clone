import { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";

import VideoDetailLayouts from '../layouts/VideoDetailLayouts';
import VideoPlayerLayouts from '../layouts/VideoPlayerLayouts';

import Products from '../components/Fragments/Products';
import YoutubePlayer from '../components/Fragments/YoutubePlayer';
import Comments from '../components/Fragments/Comments';

import { VideoDetailContext } from '../context/VideoDetailContext';

const VideoDetailPage = () => {
    const { id } = useParams();
    const { video, setVideo } = useContext(VideoDetailContext);

    const fetchWebApi = async (videoId) => {
        try {
            const apiUrl = `http://localhost:3000/api/videos/${videoId}`;
            const response = await fetch(apiUrl, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const results = await response.json();
            setVideo(await results.data.video);
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    useEffect(() => {
        fetchWebApi(id);
    }, [id]);

    return (
        <>
            <VideoDetailLayouts data={video}>
                <Products videoId={id} />
                <VideoPlayerLayouts>
                    <YoutubePlayer videoUrl={video.url} />
                </VideoPlayerLayouts>
                <Comments videoId={id} />
            </VideoDetailLayouts>
        </>
    );
};

export default VideoDetailPage;