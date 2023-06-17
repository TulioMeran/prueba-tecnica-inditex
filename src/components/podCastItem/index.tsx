import { Box, Paper, SxProps, Typography } from "@mui/material"
import { FC } from "react"

interface PodCastItemProps {
    img: string;
    author: string;
    title: string;
    onClick: () => void;
}

const PodCastItem: FC<PodCastItemProps> = ({ img, author, title, onClick }) => {

    const sxStyles = () => {

        const container: SxProps = {
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 10, width: 300, marginX: 2
        }

        const photo: SxProps = {
            width: 100,
            borderRadius: 20,
            marginTop: -4
        }

        const title: SxProps = {
            textTransform: 'uppercase',
            fontWeight: '600',
            textAlign: 'center'
        }

        return {
            container,
            photo,
            title
        }
    }

    return (
        <Paper elevation={3} sx={sxStyles().container} onClick={onClick} >
            <Box component='img' src={img} sx={sxStyles().photo} />
            <Typography sx={sxStyles().title} >{title}</Typography>
            <Typography sx={{ marginBottom: 2 }} >Author: {author}</Typography>
        </Paper>
    )
}

export default PodCastItem