import { FC } from "react"
import { Box, Typography } from '@mui/material'

interface FilterProps {
    podcastCount: number
}
const Filter: FC<FilterProps> = ({ podcastCount }) => {
    return (
        <Box component='div'
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginTop: 2
            }}>
            <Typography sx={{
                color: 'white',
                backgroundColor: '#17B1DE',
                borderRadius: 5,
                width: 40,
                textAlign: 'center',
                marginInline: 1,
                fontWeight: '600'
            }} >{podcastCount}</Typography>
            <input style={{ padding: 10, width: 250, borderRadius: 5, borderBlockColor: 'gray' }} placeholder="Filter podcasts..." />
        </Box>
    )
}

export default Filter