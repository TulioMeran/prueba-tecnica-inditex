import { Box, Paper, Typography } from "@mui/material"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import Layout from ".."
import PodCastItem from "../../components/podCastItem"
import { IPodcast } from "../../types/IPodcast"

interface PodcastLayoutProps {
    children: React.ReactElement;
    podcastItem: IPodcast
}
const PodcastLayout: FC<PodcastLayoutProps> = ({ children, podcastItem }) => {

    let navigate = useNavigate()

    const handlerNavigateToPodCaster = () => {
        navigate(`/podcast/${podcastItem.id.attributes["im:id"]}`)
    }

    return (
        <Layout>
            <Box component='div' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} >
                <Paper sx={{
                    width: '30%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly'
                }}
                    elevation={3} >
                    <Box component='img' sx={{ width: 200, borderRadius: 2 }} src={podcastItem['im:image'][0].label} onClick={handlerNavigateToPodCaster} />
                    <Box component='div' sx={{ alignSelf: 'start', paddingLeft: 2 }} >
                        <Typography sx={{ fontWeight: '700' }} onClick={handlerNavigateToPodCaster} >{podcastItem['im:name'].label}</Typography>
                        <Typography sx={{ fontStyle: 'italic' }} onClick={handlerNavigateToPodCaster} >by {podcastItem['im:artist'].label}</Typography>
                    </Box>
                    <Box component='div' sx={{ padding: 1 }} >
                        <Typography sx={{ fontWeight: '700' }}>Description:</Typography>
                        <Typography sx={{ fontStyle: 'italic', fontSize: 13, marginTop: 1 }} >{podcastItem.summary.label}</Typography>
                    </Box>

                </Paper>
                <Box component='div' sx={{ width: '50%' }} >
                    {children}
                </Box>
            </Box>
        </Layout>
    )

}

export default PodcastLayout