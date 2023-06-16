import { Box, Paper, Typography } from "@mui/material"
import { FC } from "react"

interface PodCastItemProps {
    img: string;
    author: string;
    title: string;
    onClick: () => void;
}

const PodCastItem: FC<PodCastItemProps> = ({ img, author, title, onClick }) => {

    return (
        <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 10, width: 300, marginX: 2 }} onClick={onClick} >
            <Box component='img' src={img} sx={{ width: 100, borderRadius: 20, marginTop: -4 }} />
            <Typography sx={{ textTransform: 'uppercase', fontWeight: '600', textAlign: 'center' }} >{title}</Typography>
            <Typography sx={{ marginBottom: 2 }} >Author: {author}</Typography>
        </Paper>
    )
}

export default PodCastItem