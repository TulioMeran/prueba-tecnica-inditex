export const URL_PODCAST: string = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
export const ITUNES_BASE_URL: string = "https://itunes.apple.com/";
export const PODCAST_ENDPOINT: string = "us/rss/toppodcasts/limit=100/genre=1310/json"
export const EPISODE_ENDPOINT = (podcastId: string): string => `lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
export const URL_EPISODE = (podcastId: string): string => `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`