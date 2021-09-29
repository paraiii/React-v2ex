import { Member, Node } from "./common";
import { Reply } from "./reply";


export interface Topic {
    id: number,
    node: Node,
    title: string,
    image: string,
    url: string,
    member: Member,
    content: string,
    content_rendered: string,
    replies: Reply,
    username: string,
    last_modified: number,
    last_reply_from: string,
    last_reply_by: string
}

export interface TopicData {
    topics: Topic []
}
