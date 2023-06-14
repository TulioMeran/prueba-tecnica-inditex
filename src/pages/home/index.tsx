import { Box } from "@mui/material"
import { useContext, useState } from "react"
import Filter from "../../components/filter"
import PodCastItem from "../../components/podCastItem"
import { podcastContext } from "../../contexts/podcast"
import Layout from "../../layout"
import { IPodcast } from '../../types/IPodcast'

const HomePage = () => {

    const { podcasts } = useContext(podcastContext)
    const [podcastResult, setPodcastResult] = useState<IPodcast[]>(podcasts)

    const handlerSearch = (value: string) => {
        const newList = podcasts.filter(p => p["im:name"].label.toLowerCase().includes(value) || p["im:artist"].label.toLowerCase().includes(value))
        setPodcastResult(newList)
    }

    return (
        <Layout>
            <div>
                <Filter podcastCount={podcastResult.length} handlerSearch={handlerSearch} />
                <Box component='div' sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: 5 }} >
                    {podcastResult.map(item =>
                        <PodCastItem
                            key={item.id.attributes["im:id"]}
                            title={item["im:name"].label}
                            img={item["im:image"][0].label}
                            author={item["im:artist"].label} />)}
                </Box>
            </div>
        </Layout>
    )
}

export default HomePage