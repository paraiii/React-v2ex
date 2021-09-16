export interface Translation {
    reply_time: string,
    last_reply_from: string,
    translation_key: string
}

export interface TranslationItems {
    cn: Translation
    en: Translation
}
