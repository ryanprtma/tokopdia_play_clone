import { useState, useContext } from 'react';

import { Box, IconButton, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { CommentsContext } from '../../context/CommentsContext';

export default function Comment({ videoId }) {
    const { setIsCommented } = useContext(CommentsContext)
    const [form, setForm] = useState({
        username: '',
        comment: ''
    })

    const handleForm = e => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsCommented(true);

        try {
            const apiUrl = `http://localhost:3000/api/videos/${videoId}/comment`;
            await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
        } catch (error) {
            console.error('Error:', error);
            return null;
        }

        setForm(
            {
                username: '',
                comment: ''
            }
        )
    }

    return (
        <>
            <Box component="form" sx={{ padding: 0, display: 'flex', justifyContent: 'center' }}>
                <Box width="90%">
                    <form >
                        <Stack direction="row" spacing={2}>
                            <input style={{ padding: 10 }} name="username" type="text" className="outlined-rounded-input" placeholder="Username" onChange={handleForm} value={form.username} required />
                            <input style={{ padding: 10, width: '80%' }} name="comment" type="text" className="outlined-rounded-input" placeholder="Comment..." onChange={handleForm} value={form.comment} required />
                            <IconButton type='submit' onClick={handleSubmit}>
                                <SendIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Stack>
                    </form>
                </Box>
            </Box>
        </>
    )
}