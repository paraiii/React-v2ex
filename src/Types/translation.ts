export interface Translation {
    reply_time: string,
    last_reply_from: string,
    translation_key: string
}

export interface TranslationItems {
    // data: Map<string, TranslationItem>
    cn: Translation
    en: Translation

    // type TranslationItems=Map<string, TranslationItem>
}
