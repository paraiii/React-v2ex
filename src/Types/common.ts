export interface Node {
    avatar_large: string,
    avatar_mini: string,
    avatar_normal: string,
    name: string,
    title: string,
    url: string,
    id: number
}
export interface NodeData {
    nodes: Node []
}

export interface Member {
    username: string,
    url: string,
    avatar_large: string,
    avatar_mini: string,
    avatar_normal: string,
    id: number
}
export interface ContentData {
    members: Member []
}

// export interface Replies {
//     username: string,
//     url: string,
//     avatar_large: string,
//     avatar_mini: string,
//     avatar_normal: string,
//     id: number
// }
// export interface RepliesData {
//     replies: Replies []
// }

