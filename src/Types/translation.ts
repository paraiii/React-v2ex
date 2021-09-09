export interface TranslationItem {
    reply_time: string,
    last_reply_from: string,
}

export interface Translation {
    cn: TranslationItem []
    en: TranslationItem []
}
