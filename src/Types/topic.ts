import { Member } from "./common";


export interface Topic {
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

