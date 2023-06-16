import { createContext, FC, useEffect, useState } from "react"
import { IPodcast } from "../../types/IPodcast";

interface podCastContextValue {
    podcasts: IPodcast[];
    currentPodCast: IPodcast;
    setCurrentPodCast: React.Dispatch<React.SetStateAction<IPodcast>>
}

export const podcastContext = createContext<podCastContextValue>({ podcasts: [], currentPodCast: {} as IPodcast, setCurrentPodCast: () => { } });

interface PodCastProviderProps {
    children: React.ReactElement;

}
const PodCastProvider: FC<PodCastProviderProps> = ({ children }) => {

    const [podcasts, setPodcasts] = useState<IPodcast[]>([])
    const [currentPodCast, setCurrentPodCast] = useState<IPodcast>({} as IPodcast)

    useEffect(() => {

        fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json")
            .then(response => response.json())
            .then(data => {
                setPodcasts(data.feed.entry)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    return (
        <podcastContext.Provider value={{ podcasts, currentPodCast, setCurrentPodCast }} >
            {children}
        </podcastContext.Provider>
    )
}

export default PodCastProvider
