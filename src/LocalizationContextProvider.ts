import React from 'react'
import { Translation } from './Types/translation'

export const translations: Translation = {
    cn: [{
        reply_time: '2分钟前',
        last_reply_from: '最后回复来自'
    }],
    en: [{
        reply_time: '2 minutes ago',
        last_reply_from: 'Last replied by'
    }]
}

export const LocalizationContext = React.createContext(translations)
