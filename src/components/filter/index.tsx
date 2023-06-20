import { FC } from "react"
import { Box, SxProps, Typography } from '@mui/material'

interface FilterProps {
    podcastCount: number
    handlerSearch: (value: string) => void
}
const Filter: FC<FilterProps> = ({ podcastCount, handlerSearch }) => {

    const sxStyles = () => {

        const container: SxProps = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: 2,
            marginRight: { md: 15, xs: 2 }
        }

        const podCastCountLabel: SxProps = {
            color: 'white',
            backgroundColor: '#17B1DE',
            borderRadius: 5,
            width: 40,
            textAlign: 'center',
            marginInline: 1,
            fontWeight: '600'
        }

        const inputStyle: SxProps = {
            padding: 1, width: 250, borderRadius: 5, borderBlockColor: 'gray'
        }

        return {
            container,
            podCastCountLabel,
            inputStyle
        }
    }

    return (
        <Box component='div'
            sx={sxStyles().container}>
            <Typography sx={sxStyles().podCastCountLabel} >{podcastCount}</Typography>
            <Box component='input'
                sx={sxStyles().inputStyle}
                placeholder="Filter podcasts..."
                onChange={(event: any) => handlerSearch(event.target.value)} />
        </Box>
    )
}

export default Filter