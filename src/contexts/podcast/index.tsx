import { createContext, FC, useEffect, useState } from "react"
import * as constants from "../../constants";
import { Episode } from "../../types/iEpisodeResponse";
import { IPodcast } from "../../types/IPodcast";

interface podCastContextValue {
    podcasts: IPodcast[];
    currentPodCast: IPodcast;
    setCurrentPodCast: React.Dispatch<React.SetStateAction<IPodcast>>;
    currentEpisode: Episode;
    setCurrentEpisode: React.Dispatch<React.SetStateAction<Episode>>;
}

export const podcastContext = createContext<podCastContextValue>({ podcasts: [], currentPodCast: {} as IPodcast, setCurrentPodCast: () => { }, currentEpisode: {} as Episode, setCurrentEpisode: () => { } });

interface PodCastProviderProps {
    children: React.ReactElement;

}
const PodCastProvider: FC<PodCastProviderProps> = ({ children }) => {

    const [podcasts, setPodcasts] = useState<IPodcast[]>([])
    const [currentPodCast, setCurrentPodCast] = useState<IPodcast>({} as IPodcast)
    const [currentEpisode, setCurrentEpisode] = useState<Episode>({} as Episode)

    useEffect(() => {

        fetch(constants.URL_PODCAST)
            .then(response => response.json())
            .then(data => {
                setPodcasts(data.feed.entry)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    return (
        <podcastContext.Provider value={{ podcasts, currentPodCast, setCurrentPodCast, currentEpisode, setCurrentEpisode }} >
            {children}
        </podcastContext.Provider>
    )
}

export default PodCastProvider
