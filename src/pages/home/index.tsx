import { Box, CircularProgress, SxProps } from "@mui/material"
import { useEffect, useState } from "react"
import Filter from "../../components/filter"
import PodCastItem from "../../components/podCastItem"
import Layout from "../../layout"
import { IPodcast } from '../../types/IPodcast'
import { useNavigate } from 'react-router-dom'
import { useGetAllPodCastQuery } from "../../api/services"
import { setCurrentPodcast } from "../../state/podcast"
import { useDispatch } from 'react-redux'

const HomePage = () => {

    let navigate = useNavigate()
    let dispatch = useDispatch()
    const { data, error, isLoading } = useGetAllPodCastQuery()

    const [podcastResult, setPodcastResult] = useState<IPodcast[]>(!isLoading ? data!.feed.entry : [])

    const handlerSearch = (value: string) => {
        const newList = data?.feed.entry.filter(p => p["im:name"].label.toLowerCase().includes(value) || p["im:artist"].label.toLowerCase().includes(value))
        if (newList) {
            setPodcastResult(newList)
        }
    }

    const handlerNavigationToPodCast = (item: IPodcast) => {
        dispatch(setCurrentPodcast(item))
        navigate(`/podcast/${item.id.attributes["im:id"]}`)
    }

    const sxStyles = () => {
        const container: SxProps = {
            display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: 5
        }

        const loading: SxProps = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }

        return {
            container,
            loading
        }
    }

    useEffect(() => {
        if (!isLoading) {
            setPodcastResult(data!.feed.entry)
        }
    }, [isLoading])

    return (
        <Layout>
            <div>
                <Filter podcastCount={podcastResult.length} handlerSearch={handlerSearch} />
                {!isLoading ?
                    <Box component='div' sx={sxStyles().container} >
                        {podcastResult.map(item =>
                            <PodCastItem
                                key={item.id.attributes["im:id"]}
                                title={item["im:name"].label}
                                img={item["im:image"][0].label}
                                author={item["im:artist"].label}
                                onClick={() => handlerNavigationToPodCast(item)} />)}
                    </Box>
                    : <Box component='div' sx={sxStyles().loading} >
                        <CircularProgress />
                    </Box>}

            </div>
        </Layout>
    )
}

export default HomePage