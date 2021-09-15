import React, { useState } from 'react'
import { Translation } from './Types/translation'

export const DefaultTranslation = {
    reply_time: '2分钟前',
    last_reply_from: '最后回复来自',
    translation_key: '1'
}

export const translationItems : Map<string, Translation> = new Map<string, Translation>();
translationItems.set("cn", {
    reply_time: '2分钟前',
    last_reply_from: '最后回复来自',
    translation_key: '1'
});
translationItems.set("en", {
    reply_time: '2 minutes ago',
    last_reply_from: 'Last replied by',
    translation_key: '2'
});

export const LocalizationContext = React.createContext(translationItems.get("cn"))

interface LocalizationContextProviderProps {
    children: React.ReactNode
}

export const LocalizationContextProvider = (props: LocalizationContextProviderProps) => {
    const {children} = props
    const [languageCode] = useState("cn")
    let translations = translationItems.get(languageCode)

    return (
        <LocalizationContext.Provider value= {translations}>
            {children}
        </LocalizationContext.Provider>
    )
}

// interface LocalizationContext {
//     translations:Translation,
//     languageCode: string,
//     children: React.ReactNode

// }

// export const LocalizationContextProvider = (props: LocalizationContextProviderProps) => {
//     const {children} = props
//     const [languageCode] = useState ("cn")

//     let translations = transltionItems.get(languageCode)




// export const LocalizationContext = React.createContext(translations)

// interface LocalizationContextProviderProps {
//     children: React.ReactNode
// }

// export const LocalizationContextProvider = (props: LocalizationContextProviderProps) => {
//     const {children} = props
//     const [languageCode] = useState ("cn")


//         if (languageCode === "cn") {
//             translations.cn= {
//                 reply_time: '2分钟前',
//                 last_reply_from: '最后回复来自',
//                 translation_key: '1'
//             }
//         } else {
//             translations.en = {
//                 reply_time: '2 minutes ago',
//                 last_reply_from: 'Last replied by',
//                 translation_key: '2'
//             }
//         }

//     return (
//         <LocalizationContext.Provider value= {translations}>
//             {children}
//         </LocalizationContext.Provider>
//     )
// }
