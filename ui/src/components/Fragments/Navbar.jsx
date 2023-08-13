import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { AppBar, Chip, IconButton, Stack, Toolbar, Typography } from '@mui/material';

export default function ButtonAppBar() {
    const [currentChip, setCurrentChip] = useState("/");
    const currentPath = window.location.pathname;
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
                <IconButton color="inherit">
                    <SearchIcon />
                </IconButton>
            </Toolbar>
            <Toolbar>
                <Stack direction="row" spacing={1}>
                    {currentChip === currentPath ? <Chip
                        label="Clickable Link"
                        component="a"
                        href="/"
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
                    /> :
                        <Chip
                            label="Clickable Link"
                            component="a"
                            href="/"
                            variant="outlined"
                            sx={{
                                borderRadius: 5,
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                paddingTop: 3,
                                paddingBottom: 3,
                                paddingRight: 1.5,
                                paddingLeft: 1.5,
                                color: "white"
                            }}
                            clickable
                        />}
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
