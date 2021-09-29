import { Member, Node} from "./common";
import { Content } from "./contents";

export interface Reply {
    id: number,
    member_id: number,
    member: Member,
    content: string,
    content_rendered: string,
    created: number,
    last_modified: number,
    replies: Content,
    node: Node,
}
export interface ReplyData {
    replies: Reply []
}