export interface Content {
    id: number,
    title: string,
    image: string,
    url: string,
    member: string,
    content: string,
    content_rendered: string,
    replies: number,
    node: string,
    username: string,
    last_modified: string
}

export interface AllData {
    contents: Content []
}
//
export interface HotList {
    id: number,
    title: string,
    image: string,
    url: string,
    content: string,
    content_rendered: string,
    replies: number,
    node: string,
    username: string,
    last_modified: string
}
export interface AllData {
    hotList: HotList []
}
//
export interface Ad {
    title: string,
    image: string,
    url: string,
    content: string,
}
export interface AllData {
    ad: Ad []
}