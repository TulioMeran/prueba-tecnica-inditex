import { Box, Paper, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { podcastContext } from '../../contexts/podcast';
import Layout from '../../layout';
import { IEpisodeResponse } from '../../types/iEpisodeResponse';
const PodCastPage = () => {

    const params = useParams();
    const { currentPodCast } = useContext(podcastContext)
    const [episodeResponse, setEpisodeResponse] = useState<IEpisodeResponse>({} as IEpisodeResponse)

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
                    <Box component='img' sx={{ width: 200, borderRadius: 2 }} src={currentPodCast['im:image'][0].label} />
                    <Box component='div' sx={{ alignSelf: 'start', paddingLeft: 2 }} >
                        <Typography sx={{ fontWeight: '700' }} >{currentPodCast['im:name'].label}</Typography>
                        <Typography sx={{ fontStyle: 'italic' }} >by {currentPodCast['im:artist'].label}</Typography>
                    </Box>
                    <Box component='div' sx={{ paddingLeft: 1 }} >
                        <Typography sx={{ fontWeight: '700' }}>Description:</Typography>
                        <Typography sx={{ fontStyle: 'italic', fontSize: 13, marginTop: 1 }} >{currentPodCast.summary.label}</Typography>
                    </Box>

                </Paper>
                {episodeResponse.results && <Box component='div'>
                    <Paper sx={{ marginY: 2 }} >
                        <Typography sx={{ padding: 1, fontWeight: '700' }} >Episodes: {episodeResponse.resultCount}</Typography>
                    </Paper>
                    <Paper>
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Duration</th>
                                </tr>

                            </thead>
                            <tbody>
                                {episodeResponse.results.map(item => (
                                    <tr>
                                        <td>{item.trackName}</td>
                                        <td>{item.releaseDate}</td>
                                        <td>{item.trackTimeMillis}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Paper>
                </Box>}


            </Box>
        </Layout>
    )
}

export default PodCastPage