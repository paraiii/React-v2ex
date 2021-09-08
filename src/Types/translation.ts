export interface TranslationItem {
    // key: string,
    // value:string,
    // default: string,
    reply_time: string,
    last_reply_from: string,
}

export interface Translation {
    // data: Map<string, TranslationItem>
    cn: TranslationItem []
    en: TranslationItem []
}
// export interface Translations {
//     reply_time: string,
//     last_reply_from: string,
// }
// export interface English {
//     translations: Translations []
// }

// export interface Translations {
//     reply_time: string,
//     last_reply_from: string,
// }
// export interface Chinese {
//     translations: Translations []
// }