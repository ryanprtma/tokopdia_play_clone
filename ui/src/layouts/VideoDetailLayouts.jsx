import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import BluredBackground from '../components/Fragments/BluredBackground';
import Comment from '../components/Fragments/Comment';

const VideoDetailLayouts = (props) => {
    const { children, data } = props;

    return (
        <Box>
            <BluredBackground imgUrl={data.thumbnail_url}/>
            <Box sx={{ position: 'absolute', height: '100%', zIndex: 2, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <strong>Title</strong>
                        </Typography>
                        <Typography variant="h6">
                            <strong>Store Name</strong>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box px={10} paddingTop={10} paddingBottom={2} sx={{ display: 'flex', flexDirection: 'row', maxHeight: '75vh' }}>
                    {children}
                </Box >
                <Comment />
            </Box>
        </Box>
    );
};

export default VideoDetailLayouts;