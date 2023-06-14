import { Box } from "@mui/material"
import { useContext } from "react"
import Filter from "../../components/filter"
import PodCastItem from "../../components/podCastItem"
import { podcastContext } from "../../contexts/podcast"
import Layout from "../../layout"

const HomePage = () => {

    const { podcasts } = useContext(podcastContext)

    return (
        <Layout>
            <div>
                <Filter podcastCount={podcasts.length} />
                <Box component='div' sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: 5 }} >
                    {podcasts.map(item =>
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