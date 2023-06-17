import { Box, Paper, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { podcastContext } from '../../contexts/podcast';
import { Episode, IEpisodeResponse } from '../../types/iEpisodeResponse';
import { format } from 'date-fns'
import { millisToMinutesAndSeconds } from '../../utils';
import PodcastLayout from '../../layout/podcast';

const PodCastPage = () => {

    const params = useParams();
    const { currentPodCast, setCurrentEpisode } = useContext(podcastContext)
    const [episodeResponse, setEpisodeResponse] = useState<IEpisodeResponse>({} as IEpisodeResponse)
    let navigate = useNavigate()

    useEffect(() => {

        fetch(`https://itunes.apple.com/lookup?id=${params.podcastId}&media=podcast&entity=podcastEpisode&limit=20`)
            .then(response => response.text())
            .then(data => {
                console.log(JSON.parse(data))
                setEpisodeResponse(JSON.parse(data))
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const handlerNavigateToEpisode = (item: Episode) => {
        setCurrentEpisode(item)
        navigate(`/podcast/${params.podcastId}/episode/${item.episodeGuid}`)
    }

    return (
        <PodcastLayout podcastItem={currentPodCast} >
            <div>
                <Paper sx={{ marginY: 2 }} >
                    <Typography sx={{ padding: 1, fontWeight: '700' }} >Episodes: {episodeResponse.resultCount}</Typography>
                </Paper>
                {episodeResponse.results ? <Paper>
                    <table style={{ width: '100%' }} >
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'left' }} >Title</th>
                                <th style={{ textAlign: 'left' }} >Date</th>
                                <th style={{ textAlign: 'left' }} >Duration</th>
                            </tr>

                        </thead>
                        <tbody>
                            {episodeResponse.results.map(item => (
                                <tr>
                                    <Box component='td' sx={{
                                        color: 'blue', ":hover": {
                                            cursor: 'pointer'
                                        }
                                    }} onClick={() => handlerNavigateToEpisode(item)} > {item.trackName}</Box>
                                    <td>{format(new Date(item.releaseDate), "dd/MM/yyyy")}</td>
                                    <td style={{ textAlign: 'center' }} >{millisToMinutesAndSeconds(item.trackTimeMillis)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Paper> : null}
            </div>



        </PodcastLayout>
    )
}

export default PodCastPage