import YouTube from 'react-youtube';

export default function YoutubePlayer({ videoUrl }) {
    const videoUrlArr = (videoUrl ?? "/").split("/");
    const videoId = videoUrlArr[videoUrlArr.length - 1]

    const options = {
        height: '720',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };
    return (
        <>
            <YouTube videoId={videoId} opts={options} />
        </>
    )
}