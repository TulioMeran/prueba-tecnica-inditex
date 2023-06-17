import { Paper, SxProps, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    let navigate = useNavigate()

    const sxStyles = () => {
        const titleStyle: SxProps = {
            fontWeight: '600',
            fontSize: '1.3rem',
            color: '#17B1DE',
            marginLeft: 1
        }

        return {
            titleStyle
        }
    }

    return (
        <Paper sx={{ paddingY: 1 }} >
            <Typography sx={sxStyles().titleStyle} onClick={() => {
                navigate("/")
            }} >Podcaster</Typography>
        </Paper>
    )
}

export default Header