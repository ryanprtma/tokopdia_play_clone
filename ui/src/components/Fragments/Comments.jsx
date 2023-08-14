import { Avatar, Box, Paper, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { CommentsContext } from '../../context/CommentsContext';
import { useContext } from 'react';

export default function Comments({ videoId }) {
    const { setVideoId, comments } = useContext(CommentsContext);
    setVideoId(videoId);

    return (
        <>
            <Box flexBasis="30%" sx={{ maxHeight: 'auto', overflowY: 'scroll', overflowX: 'hidden' }} borderRadius={5}>
                <Paper>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {comments.length === 0 ?
                            <Box display={'flex'} alignItems="center" sx={{ height: "75vh" }}>
                                <ListItemText sx={{ textAlign: 'center' }} secondary={"belum ada komentar"} />
                            </Box>
                            : comments.map((value, index) => (
                                <ListItem key={index} sx={{ display: 'flex' }} alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar>{'https://source.unsplash.com/random'}</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText sx={{ textAlign: 'justify' }} primary={value.username} secondary=
                                        {
                                            <>
                                                <Typography variant='caption'>x jam yg lalu</Typography>
                                                <br />
                                                {value.comment}
                                            </>
                                        } />
                                </ListItem>
                            ))}
                    </List>
                </Paper>
            </Box>
        </>
    )
}