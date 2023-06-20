import { Box, Paper, Typography, SxProps } from "@mui/material"
import { useSelector } from "react-redux"
import PodcastLayout from "../../layout/podcast"
import { selectCurrentEpisode, selectCurrentPodcast } from "../../state/podcast"

const EpisodePage = () => {
    const currentPodCast = useSelector(selectCurrentPodcast)
    const currentEpisode = useSelector(selectCurrentEpisode)

    const sxStyles = () => {

        const container: SxProps = {
            width: '100%', display: 'flex', flexDirection: 'column'
        }

        const labelName: SxProps = {
            fontWeight: '700', fontSize: '1.5rem'
        }

        const description: SxProps = {
            fontStyle: 'italic',
            fontSize: '0.8rem',
            marginTop: 1
        }

        const sponsorName: SxProps = {
            ...description,
            marginTop: 2
        }

        const audio: SxProps = {
            width: '90%', alignSelf: 'center', marginBottom: 25
        }


        return {
            container,
            labelName,
            description,
            sponsorName,
            audio
        }
    }

    return (
        <PodcastLayout podcastItem={currentPodCast} >
            <Paper sx={sxStyles().container} >
                <Box component='div' sx={{ padding: 5 }} >
                    <Typography sx={sxStyles().labelName} > {currentEpisode.collectionName}</Typography>
                    <Typography sx={sxStyles().description} variant="body1" >{currentEpisode.description}</Typography>
                    <Typography sx={sxStyles().sponsorName}  >This episode is sponsored by {currentEpisode.collectionName}. </Typography>
                </Box>

                <Box component='audio' controls muted controlsList="nodownload noplaybackrate" sx={sxStyles().audio}  >
                    <source type="audio/mpeg" src={currentEpisode.episodeUrl} />
                </Box>
            </Paper>
        </PodcastLayout>

    )
}

export default EpisodePage