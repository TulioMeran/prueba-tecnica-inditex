
interface IName {
    label: string;
}

interface IImg {
    label: string;
}

interface IArtist {
    label: string;
}

interface IId {
    attributes: {
        "im:id": string;
    }
}

interface ISummary {
    label: string;
}

export interface IPodcast {
    "im:name": IName;
    "im:image": IImg[];
    id: IId;
    "im:artist": IArtist;
    summary: ISummary;
}

export interface IPodcastResponse {
    feed: {
        entry: IPodcast[]
    }
}