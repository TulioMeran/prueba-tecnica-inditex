import { Paper, Typography } from "@mui/material"

const Header = () => {
    return (
        <Paper sx={{ paddingY: 1 }} >
            <Typography sx={{ fontWeight: '600', fontSize: 20, color: '#17B1DE' }} >Podcaster</Typography>
        </Paper>
    )
}

export default Header