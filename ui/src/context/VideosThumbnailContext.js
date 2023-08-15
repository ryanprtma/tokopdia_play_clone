import { createContext, useState, useEffect } from "react";

export const VideosThumbnailContext = createContext();

export const VideosThumbnailProvider = (props) => {
    const [videos, setVideos] = useState([]);

    const fetchWebApi = async () => {
        try {
            const apiUrl = "/api/videos";
            const response = await fetch(apiUrl, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const results = await response.json();
            setVideos(results.data.videos);
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    useEffect(() => {
        fetchWebApi();
    }, []);

    return (
        <>
            <VideosThumbnailContext.Provider value={
                { videos, setVideos }
            }>{props.children}</VideosThumbnailContext.Provider>
        </>
    )
};
