import { Paper, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    let navigate = useNavigate()
    return (
        <Paper sx={{ paddingY: 1 }} >
            <Typography sx={{ fontWeight: '600', fontSize: 20, color: '#17B1DE' }} onClick={() => {
                navigate("/")
            }} >Podcaster</Typography>
        </Paper>
    )
}

export default Header