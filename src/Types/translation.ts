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
