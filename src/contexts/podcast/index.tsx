import { createContext, FC, useEffect, useState } from "react"
import { IPodcast } from "../../types/IPodcast";

interface podCastContextValue {
    podcasts: IPodcast[]
}

export const podcastContext = createContext<podCastContextValue>({ podcasts: [] });

interface PodCastProviderProps {
    children: React.ReactElement
}
const PodCastProvider: FC<PodCastProviderProps> = ({ children }) => {

    const [podcasts, setPodcasts] = useState<IPodcast[]>([])

    useEffect(() => {

        fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json")
            .then(response => response.json())
            .then(data => {
                debugger
                setPodcasts(data.feed.entry)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])



    return (
        <podcastContext.Provider value={{ podcasts }} >
            {children}
        </podcastContext.Provider>
    )
}

export default PodCastProvider
