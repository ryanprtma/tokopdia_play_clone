import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { AppBar, Chip, IconButton, Stack, Toolbar, Typography } from '@mui/material';

export default function ButtonAppBar() {
    return (
        <AppBar position="fixed" sx={{ padding: 1, backgroundColor: "rgb(40, 40, 47)" }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                >
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                    <strong>Play</strong>
                </Typography>
                <Link to="/search">
                    <IconButton >
                        <SearchIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Link>
            </Toolbar>
            <Toolbar>
                <Stack direction="row" spacing={1}>
                    <Chip
                        label="Explore"
                        component="a"
                        variant="outlined"
                        color="success"
                        sx={{
                            borderRadius: 5,
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingRight: 1.5,
                            paddingLeft: 1.5
                        }}
                        clickable
                    />
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
