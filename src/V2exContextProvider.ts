import React from 'react'
import { AllData } from './Types/contents';

export const mock: AllData = {
    hotList: [{   
        id: 369998,
        title: '求教：如果想挖优秀的 Python ，什么才算是有吸引力的条件?',
        image: 'https://cdn.v2ex.com/avatar/111a/37f8/160862_normal.png?m=1496204932',
        url:'http://www.v2ex.com/t/369998',
        content: '除了与能力相匹配的工资（ 20K+）、五险一金、双休、下午茶、高大上的办公环境、各种好相处的同事、早 10 晚 6:30 的工作时间（不加班）之外，还需要什么？求大神们赐教~~~~~',
        content_rendered: '除了与能力相匹配的工资（ 20K+）、五险一金、双休、下午茶、高大上的办公环境、各种好相处的同事、早 10 晚 6:30 的工作时间（不加班）之外，还需要什么？求大神们赐教~~~~~',
        replies: 74,
        node: 'Python',
        username: '131452p',
        last_modified: 'jason19659 ',
    },
    {
        id: 799959,
        title: '微信迁移wechat的朋友注意了， 转到wechat就无法登录网页版微信了，fuck',
        image: 'https://cdn.v2ex.com/avatar/cd15/3421/455199_normal.png?m=1630490634',
        url:'http://www.v2ex.com/t/799959',
        content: '早上点完确认，下午登录网页版发现登不上了。用网页版的朋友迁移需慎重呀',
        content_rendered: '早上点完确认，下午登录网页版发现登不上了。用网页版的朋友迁移需慎重呀',
        replies: 23,
        node: '问与答',
        username: 'YangXiaoming  ',
        last_modified: 'sheep3'
    }],
    
    contents: [{
        id: 798641,
        title: 'bilibili 有没有类似 skytube、newpipe 之类的套壳？',
        image: 'https://cdn.v2ex.com/gravatar/53dfa28d1216eee3dea9ace91e696120?s=73&d=retro',
        url:'https://www.v2ex.com/t/799924#reply15',
        member: 'https://www.v2ex.com/member/cathedrel',
        content: '不愿意注册 bilibili 账户，又想方便的关注一些频道，国外的 youtube 有 skytube 之类的优质壳子，国内的 bilibili 有没有？',
        content_rendered: '不愿意注册 bilibili 账户，又想方便的关注一些频道，国外的 youtube 有 skytube 之类的优质壳子，国内的 bilibili 有没有？',
        replies: 15,
        node: 'Android',
        username: 'catherdrel',
        last_modified: 'minamike',
    },
    {
        id: 799975,
        title: 'iPhone 11 电池是个迷，健康度 63 🌞',
        image: 'https://cdn.v2ex.com/avatar/1099/5ae0/550570_large.png?m=1625986882',
        url:'https://www.v2ex.com/t/799975#reply10',
        member: 'https://www.v2ex.com/member/gitignore',
        content: '用了一年半，健康度只剩下 63%。平时充电充不到 100%，一般充到 70-80 就不动了。昨天晚上从 ios 14.5 升级到 14.7，早上醒来竟然充到 100% 了。电池使用情况显示，早上 8:44 到现在 15:57 分，屏幕打开 5h52min...期间刷了 1h 抖音，18min 哔哩哔哩，以及其他 app 。剩余 52% 的电量，完全回到一年前的电池状态...昨天下午还去了 Apple 天才吧打算换电池，工作人员建议不要换，就没换...晚上想来想去又下单了 JD 的品胜电池 275 RMB，现在看来可以退货了🥲🥲🥲🥲🥲',
        content_rendered: '用了一年半，健康度只剩下 63%。平时充电充不到 100%，一般充到 70-80 就不动了。昨天晚上从 ios 14.5 升级到 14.7，早上醒来竟然充到 100% 了。电池使用情况显示，早上 8:44 到现在 15:57 分，屏幕打开 5h52min...期间刷了 1h 抖音，18min 哔哩哔哩，以及其他 app 。剩余 52% 的电量，完全回到一年前的电池状态...昨天下午还去了 Apple 天才吧打算换电池，工作人员建议不要换，就没换...晚上想来想去又下单了 JD 的品胜电池 275 RMB，现在看来可以退货了🥲🥲🥲🥲🥲',
        replies: 10,
        node: 'apple',
        username: 'gitignore',
        last_modified: 'guanhui07',
    }],
    ad: [{   
        title: '广告',
        image: 'images/11.png',
        url:'https://www.amazon.com.au/',
        content: 'Priming us to never leave the house'
    }]
}

export const V2exContext = React.createContext(mock)
