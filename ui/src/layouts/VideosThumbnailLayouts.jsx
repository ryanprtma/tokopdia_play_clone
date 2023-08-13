import { Children, cloneElement } from 'react';
import { Box, Grid } from '@mui/material';

export default function Videos(props) {
    const { children, data } = props;

    const modifiedChildren = (data) => {
        const child = Children.map(children, (child) => {
            return cloneElement(child, { additionalProp: data });
        });

        return child;
    }

    return (
        <>
            <Box p={2} mt={18}>
                <Grid container spacing={2}>
                    {data.map((value, index) => (
                        <Grid item xs={2} key={index}>
                            <Box >
                                {modifiedChildren(value)}
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )

}