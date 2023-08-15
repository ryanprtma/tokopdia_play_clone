import { BrowserRouter as Router, Routes as Broutes, Route } from 'react-router-dom';
import { VideosThumbnailProvider } from '../context/VideosThumbnailContext';
import { VideoDetailProvider } from '../context/VideoDetailContext';
import { CommentsProvider } from '../context/CommentsContext';
import { ProductsProvider } from '../context/ProductsContext';

import HomePage from '../pages/home';
import VideoDetailPage from '../pages/videoDetail';
import SearcPage from '../pages/search'

const Routes = () => {
    return (
        <>
            <Router>
                <VideosThumbnailProvider>
                    <VideoDetailProvider>
                        <CommentsProvider>
                            <ProductsProvider>
                                <Broutes>
                                    <Route exact path="/" element={<HomePage />} />
                                    <Route exact path="/:id" element={<VideoDetailPage />} />
                                    <Route exact path="/search" element={<SearcPage />} />
                                </Broutes>
                            </ProductsProvider>
                        </CommentsProvider>
                    </VideoDetailProvider>
                </VideosThumbnailProvider>

            </Router>
        </>
    )
}

export default Routes;