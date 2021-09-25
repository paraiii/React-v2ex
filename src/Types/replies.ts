import { Member } from "./common";


export interface Topic {
    id: number,
    thanks: number,
    member: Member,
    content: string,
    content_rendered: string,
    created: number,
    last_modified: number,
}
