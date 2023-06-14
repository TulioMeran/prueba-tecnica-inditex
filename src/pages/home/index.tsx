import Filter from "../../components/filter"
import Layout from "../../layout"

const HomePage = () => {

    return (
        <Layout>
            <div>
                <Filter podcastCount={100} />
                <h1>Home Page</h1>
            </div>
        </Layout>
    )
}

export default HomePage