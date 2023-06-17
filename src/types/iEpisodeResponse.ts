export interface Episode {
    trackName: string;
    releaseDate: string;
    trackTimeMillis: number;
    description: string;
    collectionId: string;
    collectionName: string;
    episodeUrl: string;
    episodeGuid: string;
}
export interface IEpisodeResponse {
    resultCount: number;
    results: Episode[];
}