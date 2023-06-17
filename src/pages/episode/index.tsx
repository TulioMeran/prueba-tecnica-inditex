import { Box, Paper, Typography } from "@mui/material"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { podcastContext } from "../../contexts/podcast"
import PodcastLayout from "../../layout/podcast"

const EpisodePage = () => {
    const { currentEpisode, currentPodCast } = useContext(podcastContext)

    return (
        <PodcastLayout podcastItem={currentPodCast} >
            <Paper sx={{ width: '100%', display: 'flex', flexDirection: 'column' }} >
                <Box component='div' sx={{ padding: 5 }} >
                    <Typography sx={{ fontWeight: '700', fontSize: '1.5rem' }} > {currentEpisode.collectionName}</Typography>
                    <Typography sx={{ fontStyle: 'italic', fontSize: '0.8rem', marginTop: 1 }} variant="body1" >{currentEpisode.description}</Typography>
                    <Typography sx={{ fontStyle: 'italic', fontSize: '0.8rem', marginTop: 2 }}  >This episode is sponsored by {currentEpisode.collectionName}. </Typography>
                </Box>

                <audio controls muted controlsList="nodownload noplaybackrate" style={{ width: '90%', alignSelf: 'center', marginBottom: 25 }}  >
                    <source type="audio/mpeg" src={currentEpisode.episodeUrl} />
                </audio>
            </Paper>
        </PodcastLayout>

    )
}

export default EpisodePage