import React, { useState } from 'react'
import { TranslationItems } from './Types/translation'



export const translations: TranslationItems = {
    cn: {
        reply_time: '2分钟前',
        last_reply_from: '最后回复来自',
        translation_key: '1'
    },
    en: {
        reply_time: '2 minutes ago',
        last_reply_from: 'Last replied by',
        translation_key: '2'
    }
}




export const LocalizationContext = React.createContext(translations)

interface LocalizationContextProviderProps {
    children: object
}

export const LocalizationContextProvider = (props: LocalizationContextProviderProps) => {
    const {children} = props
    const [languageCode] = useState ("cn")

        if (languageCode === "cn") {
            translations.cn= {
                reply_time: '2分钟前',
                last_reply_from: '最后回复来自',
                translation_key: '1'
            }
        } else {
            translations.en = {
                reply_time: '2 minutes ago',
                last_reply_from: 'Last replied by',
                translation_key: '2'
            }
        }

    return (
        <LocalizationContext.Provider value= {translations}>
            {{children}}
        </LocalizationContext.Provider>
    )
}
