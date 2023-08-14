import { Container } from "@mui/material"

export default function VideoPlayerLayouts(props) {
    const { children } = props;
    return (
        <>
            <Container>
                {children}
            </Container>
        </>
    )
}