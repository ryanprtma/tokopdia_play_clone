import { createContext, useState, useEffect } from "react";

export const CommentsContext = createContext();

export const CommentsProvider = (props) => {
    const [videoId, setVideoId] = useState('')
    const [comments, setComments] = useState([]);

    const fetchWebApi = async (videoId) => {
        try {
            const apiUrl = `http://localhost:3000/api/videos/${videoId}/comments`;
            const response = await fetch(apiUrl, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const results = await response.json();
            setComments(await results.data.comments);
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    useEffect(() => {
        fetchWebApi(videoId);
    }, [videoId]);

    return (
        <>
            <CommentsContext.Provider value={
                { comments, setComments, videoId, setVideoId }
            }>{props.children}</CommentsContext.Provider>
        </>
    )
};
