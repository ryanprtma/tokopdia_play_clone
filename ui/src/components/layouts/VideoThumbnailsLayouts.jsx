import { Box, Grid } from '@mui/material';

export default function Videos(props) {
    const { children } = props;
    return (
        <>
            <Box p={2} mt={18}>
                <Grid container spacing={2}>
                    {Array.from(Array(17)).map((_, index) => (
                        <Grid item xs={2} key={index}>
                            <Box >
                                {children}
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )

}