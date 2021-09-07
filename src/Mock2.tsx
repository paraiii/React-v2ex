import React, { createContext } from "react";
import App from "./App";

const contents = {
    "contents" : [
        {
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

        },
        {
            id: 800017,
            title: 'gitlab api 怎么获取 merge 后的文件改动统计',
            image: 'https://cdn.v2ex.com/avatar/f413/558b/253904_large.png?m=1561130025',
            url:'https://www.v2ex.com/t/800017#reply0',
            member: 'https://www.v2ex.com/member/asensio',
            content: '如同想获取文件改动的行数统计信息,如：xxxx.java | 4 ++++ xxxx.txt | 3 --- 查到 gitlab 有个 /merge_request_iid/changes 的 api，但得到的每个文件的改动内容……',
            content_rendered: '如同想获取文件改动的行数统计信息,如：xxxx.java | 4 ++++ xxxx.txt | 3 --- 查到 gitlab 有个 /merge_request_iid/changes 的 api，但得到的每个文件的改动内容……',
            replies: 0,
            node: '问与答',
            username: 'asensio',
            last_modified: 'masterweii',

        },
        {
            id: 799988,
            title: 'M1 8G 内存对 Java 开发够用吗？',
            image: 'https://cdn.v2ex.com/gravatar/e8925904ec23bda6ea271ae4fea2c91e?s=73&d=retro',
            url:'https://www.v2ex.com/t/799988#reply25',
            content: '公司笔记本坏了，受够了这电脑隔三差五地坏。平时用 windows 内存一般在 12g 左右，java 开发。或者说 M1X 会不会更香？',
            content_rendered: '公司笔记本坏了，受够了这电脑隔三差五地坏。平时用 windows 内存一般在 12g 左右，java 开发。或者说 M1X 会不会更香？',
            replies: 25,
            node: 'MacBook',
            username: 'silencil',
            last_modified: 'guanhui07',

        },
        {
            id: 799987,
            title: '郑州会展中心附近有千兆及以上的上网点吗？',
            image: 'https://cdn.v2ex.com/avatar/88c5/3566/52452_large.png?m=1628072511',
            url:'https://www.v2ex.com/t/799987#reply4',
            content: '如图，郑州会展中心附近有没有千兆的上网点，拜托大家给推荐一下，需要往服务器上上传文件，大约 92 个 G，普通上传比较太慢了~~。',
            content_rendered: '如图，郑州会展中心附近有没有千兆的上网点，拜托大家给推荐一下，需要往服务器上上传文件，大约 92 个 G，普通上传比较太慢了~~。',
            replies: 4,
            node: '问与答',
            username: ' vainly',
            last_modified: 'yunyuyuan',

        },
    ]
}
  const V2exContext2 = createContext (contents);

  function Mock2() {
    return (
        <V2exContext2.Provider value={contents}>
                <App />
        </V2exContext2.Provider>

    );
  }
export default V2exContext2;

