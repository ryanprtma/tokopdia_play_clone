import VideoThumbnail from '../components/Fragments/VideoThumbnail';
import Navbar from '../components/Fragments/Navbar'

import VideoThumbnailsLayouts from '../components/layouts/VideoThumbnailsLayouts';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <VideoThumbnailsLayouts>
                <VideoThumbnail />
            </VideoThumbnailsLayouts>
        </>
    )
}