import { createContext, useState } from "react";

export const VideoDetailContext = createContext();

export const VideoDetailProvider = (props) => {
    const [video, setVideo] = useState([]);

    return (
        <>
            <VideoDetailContext.Provider value={
                { video, setVideo }
            }>{props.children}</VideoDetailContext.Provider>
        </>
    )
};
