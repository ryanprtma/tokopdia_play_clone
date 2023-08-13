import VideoThumbnail from '../components/Fragments/VideoThumbnail';
import Navbar from '../components/Fragments/Navbar'

import VideoThumbnailsLayouts from '../layouts/VideosThumbnailLayouts'

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