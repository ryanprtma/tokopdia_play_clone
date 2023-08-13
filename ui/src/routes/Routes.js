import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { VideosThumbnailProvider } from '../context/VideosThumbnailContext';
import HomePage from '../pages/home';

const Routes = () => {
    return (
        <>
            <Router>
                <VideosThumbnailProvider>
                    <Switch>
                        <Route path="/" exact>
                            <HomePage />
                        </Route>
                    </Switch>
                </VideosThumbnailProvider>
            </Router>
        </>
    )
}

export default Routes;