import React, { createContext } from "react";
import App from './App';

const hotList = {
    "hotList": [
        {   
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
            last_modified: 'sheep3',
        }
    ]
}


  const V2exContext = createContext (hotList);

  function Mock() {
    return (
      <V2exContext.Provider value={hotList}>
            <App />
      </V2exContext.Provider>

    );
  }
export default V2exContext;
