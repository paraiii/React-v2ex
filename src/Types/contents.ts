import { Member, Node } from "./common";

export interface Content {
    id: number,
    node: Node,
    title: string,
    image: string,
    url: string,
    member: Member,
    content: string,
    content_rendered: string,
    replies: number,
    username: string,
    last_modified: number,
    last_reply_from: string,
    last_reply_by: string
}

export interface AllData {
    contents: Content []
}

export interface HotList {
    member: Member,
    last_reply_by: string
    last_touched: string
    title: string,
    image: string,
    url: string,
    content: string,
    content_rendered: string,
    last_modified: string,
    replies: number,
    id: number,
}
export interface AllData {
    hotList: HotList []
}

export interface Ad {
    title: string,
    image: string,
    url: string,
    content: string,
}
export interface AllData {
    ad: Ad []
}

export interface Translation {
    reply_time: string,
    last_reply_from: string,
    translation_key: string
}

export interface TranslationItems {
    cn: Translation
    en: Translation
}
