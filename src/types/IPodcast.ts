
interface IName {
    label: string;
}

interface IImg {
    label: string;
    attributes: {
        height: string;
    }
}

interface IArtist {
    label: string;
}

interface IId {
    attributes: {
        "im:id": string;
    }
}

export interface IPodcast {
    "im:name": IName;
    "im:image": IImg[];
    id: IId;
    "im:artist": IArtist;
}