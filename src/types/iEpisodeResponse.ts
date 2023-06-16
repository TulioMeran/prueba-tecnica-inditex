interface Episode {
    trackName: string;
    releaseDate: string;
    trackTimeMillis: number
}
export interface IEpisodeResponse {
    resultCount: number;
    results: Episode[];
}