import { Box, SxProps } from "@mui/material"
import { useContext, useState } from "react"
import Filter from "../../components/filter"
import PodCastItem from "../../components/podCastItem"
import { podcastContext } from "../../contexts/podcast"
import Layout from "../../layout"
import { IPodcast } from '../../types/IPodcast'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    let navigate = useNavigate()
    const { podcasts, setCurrentPodCast } = useContext(podcastContext)
    const [podcastResult, setPodcastResult] = useState<IPodcast[]>(podcasts)

    const handlerSearch = (value: string) => {
        const newList = podcasts.filter(p => p["im:name"].label.toLowerCase().includes(value) || p["im:artist"].label.toLowerCase().includes(value))
        setPodcastResult(newList)
    }

    const handlerNavigationToPodCast = (item: IPodcast) => {
        setCurrentPodCast(item)
        navigate(`/podcast/${item.id.attributes["im:id"]}`)
    }

    const sxStyles = () => {
        const container: SxProps = {
            display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: 5
        }

        return {
            container
        }
    }

    return (
        <Layout>
            <div>
                <Filter podcastCount={podcastResult.length} handlerSearch={handlerSearch} />
                <Box component='div' sx={sxStyles().container} >
                    {podcastResult.map(item =>
                        <PodCastItem
                            key={item.id.attributes["im:id"]}
                            title={item["im:name"].label}
                            img={item["im:image"][0].label}
                            author={item["im:artist"].label}
                            onClick={() => handlerNavigationToPodCast(item)} />)}
                </Box>
            </div>
        </Layout>
    )
}

export default HomePage