export interface Photo {
    albumId:number,
    id: number;
    title: string;
    thumbnailUrl: string;
}

export interface ICreatePhoto {
    title: string;
    thumbnailUrl: string;
}

export interface IUpdatePhoto{
    title:string;
}