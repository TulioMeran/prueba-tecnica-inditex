import { Box, Paper, SxProps, Typography } from "@mui/material"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import Layout from ".."
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

    const sxStyles = () => {

        const container: SxProps = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 3
        }

        const paper: SxProps = {
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        }

        const photo: SxProps = {
            width: 200, borderRadius: 2
        }

        const labelsContainer: SxProps = {
            alignSelf: 'start',
            paddingLeft: 2
        }

        const summary: SxProps = {
            fontStyle: 'italic',
            fontSize: 13,
            marginTop: 1
        }

        return {
            container,
            paper,
            photo,
            summary,
            labelsContainer
        }
    }

    return (
        <Layout>
            <Box component='div' sx={sxStyles().container} >
                <Paper sx={sxStyles().paper}
                    elevation={3} >
                    <Box component='img' sx={sxStyles().photo} src={podcastItem['im:image'][0].label} onClick={handlerNavigateToPodCaster} />
                    <Box component='div' sx={sxStyles().labelsContainer} >
                        <Typography sx={{ fontWeight: '700' }} onClick={handlerNavigateToPodCaster} >{podcastItem['im:name'].label}</Typography>
                        <Typography sx={{ fontStyle: 'italic' }} onClick={handlerNavigateToPodCaster} >by {podcastItem['im:artist'].label}</Typography>
                    </Box>
                    <Box component='div' sx={{ padding: 1 }} >
                        <Typography sx={{ fontWeight: '700' }}>Description:</Typography>
                        <Typography sx={sxStyles().summary} >{podcastItem.summary.label}</Typography>
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