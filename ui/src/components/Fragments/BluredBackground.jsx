import { Paper } from '@mui/material'

export default function BluredBackground({ imgUrl }) {
    return (
        <>
            <Paper sx={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', filter: 'blur(8px)', height: '100%', width: '100%', position: 'absolute' }}>
            </Paper>
        </>
    )
}