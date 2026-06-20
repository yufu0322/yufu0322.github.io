// 了了了词条库 - leleart.js
// 字段说明：
// id: 唯一标识 (用于详情页跳转)
// title: 词条标题
// alias: 别名列表
// image: 头图 (可选)
// abstract: 简述 (用于搜索结果卡片)
// url: 外部链接 (可选，详情页底部“了解更多”)
// infoBox: 信息栏表格 (对象，键值对，如 “中文名”: “故宫博物院” )
// content: 正文内容数组，每项可以是：
//   { type: "paragraph", text: "..." }
//   { type: "image", src: "图片地址", caption: "图片说明" }
//   { type: "subtitle", text: "小标题" }

const lexiconData = [
  {
    id: "000000001",
    title: "故宫博物院",
    alias: ["故宫", "紫禁城", "故宫博物馆"],
    image: "https://img.dpm.org.cn/Uploads/Picture/2019/12/05/s5de876aeb8a11.jpg",
    abstract: "故宫博物院建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆。",
    url: "https://www.dpm.org.cn",
    infoBox: {
      "中文名": "故宫博物院",
      "外文名": "The Palace Museum",
      "地点": "北京市东城区景山前街4号",
      "藏品数量": "186万余件",
      "占地面积": "约72万平方米",
      "开放时间": "旺季8:30-17:00，淡季8:30-16:30"
    },
    content: [
      { type: "paragraph", text: "北京故宫博物院位于北京故宫紫禁城内，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆，也是中国最大的古代文化艺术博物馆。" },
      { type: "subtitle", text: "历史沿革" },
      { type: "paragraph", text: "故宫博物院成立于1925年10月10日，是在明清两代皇宫及其收藏的基础上建立起来的综合性博物馆。历经近百年发展，故宫博物院已成为世界级的文化遗产保护与研究中心。" },
      { type: "image", src: "https://img.dpm.org.cn/Uploads/Picture/2020/04/20/s5e9d8e5b3c2c6.jpg", caption: "故宫太和殿" },
      { type: "paragraph", text: "故宫博物院拥有丰富的藏品体系，涵盖了中国古代艺术品的各个门类，包括绘画、书法、陶瓷、青铜器、玉器、金银器、珐琅器、漆器、织绣、家具等25大类，总数达186万余件。" },
      { type: "subtitle", text: "建筑特色" },
      { type: "paragraph", text: "故宫建筑群是中国古代宫殿建筑的典范，以南北中轴线为中心，左右对称，布局严谨。主要建筑包括太和殿、中和殿、保和殿、乾清宫、交泰殿、坤宁宫等，气势恢宏，金碧辉煌。" }
    ]
  },
  {
    id: "000000002",
    title: "了了了搜",
    alias: ["LLL搜", "了了了岭", "了了了岭的搜索引擎"],
    abstract: "了了了搜是由<a href=\"leleart.html?id=00000001a\">了了了岭工作室</a>打造的一款聚合搜索引擎与网址导航，完全免费，轻量快速。",
    url: "index.html",
    infoBox: {
      "中文名": "了了了搜",
      "开发者": "了了了岭工作室",
      "上线时间": "2026年",
      "核心技术": "HTML, CSS, JavaScript",
      "特色功能": "本地网站库搜索、词条卡片、网址导航"
    },
    content: [
      { type: "paragraph", text: "了了了搜是了了了岭工作室旗下的一款搜索引擎项目。它集成了海量网站数据库、智能加权搜索、词条展示以及分类导航，旨在提供一个干净、无广告、不受限制的信息检索工具。" },
      { type: "subtitle", text: "开发历程" },
      { type: "paragraph", text: "开发团队在有限的硬件条件下，从零开始学习前端技术，一点一点写出了了了了搜的代码。整个过程几乎没有使用任何外部框架，完全依靠原生的HTML、CSS和JavaScript。" },
      { type: "subtitle", text: "主要功能" },
      { type: "paragraph", text: "了了了搜不仅支持对本地数千个常用网站的快速检索，还独创了“词条”功能，可以像百度百科一样展示自建的知识卡片。同时内置了随机逛、热搜词、每日语录等趣味功能。" }
    ]
  },
  {
    id: "000000003",
    title: "原神",
    alias: ["Genshin Impact", "原神启动", "genshin"],
    image: "https://ys.mihoyo.com/main/_nuxt/img/splash.d30d12a.jpg",
    abstract: "《原神》是由上海米哈游网络科技股份有限公司制作发行的一款开放世界冒险游戏。",
    url: "https://ys.mihoyo.com",
    infoBox: {
      "游戏名称": "原神",
      "外文名": "Genshin Impact",
      "开发商": "米哈游",
      "发行日期": "2020年9月28日",
      "游戏平台": "PC, PS4, PS5, iOS, Android, 云游戏",
      "游戏类型": "开放世界动作角色扮演"
    },
    content: [
      { type: "paragraph", text: "《原神》是一款开放世界冒险游戏，玩家将在奇幻大陆“提瓦特”中探索，与七种元素交互，邂逅性格各异的伙伴，并逐步揭开这个世界的秘密。" },
      { type: "image", src: "https://uploadstatic.mihoyo.com/ys-image/2021/09/17/19a2ff4a628d0e9f09f9e5e3dd0f0d6b_3494244536037697442.jpg", caption: "游戏场景：蒙德城" },
      { type: "subtitle", text: "游戏特色" },
      { type: "paragraph", text: "1. 无缝开放世界：无需加载即可跨越平原、山脉、河流，自由探索。\n2. 元素交互系统：七种元素之间可以触发燃烧、冻结、感电等丰富反应。\n3. 多样化角色：每个角色拥有独特的技能和故事，可编入四人队伍切换作战。\n4. 持续更新：开发团队定期推出新区域、新角色和新剧情，保持游戏活力。" }
    ]
  },
  {
      "id": "000000004",
      "title": "百度",
      "alias": ["Baidu", "百度一下", "众里寻他"],
      "image": "https://www.baidu.com/img/bd_logo1.png",
      "abstract": "百度（Baidu）是全球最大的中文搜索引擎，也是拥有强大互联网基础的领先AI公司。",
      "url": "https://www.baidu.com",
      "infoBox": {
        "公司名称": "百度",
        "外文名": "Baidu",
        "成立时间": "2000年1月",
        "总部地点": "中国北京",
        "创始人": "李彦宏",
        "公司类型": "AI驱动的技术型公司",
        "年营业额": "1291 亿元（2025年）",
        "员工数": "约 33,700 人（2023年）",
        "公司口号": "百度一下，你就知道"
      },
      "content": [
        {
          "type": "paragraph",
          "text": "百度于2000年1月由李彦宏创立于北京中关村，如今已发展成为全球最大的中文搜索引擎，覆盖超过138个国家，每天响应数亿次搜索请求。“百度”二字取自南宋词人辛弃疾的名句“众里寻他千百度”，寄托着对信息检索技术的执着追求。"
        },
        {
          "type": "image",
          "src": "https://www.baidu.com/img/bd_logo1.png",
          "caption": "百度品牌标志与熊掌图形"
        },
        {
          "type": "subtitle",
          "text": "核心业务与战略布局"
        },
        {
          "type": "paragraph",
          "text": "百度正从搜索引擎公司全面转型为AI科技巨头。截至2025年第四季度，百度AI相关业务收入达113亿元，占通用业务收入的43%。核心业务覆盖三大板块：\n1. 传统搜索与信息流：百度搜索、百度百科、百度知道、百度贴吧等产品构成中文互联网最大的信息生态。\n2. 人工智能：文心大模型驱动的生成式AI应用“文心助手”月活用户已超2亿；百度智能云提供全栈AI解决方案。\n3. 自动驾驶：旗下萝卜快跑（Apollo Go）是全球最大的自动驾驶出行服务平台，已在中国多个城市落地运营。"
        }
      ]
    },
      {
        "id": "000000005",
        "title": "GitHub",
        "alias": ["GitHub", "gh", "代码托管平台"],
        "image": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        "abstract": "GitHub 是全球最大的代码托管平台，为开发者提供代码管理、版本控制和协作支持，拥有超过1.5亿注册用户。",
        "url": "https://github.com",
        "infoBox": {
          "网站名称": "GitHub",
          "创始人": "Tom Preston-Werner 等",
          "总部地点": "美国旧金山",
          "上线时间": "2008年4月",
          "所属公司": "微软",
          "用户数": "超过 1.5 亿注册用户",
          "代码仓库数": "超过 4.2 亿个"
        },
        "content": [
          {
            "type": "paragraph",
            "text": "GitHub 是一个基于 Git 的代码托管和协作平台，开发者可以在上面存储、管理和跟踪代码变更。平台由 Tom Preston-Werner、Chris Wanstrath、P.J. Hyett 和 Scott Chacon 于 2008 年共同创立。2018 年，微软以 75 亿美元收购 GitHub，使其成为微软的全资子公司。"
          },
          {
            "type": "image",
            "src": "https://github.githubassets.com/images/modules/site/home/globe.jpg",
            "caption": "GitHub 全球开发者社区概览"
          },
          {
            "type": "subtitle",
            "text": "核心功能与生态"
          },
          {
            "type": "paragraph",
            "text": "GitHub 提供 issue 跟踪、Pull Request 代码审查、GitHub Actions 自动化工作流、GitHub Pages 静态网站托管等核心功能。其明星功能 GitHub Copilot 是全球使用最广泛的 AI 编程助手，2025 年发布了更具自主性的新版本。平台上的开源项目几乎覆盖所有技术领域，已成为全球开源社区的中心。"
          }
        ]
      },
      {
        "id": "000000006",
        "title": "Visual Studio Code",
        "alias": ["VS Code", "VSC", "Code"],
        "image": "https://code.visualstudio.com/assets/images/code-stable.png",
        "abstract": "Visual Studio Code 是微软开发的轻量级开源代码编辑器，凭借丰富的插件生态和跨平台支持，成为全球最受欢迎的开发者工具。",
        "url": "https://code.visualstudio.com",
        "infoBox": {
          "软件名称": "Visual Studio Code",
          "外文名": "VS Code",
          "开发商": "微软",
          "首次发布": "2015年4月29日",
          "平台": "Windows, macOS, Linux",
          "核心引擎": "Electron",
          "特点": "轻量、可扩展、多语言支持"
        },
        "content": [
          {
            "type": "paragraph",
            "text": "Visual Studio Code 于 2015 年 4 月 29 日由微软在 Build 大会上首次发布。同年 11 月在 GitHub 上开源。VS Code 基于 Electron 框架构建，支持 Windows、macOS 和 Linux 等多个操作系统。其核心功能包括语法高亮、智能代码补全、代码片段、代码重构和内嵌 Git 支持。"
          },
          {
            "type": "image",
            "src": "https://code.visualstudio.com/assets/home/home-screenshot-mac.png",
            "caption": "VS Code 编辑器界面"
          },
          {
            "type": "subtitle",
            "text": "发展现状"
          },
          {
            "type": "paragraph",
            "text": "根据 Stack Overflow 2023 年开发者调查，超过 73% 的受访者将 VS Code 列为首选开发工具。其插件市场中已拥有超过 1000 个扩展，可支持几乎所有主流编程语言和运行时。截至 2024 年，VS Code 的月活用户已超过 1200 万。"
          }
        ]
      },
      {
        "id": "000000007",
        "title": "Docker",
        "alias": ["Docker", "容器", "Container"],
        "image": "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
        "abstract": "Docker 是领先的开源应用容器引擎，基于 Go 语言开发，通过容器化技术实现应用的快速打包、部署和运行。",
        "url": "https://www.docker.com",
        "infoBox": {
          "软件名称": "Docker",
          "开发商": "Docker, Inc.",
          "首次发布": "2013年",
          "平台": "Windows, macOS, Linux",
          "语言": "Go",
          "协议": "Apache 2.0",
          "核心概念": "容器化、镜像、仓库"
        },
        "content": [
          {
            "type": "paragraph",
            "text": "Docker 是一个基于 Go 语言开发的开源应用容器引擎，最初由 dotCloud 公司发起，后加入 Linux 基金会。它让开发者可以将应用及其依赖打包到一个轻量级、可移植的容器中，在任何 Linux 或 Windows 机器上运行，实现“一次封装，到处运行”的目标。Docker 自开源以来，已形成了完整的容器生态系统，被誉为云计算的基石之一。"
          },
          {
            "type": "image",
            "src": "https://www.docker.com/wp-content/uploads/2022/03/docker-architecture.svg",
            "caption": "Docker 架构图"
          },
          {
            "type": "subtitle",
            "text": "生态与影响"
          },
          {
            "type": "paragraph",
            "text": "Docker 的核心价值在于解决环境一致性问题：通过镜像（Image）统一应用及其运行环境，通过容器（Container）实现隔离运行。2014 年 Docker 与 Kubernetes 的竞争与合作，最终催生出以容器为核心的云原生生态体系。如今，Docker Hub 拥有数百万个镜像，是云原生时代不可或缺的基础设施。"
          }
        ]
      },
      {
        "id": "000000008",
        "title": "Slack",
        "alias": ["Slack", "协作工具"],
        "image": "https://a.slack-edge.com/80588/marketing/img/meta/og/slack_og_2023.png",
        "abstract": "Slack 是企业级实时协作平台，集成消息、文件共享和第三方应用，帮助团队高效沟通。",
        "url": "https://slack.com",
        "infoBox": {
          "软件名称": "Slack",
          "开发商": "Slack Technologies",
          "成立时间": "2009年",
          "创始人": "Stewart Butterfield",
          "平台": "Windows, macOS, iOS, Android",
          "所属公司": "Salesforce",
          "特点": "频道、集成、搜索"
        },
        "content": [
          {
            "type": "paragraph",
            "text": "Slack 最初是一个游戏开发团队的内部沟通工具，由 Stewart Butterfield 于 2013 年正式推出。Slack 提供频道（Channels）组织讨论、直接消息、文件共享和强大的第三方应用集成，旨在替代传统邮件。2020 年，Salesforce 以 277 亿美元收购 Slack，成为其全资子公司。"
          },
          {
            "type": "image",
            "src": "https://a.slack-edge.com/80588/marketing/img/solutions/solutions_home_salesforce.jpg",
            "caption": "Slack 界面与集成示例"
          },
          {
            "type": "subtitle",
            "text": "品牌与市场"
          },
          {
            "type": "paragraph",
            "text": "Slack 的商标为一个多彩的“#”号图标，代表频道和沟通。Slack 在全球拥有超过 150 万日活用户，被数千家企业采用。它与 Google Drive、Jira、GitHub 等数千个应用深度集成，已成为现代企业协作的核心平台之一。"
          }
        ]
      },
      {
        "id": "000000009",
        "title": "Figma",
        "alias": ["Figma", "设计协作", "UI设计"],
        "image": "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0ea0970bdcbabaf79e6b3e3f-2400x1260.png",
        "abstract": "Figma 是领先的云端实时协作设计工具，涵盖 UI/UX 设计、原型交互和白板功能。",
        "url": "https://www.figma.com",
        "infoBox": {
          "公司名称": "Figma",
          "成立时间": "2012年",
          "创始人": "Dylan Field",
          "平台": "Web, macOS, Windows",
          "用户数": "月活超 1300 万",
          "上市": "2025年8月（NYSE）",
          "特点": "实时协作、云原生"
        },
        "content": [
          {
            "type": "paragraph",
            "text": "Figma 由 Dylan Field 于 2012 年在旧金山创立，2025 年 8 月在纽交所上市。Figma 是全球首款真正实现多人实时协作的 UI 设计工具，允许团队成员同时在同一个文件上进行设计。其产品包括 Figma Design、FigJam 白板和 Dev Mode 开发模式。"
          },
          {
            "type": "image",
            "src": "https://cdn.sanity.io/images/599r6htc/regionalized/2f8e5b9c4a6e342e2f4a3c7c69e536d58f4b6d7f-3200x1800.png",
            "caption": "Figma 设计界面与协作视图"
          },
          {
            "type": "subtitle",
            "text": "生态与扩展"
          },
          {
            "type": "paragraph",
            "text": "Figma 拥有庞大的社区和插件生态，支持自动布局、组件变体、交互原型等高级功能。财富 500 强企业中 95% 使用 Figma，月活用户超过 1300 万。Figma 还与 Anthropic 合作，将设计工具集成到 Claude 等 AI 平台中。"
          }
        ]
      },
      {
        "id": "00000000a",
        "title": "Notion",
        "alias": ["Notion", "笔记", "知识库"],
        "image": "https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/front-static/pages/product/super-duper/hero-illo.png",
        "abstract": "Notion 是一款整合笔记、任务、数据库和协作的全平台工作空间应用，全球用户近 1 亿。",
        "url": "https://www.notion.so",
        "infoBox": {
          "软件名称": "Notion",
          "开发商": "Notion Labs, Inc.",
          "成立时间": "2013年",
          "创始人": "Ivan Zhao",
          "平台": "Web, macOS, Windows, iOS, Android",
          "用户数": "近 1 亿",
          "特点": "块编辑器、多维数据库"
        },
        "content": [
          {
            "type": "paragraph",
            "text": "Notion 由 Ivan Zhao 于 2013 年创立，最初只是一个内容创作与信息存储平台，经过多次重构后逐渐演变为一个集文档、知识库、任务管理和数据库于一体的全功能工作空间。它的核心概念是“块”（Block）——文本、表格、图片、看板等一切内容都是块，可以任意拖拽和嵌套。"
          },
          {
            "type": "image",
            "src": "https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/front-static/pages/product/super-duper/hero-illo.png",
            "caption": "Notion 工作空间界面"
          },
          {
            "type": "subtitle",
            "text": "发展与 AI 集成"
          },
          {
            "type": "paragraph",
            "text": "Notion 的用户从 2020 年 100 万增长至 2024 年突破 1 亿。2023 年推出 Notion AI，集成 AI 写作、总结和翻译功能。2026 年进一步集成国产开源模型 MiniMax M2.5，构建混合 AI 架构。Notion 已成为个人知识管理和团队协作领域的主力工具之一。"
          }
        ]
      },
      {
        "id": "00000000b",
        "title": "Postman",
        "alias": ["Postman", "API测试"],
        "image": "https://www.postman.com/assets/logos/postman-logo-horizontal-white-bg.svg",
        "abstract": "Postman 是世界领先的 API 协作平台，覆盖 API 生命周期的设计、测试、模拟与分享。",
        "url": "https://www.postman.com",
        "infoBox": {
          "软件名称": "Postman",
          "开发商": "Postman Inc.",
          "首次发布": "2012年（插件）",
          "创始人": "Abhinav Asthana",
          "平台": "Web, Windows, macOS, Linux",
          "用户数": "超过 4000 万",
          "特点": "API 调试、自动化测试"
        },
        "content": [
          {
            "type": "paragraph",
            "text": "Postman 最初由 Abhinav Asthana 作为 Chrome 浏览器的 API 调试插件发布，2014 年成立公司独立运营。Postman 提供了一个完整的 API 客户端，支持发送各种 HTTP 请求、查看响应、生成代码片段以及创建可分享的 API 集合。"
          },
          {
            "type": "image",
            "src": "https://www.postman.com/assets/homepage/homepage-hero-image.png",
            "caption": "Postman 工作台界面"
          },
          {
            "type": "subtitle",
            "text": "市场影响"
          },
          {
            "type": "paragraph",
            "text": "Postman 在全球拥有超过 4000 万注册用户，世界 500 强企业中 98% 都在使用 Postman。平台还支持自动化测试、Mock Server、API 文档生成和性能监控。2021 年完成 2.25 亿美元 D 轮融资，估值达到 56 亿美元。"
          }
        ]
      },
      {
        "id": "00000000c",
        "title": "Jira",
        "alias": ["Jira", "项目管理", "敏捷开发"],
        "image": "https://wac-cdn.atlassian.com/misc-assets/webp-images/jira-software-icon-blue.svg",
        "abstract": "Jira 是 Atlassian 公司开发的敏捷项目管理工具，全球超过 65000 家公司使用，用于缺陷跟踪和任务管理。",
        "url": "https://www.atlassian.com/software/jira",
        "infoBox": {
          "软件名称": "Jira Software",
          "所属公司": "Atlassian",
          "首次发布": "2002年",
          "平台": "Web, 移动端",
          "用户数": "超 65,000 家公司",
          "曾用名": "Gojira（哥斯拉）",
          "特点": "Scrum / Kanban"
        },
        "content": [
          {
            "type": "paragraph",
            "text": "Jira 由澳大利亚 Atlassian 公司于 2002 年发布，最初是纯粹的 Bug 跟踪和缺陷管理系统。其名称截取自日语“Gojira”（哥斯拉）。如今 Jira 已发展为敏捷项目管理平台，支持 Scrum 和 Kanban 两种敏捷方法，提供看板视图、冲刺规划和自定义工作流。"
          },
          {
            "type": "image",
            "src": "https://wac-cdn.atlassian.com/dam/jcr:14abbbfb-5870-4c57-8eaa-5c0e8cf9d9e5/max-1200.jpg",
            "caption": "Jira 看板视图"
          },
          {
            "type": "subtitle",
            "text": "市场定位"
          },
          {
            "type": "paragraph",
            "text": "Jira 被全球 65000 多家公司采用，包括 Citigroup、Netflix、Coca-Cola 等。其插件市场提供数千种集成，包括 GitHub、Jenkins、Slack 等。Jira 软件支持云版和本地部署，已成为敏捷开发领域的事实标准。"
          }
        ]
      },
      {
        "id": "00000000d",
        "title": "Tableau",
        "alias": ["Tableau", "数据可视化", "BI"],
        "image": "https://www.tableau.com/sites/default/files/2022-05/Tableau_Logo_1200x630.png",
        "abstract": "Tableau 是全球领先的数据可视化与商业智能平台，无需编程即可创建交互式仪表板。",
        "url": "https://www.tableau.com",
        "infoBox": {
          "软件名称": "Tableau",
          "开发商": "Tableau Software / Salesforce",
          "成立时间": "2003年",
          "创始人": "Chris Stolte 等",
          "平台": "Windows, macOS, Web",
          "客户数": "超 120,000 家",
          "特点": "拖拽式可视化"
        },
        "content": [
          {
            "type": "paragraph",
            "text": "Tableau 由 Chris Stolte、Pat Hanrahan 和 Christian Chabot 于 2003 年创立，起源于斯坦福大学的一项可视化研究项目。其核心是专利的 VizQL 技术：将拖拽操作转化为数据查询，并实时生成可视化图表。2019 年被 Salesforce 以 157 亿美元收购。"
          },
          {
            "type": "image",
            "src": "https://www.tableau.com/sites/default/files/2021-05/Tableau_Desktop_Screenshot_2021.1.png",
            "caption": "Tableau Desktop 仪表板示例"
          },
          {
            "type": "subtitle",
            "text": "产品与生态"
          },
          {
            "type": "paragraph",
            "text": "Tableau 产品线包括 Desktop（桌面分析）、Server（企业共享）、Online（云端）和 Public（免费公开版）。全球超过 120,000 家客户使用 Tableau，社区成员超过 400 万。Tableau 连续多年被评为 Gartner 分析平台领导者。"
          }
        ]
      },
      {
        "id": "00000000e",
        "title": "Jenkins",
        "alias": ["Jenkins", "CI/CD", "持续集成"],
        "image": "https://www.jenkins.io/images/logos/jenkins/jenkins.svg",
        "abstract": "Jenkins 是领先的开源自动化服务器，基于 Java 开发，用于持续集成与持续交付。",
        "url": "https://www.jenkins.io",
        "infoBox": {
          "软件名称": "Jenkins",
          "前身": "Hudson",
          "创建时间": "2006年（Hudson）",
          "平台": "跨平台 (Java)",
          "安装数量": "超过 300,000",
          "插件数量": "超过 2,000",
          "特点": "Pipeline as Code"
        },
        "content": [
          {
            "type": "paragraph",
            "text": "Jenkins 的前身 Hudson 由 Sun 公司的 Kohsuke Kawaguchi 于 2006 年创建。2011 年由于与 Oracle 的商标争议，项目更名为 Jenkins。Jenkins 基于 Java 开发，采用可扩展的插件化架构，拥有超过 2000 个插件来支持自动化构建、测试和部署。"
          },
          {
            "type": "image",
            "src": "https://www.jenkins.io/images/logo/jenkins.png",
            "caption": "Jenkins 构建管道（Pipeline）视图"
          },
          {
            "type": "subtitle",
            "text": "核心创新：Pipeline as Code"
          },
          {
            "type": "paragraph",
            "text": "2016 年发布的 Jenkins 2.0 引入了 Pipeline 核心特性，支持将完整的构建、测试、部署流程定义为代码（Jenkinsfile）。Jenkins 拥有超过 30 万已知安装，是全球最广泛部署的自动化服务器，已成为 CI/CD 领域事实上的行业标准。"
          }
        ]
      },
      
          {
            "id": "00000000f",
            "title": "TensorFlow",
            "alias": ["TensorFlow", "TF", "深度学习框架"],
            "image": "https://www.tensorflow.org/images/tf_logo_social.png",
            "abstract": "TensorFlow 是 Google 推出的开源端到端机器学习平台，拥有灵活的工具、库和社区资源，推动 AI 从研究到生产的落地。",
            "url": "https://www.tensorflow.org",
            "infoBox": {
              "名称": "TensorFlow",
              "开发者": "Google Brain 团队",
              "首次发布": "2015年11月",
              "最新版本": "2.19",
              "语言": "C++、Python、CUDA",
              "许可协议": "Apache 2.0",
              "特点": "图计算、自动微分、跨平台部署"
            },
            "content": [
              {
                "type": "paragraph",
                "text": "TensorFlow 由 Google Brain 团队开发，2015 年开源，目前已成为全球最广泛使用的深度学习框架之一。其名称源于多维数组（张量，Tensor）在计算图中流动（Flow）的设计理念。TensorFlow 支持从边缘设备到大型分布式系统的全场景部署，并提供 TF Lite、TF.js、TF Extended 等子项目。"
              },
              {
                "type": "image",
                "src": "https://www.tensorflow.org/static/images/tf_homepage_hero_2x.png",
                "caption": "TensorFlow 模型构建与部署流程"
              },
              {
                "type": "subtitle",
                "text": "社区与影响"
              },
              {
                "type": "paragraph",
                "text": "截至 2025 年，TensorFlow 在 GitHub 上拥有超过 188k 星标，被广泛应用于计算机视觉、自然语言处理和强化学习等领域。Keras 作为其高级 API，极大降低了深度学习门槛。TensorFlow 的生态还包括 TensorBoard 可视化工具和 TF Hub 模型库。"
              }
            ]
          },
          {
            "id": "000000010",
            "title": "Kubernetes",
            "alias": ["Kubernetes", "K8s", "容器编排"],
            "image": "https://kubernetes.io/images/kubernetes-horizontal-color.png",
            "abstract": "Kubernetes（K8s）是谷歌开源的容器编排平台，用于自动化应用容器的部署、扩展和管理，已成为云原生生态的核心支柱。",
            "url": "https://kubernetes.io",
            "infoBox": {
              "名称": "Kubernetes",
              "简称": "K8s",
              "创始人": "Google（参考 Borg 系统）",
              "首次发布": "2014年6月",
              "平台": "跨平台（Linux/Windows 节点）",
              "宿主项目": "CNCF",
              "特点": "服务发现、自动扩缩、声明式配置"
            },
            "content": [
              {
                "type": "paragraph",
                "text": "Kubernetes 源自 Google 内部十多年大规模集群管理经验，在 2014 年开源后被贡献给 CNCF（云原生计算基金会）。它通过 Pod、Service、Deployment 等抽象，实现了对容器化应用的生命周期自动化管理，被誉为云原生时代的操作系统。名称在希腊语中意为“舵手”或“领航员”。"
              },
              {
                "type": "image",
                "src": "https://kubernetes.io/images/kubernetes-architecture.png",
                "caption": "Kubernetes 架构示意图"
              },
              {
                "type": "subtitle",
                "text": "主导地位"
              },
              {
                "type": "paragraph",
                "text": "Kubernetes 已经成为事实上的容器编排标准。所有主流云厂商（AWS EKS、Azure AKS、Google GKE、阿里云 ACK）均提供托管 K8s 服务。其庞大的扩展生态包括 Helm（包管理）、Istio（服务网格）和 Prometheus（监控），支撑着全球数百万个集群。"
              }
            ]
          },
          {
            "id": "000000011",
            "title": "React",
            "alias": ["React", "React.js", "前端框架"],
            "image": "https://react.dev/images/home/logo-dark@2x.png",
            "abstract": "React 是 Meta 开发的用于构建 Web 和移动用户界面的开源 JavaScript 库，以组件化和声明式编程为核心。",
            "url": "https://react.dev",
            "infoBox": {
              "名称": "React（React.js）",
              "开发者": "Meta（前 Facebook）",
              "首次发布": "2013年5月",
              "许可协议": "MIT",
              "核心贡献者": "Jordan Walke",
              "特点": "虚拟 DOM、JSX 语法、单向数据流"
            },
            "content": [
              {
                "type": "paragraph",
                "text": "React 由 Facebook 软件工程师 Jordan Walke 创建，最初用于新闻 Feed 改进，2013 年在 JSConfUS 上正式开源。React 采用声明式组件模型，通过虚拟 DOM 高效更新界面，并与 JSX 语法结合，大幅简化了复杂 UI 的构建逻辑。"
              },
              {
                "type": "image",
                "src": "https://react.dev/images/home/component-example.png",
                "caption": "React 组件示例"
              },
              {
                "type": "subtitle",
                "text": "生态与演进"
              },
              {
                "type": "paragraph",
                "text": "React 的生态包括 React Router（路由）、Redux/Zustand（状态管理）、Next.js（服务端渲染）等。2019 年推出的 Hooks API 革新了逻辑复用模式。根据 2025 年开发者调查，React 仍居前端框架使用率首位，月下载量超过 2 亿次。"
              }
            ]
          },
          {
            "id": "000000012",
            "title": "Git",
            "alias": ["Git", "版本控制", "分布式版本控制系统"],
            "image": "https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png",
            "abstract": "Git 是 Linus Torvalds 创建的分布式版本控制系统，以其速度、数据完整性和非线性开发支持成为现代开发的事实标准。",
            "url": "https://git-scm.com",
            "infoBox": {
              "名称": "Git",
              "创始人": "Linus Torvalds",
              "首次发布": "2005年4月",
              "许可协议": "GPL v2",
              "语言": "C, Shell, Perl",
              "特点": "分布式、快照存储、强大分支"
            },
            "content": [
              {
                "type": "paragraph",
                "text": "Git 由 Linux 内核创始人 Linus Torvalds 于 2005 年因 BitKeeper 许可证变更而紧急开发，目标是为 Linux 内核社区提供高性能、全分布式且内容安全可靠的版本控制系统。Git 将数据视为快照流，所有操作几乎全在本地执行，分支管理极为轻量高效。"
              },
              {
                "type": "image",
                "src": "https://git-scm.com/images/branching-illustration@2x.png",
                "caption": "Git 分支模型示意"
              },
              {
                "type": "subtitle",
                "text": "行业采用"
              },
              {
                "type": "paragraph",
                "text": "Git 是目前全世界使用最广泛的版本控制系统。GitHub、GitLab、Bitbucket 等代码托管平台均基于 Git 构建。著名的工作流如 Git Flow、GitHub Flow 成为团队协作标准。没有 Git，现代 DevOps 和开源协作将难以想象。"
              }
            ]
          },
          {
            "id": "000000013",
            "title": "Node.js",
            "alias": ["Node.js", "Node", "服务器端 JavaScript"],
            "image": "https://nodejs.org/static/images/logo.svg",
            "abstract": "Node.js 是基于 Chrome V8 引擎的开源 JavaScript 运行时，让 JavaScript 离开浏览器端，用于构建高性能网络服务。",
            "url": "https://nodejs.org",
            "infoBox": {
              "名称": "Node.js",
              "创始人": "Ryan Dahl",
              "首次发布": "2009年5月",
              "平台": "Windows, macOS, Linux",
              "核心引擎": "V8 (JavaScript), libuv",
              "包管理器": "npm",
              "特点": "事件驱动、非阻塞 I/O"
            },
            "content": [
              {
                "type": "paragraph",
                "text": "Node.js 由 Ryan Dahl 在 2009 年 JSConf EU 上首次演示，其目标是用事件驱动、非阻塞 I/O 模型解决高并发问题。通过将 Google 的 V8 引擎与 libuv 库结合，Node.js 使 JavaScript 可以直接操作文件系统和网络，实现全栈开发语言统一。"
              },
              {
                "type": "image",
                "src": "https://nodejs.org/static/images/logo-hexagon-card.png",
                "caption": "Node.js 六边形标志"
              },
              {
                "type": "subtitle",
                "text": "生态贡献"
              },
              {
                "type": "paragraph",
                "text": "伴随 Node.js 而生的 npm 包管理器是全球最大的开源库注册中心，拥有超过两百万个包。Express.js、Socket.IO、Next.js 等框架的共同繁荣，使 Node.js 在后端、工具链（如 Webpack、Vite）和桌面端（Electron）全面渗透，月下载量超过百亿次。"
              }
            ]
          },
          {
            "id": "000000014",
            "title": "Unity",
            "alias": ["Unity", "Unity3D", "游戏引擎"],
            "image": "https://unity.com/sites/default/files/2022-09/unity-logo-dark.png",
            "abstract": "Unity 是全球领先的实时 3D 开发平台，为游戏、影视、建筑等提供跨平台的创建和运行能力。",
            "url": "https://unity.com",
            "infoBox": {
              "名称": "Unity",
              "开发商": "Unity Technologies",
              "首次发布": "2005年6月（Mac OS X）",
              "平台支持": "超过 25 个平台",
              "语言": "C#、Visual Scripting",
              "用户基础": "月活开发者超 150 万",
              "特点": "可视化编辑器、跨平台部署、庞大资产商店"
            },
            "content": [
              {
                "type": "paragraph",
                "text": "Unity 由 David Helgason、Joachim Ante 和 Nicholas Francis 在丹麦哥本哈根创建，初衷是让游戏开发民主化。2020 年 IPO 且市值一度突破 500 亿美元。其强大的可视化编辑器和 C# 脚本系统大幅降低了 3D 开发门槛，全球超 50% 的手游使用 Unity 制作。"
              },
              {
                "type": "image",
                "src": "https://unity.com/sites/default/files/styles/hero_large/public/2023-01/unity-2023-hero.jpg",
                "caption": "Unity 编辑器实时渲染场景"
              },
              {
                "type": "subtitle",
                "text": "行业应用"
              },
              {
                "type": "paragraph",
                "text": "除游戏外，Unity 已广泛应用于汽车 HMI、建筑 BIM 可视化、影视虚拟制片（如《曼达洛人》）和工业数字孪生。Unity Asset Store 提供数百万种插件与资源。著名作品包括《原神》《精灵宝可梦 GO》《炉石传说》等。"
              }
            ]
          },
          {
            "id": "000000015",
            "title": "Redis",
            "alias": ["Redis", "缓存数据库", "键值存储"],
            "image": "https://redis.io/images/logos/redis-logo.svg",
            "abstract": "Redis 是开源的内存数据结构存储系统，可用作数据库、缓存和消息中间件，以高性能和丰富数据类型著称。",
            "url": "https://redis.io",
            "infoBox": {
              "名称": "Redis",
              "创始人": "Salvatore Sanfilippo (antirez)",
              "首次发布": "2009年",
              "许可协议": "双许可（原 BSD/ 改为 RSALv2/SSPL）",
              "语言": "C 语言编写",
              "特点": "内存存储、丰富数据结构、持久化"
            },
            "content": [
              {
                "type": "paragraph",
                "text": "Redis 全称 REmote DIctionary Server，由意大利开发者 Salvatore Sanfilippo 于 2009 年创建，旨在解决实时 Web 应用的性能瓶颈。Redis 支持字符串、列表、哈希、集合、有序集合、流等多种数据结构，所有操作在内存中完成，读写速度通常达到每秒数十万次。"
              },
              {
                "type": "image",
                "src": "https://redis.io/images/home/data-structures.png",
                "caption": "Redis 支持的数据结构类型"
              },
              {
                "type": "subtitle",
                "text": "生态与影响"
              },
              {
                "type": "paragraph",
                "text": "Redis 是全球最受欢迎的键值存储，在 DB-Engines 排名中常年位居键值类第一。被 Twitter、GitHub、Stack Overflow 等广泛采用，支撑着排行榜、计数器、分布式锁和消息队列等场景。其模块系统（如 RediSearch）进一步扩展了全文搜索和 AI 能力。"
              }
            ]
          },
          {
            "id": "000000016",
            "title": "MongoDB",
            "alias": ["MongoDB", "Mongo", "文档数据库"],
            "image": "https://www.mongodb.com/assets/images/global/mongodb-logo-white.png",
            "abstract": "MongoDB 是领先的 NoSQL 文档数据库，采用灵活的 JSON 类似文档模型，为现代应用程序提供高性能、高可用和易扩展的数据存储。",
            "url": "https://www.mongodb.com",
            "infoBox": {
              "名称": "MongoDB",
              "开发商": "MongoDB Inc.",
              "首次发布": "2009年2月",
              "许可协议": "SSPL",
              "语言": "C++ 编写",
              "数据模型": "文档型（BSON）",
              "特点": "灵活的 Schema、水平扩展、聚合框架"
            },
            "content": [
              {
                "type": "paragraph",
                "text": "MongoDB 由 DoubleClick 前高管 Dwight Merriman、Eliot Horowitz 和 Kevin Ryan 于 2007 年创立，2009 年正式发布。其名称来源于“humongous”（巨大）一词。MongoDB 使用类似 JSON 的 BSON 格式存储数据，避免了传统关系型数据库的表连接操作，非常适合快速迭代的敏捷开发。"
              },
              {
                "type": "image",
                "src": "https://www.mongodb.com/docs/images/mongodb-architecture.png",
                "caption": "MongoDB 集群架构"
              },
              {
                "type": "subtitle",
                "text": "行业采用与云化"
              },
              {
                "type": "paragraph",
                "text": "MongoDB 已在全球拥有数万客户，包括 Bosch、Toyota、Forbes 等。其托管云服务 MongoDB Atlas 支持 AWS、Azure、GCP 三大平台，提供自动扩缩、全文搜索、数据湖和向量搜索功能。MongoDB 在 2026 年增强 AI 集成，支持 RAG 应用构建。"
              }
            ]
          },
          {
            "id": "000000017",
            "title": "WordPress",
            "alias": ["WordPress", "WP", "内容管理系统"],
            "image": "https://s.w.org/style/images/about/WordPress-logotype-standard.png",
            "abstract": "WordPress 是全球最流行的开源内容管理系统（CMS），以 PHP 和 MySQL 构建，支撑着全球超过 40% 的网站。",
            "url": "https://wordpress.org",
            "infoBox": {
              "名称": "WordPress",
              "创始人": "Matt Mullenweg 与 Mike Little",
              "首次发布": "2003年5月",
              "许可协议": "GPLv2",
              "语言": "PHP",
              "市场规模": "全球网站占比 43% 以上",
              "特点": "主题、插件系统、Gutenberg 编辑器"
            },
            "content": [
              {
                "type": "paragraph",
                "text": "WordPress 诞生于 2003 年，源自 b2/cafelog 博客平台的继任项目。在 Matt Mullenweg 和 Mike Little 的带领下，迅速成长为功能强大的建站系统。凭借“著名 5 分钟安装”体验和庞大的主题、插件生态，WordPress 极大地降低了个人和企业的建站门槛。"
              },
              {
                "type": "image",
                "src": "https://s.w.org/images/home/screen-themes.png",
                "caption": "WordPress 仪表板与 Gutenberg 块编辑器"
              },
              {
                "type": "subtitle",
                "text": "生态统治力"
              },
              {
                "type": "paragraph",
                "text": "WordPress 拥有超过 60,000 个免费插件和数千个主题，从个人博客到《纽约客》《白宫》等顶级媒体均在使用。其 REST API 和无头 CMS 模式也吸引了大量开发者。WooCommerce 插件更是全球最大的电子商务平台之一。社区驱动的 WordCamp 活动遍布世界。"
              }
            ]
          },
          {
            "id": "000000018",
            "title": "Android Studio",
            "alias": ["Android Studio", "安卓开发IDE", "Google IDE"],
            "image": "https://developer.android.com/static/studio/images/android-studio-logo.svg",
            "abstract": "Android Studio 是 Google 官方推出的 Android 应用集成开发环境，基于 IntelliJ IDEA 构建，提供全方位的开发和调试工具。",
            "url": "https://developer.android.com/studio",
            "infoBox": {
              "名称": "Android Studio",
              "开发商": "Google、JetBrains",
              "首次发布": "2013年5月（stable 2014年12月）",
              "平台": "Windows, macOS, Linux, ChromeOS",
              "核心基础": "IntelliJ IDEA 社区版",
              "语言支持": "Kotlin、Java、C++",
              "特点": "可视化布局编辑器、模拟器、性能分析"
            },
            "content": [
              {
                "type": "paragraph",
                "text": "Android Studio 作为 Eclipse ADT 的替代品于 2013 年 I/O 大会上宣布，2014 年推出首个稳定版。它集成了 Gradle 构建系统、强大的代码检查和重构能力。2017 年，Google 宣布 Kotlin 成为 Android 开发首选语言，Android Studio 随即提供了一流的 Kotlin 支持。"
              },
              {
                "type": "image",
                "src": "https://developer.android.com/static/studio/images/studio-home-hero.png",
                "caption": "Android Studio 代码编辑器与模拟器视图"
              },
              {
                "type": "subtitle",
                "text": "生态与现状"
              },
              {
                "type": "paragraph",
                "text": "Android Studio 内置 Android 虚拟设备（AVD）模拟器、性能分析器（CPU、内存、网络）、Firebase 集成和 Jetpack Compose UI 工具包支持。它完美适配大屏设备、穿戴设备和 Android Automotive。截至 2025 年，是全球超过 500 万 Android 开发者的首选 IDE。"
              }
            ]
          },
  {
"id": "000000019",
"title": "Nginx",
"alias": ["Nginx", "Engine X", "Web服务器"],
"image": "https://nginx.org/nginx.png",
"abstract": "Nginx 是高性能的开源 HTTP 和反向代理服务器，也是 IMAP/POP3 代理服务器，以高并发、低内存消耗著称，被全球超过 35% 的网站采用。",
"url": "https://nginx.org",
"infoBox": {
  "名称": "Nginx",
  "创始人": "Igor Sysoev",
  "首次发布": "2004年10月",
  "许可协议": "2-clause BSD",
  "语言": "C",
  "特点": "事件驱动、异步非阻塞、模块化架构",
  "发音": "Engine X"
},
"content": [
  {
    "type": "paragraph",
    "text": "Nginx（发音为“engine X”）由俄罗斯工程师 Igor Sysoev 于 2002 年启动开发，2004 年首次公开发布。最初为 Rambler 网站 5 亿日请求的高并发场景设计，目标是解决 C10k 问题（同时处理 10000 个连接）。凭借异步、事件驱动的架构，它能够在保持极低内存开销的同时支撑海量并发连接。"
  },
  {
    "type": "image",
    "src": "https://www.nginx.com/wp-content/uploads/2020/04/nginx-architecture.png",
    "caption": "Nginx 事件驱动架构示意图"
  },
  {
    "type": "subtitle",
    "text": "核心功能与生态"
  },
  {
    "type": "paragraph",
    "text": "Nginx 不仅是高性能静态资源服务器，更广泛用作反向代理、负载均衡器和 HTTP 缓存。2011 年成立 Nginx, Inc. 提供商业版 Nginx Plus，增加主动健康检查、会话保持和 JWT 认证等增强功能。Nginx Unit 和 Nginx Ingress Controller 进一步拓展了微服务和 Kubernetes 领地的应用。"
  },
  {
    "type": "subtitle",
    "text": "市场主导地位"
  },
  {
    "type": "paragraph",
    "text": "根据 Netcraft 统计，Nginx 长期位居全球 Web 服务器市场第二位（仅次于 Apache），在活跃站点中份额超过 35%，在高流量站点中占比一度超过 60%。Netflix、Airbnb、Dropbox 等知名平台均使用 Nginx 处理数十亿的日均请求。2019 年被 F5 Networks 收购后，继续引领现代 Web 和应用交付。"
  }
]
},
{
"id": "00000001a",
"title": "了了了岭工作室",
"alias": ["了了了岭", "LLL Studio"],
"abstract": "了了了岭工作室是一个专注于轻量级、去中心化网络工具开发的独立技术团队，旗下拥有<a href=\"leleart.html?id=000000002\">了了了搜</a>、<a href=\"leleart.html?id=00000001b\">了了了词条</a>、<a href=\"leleart.html?id=00000001c\">了了了岭</a>、<a href=\"leleart.html?id=00000001d\">了了了新岭</a>、<a href=\"leleart.html?id=00000001e\">了了了游</a>、<a href=\"leleart.html?id=00000001f\">了了了读</a>以及<a href=\"leleart.html?id=000000020\">了了了助</a>等多个创新产品。",
"infoBox": {
  "工作室名称": "了了了岭工作室",
  "成立时间": "2025年",
  "代表产品": "了了了搜、了了了词条、了了了岭、了了了新岭、了了了游、了了了助、了了了读",
  "技术栈": "HTML/CSS/JavaScript, WebRTC, P2P"
},
"content": [
  {
    "type": "paragraph",
    "text": "了了了岭工作室成立于2025年，是一个完全自发的独立技术团队，致力于在有限的硬件条件下开发高效、实用的网页工具。工作室以“无服务器优先”和“用户数据自主可控”为设计哲学，所有产品均可在浏览器端直接运行，无需安装任何软件或依赖中心化服务器。"
  },
  {
    "type": "subtitle",
    "text": "产品矩阵"
  },
  {
    "type": "paragraph",
    "text": "工作室目前已经推出和正在研发多款核心产品：<br><br>1. <b><a href=\"leleart.html?id=000000002\">了了了搜</a></b> —— 一款聚合搜索引擎与网址导航，集成了数千个常用网站的数据库，支持智能加权搜索和自建百科词条。<br><br>2. <b><a href=\"leleart.html?id=00000001b\">了了了词条</a></b> —— 一个完全开放的百科词条系统，允许用户像编辑百度百科一样创建自己的知识卡片，所有词条均可通过了了了搜进行检索和展示。<br><br>3. <b><a href=\"leleart.html?id=00000001c\">了了了岭</a></b> —— 一个基于WebRTC P2P技术的即时通讯网页，无需账号注册即可在浏览器端发起加密对话，通讯链路完全去中心化，不经过任何中转服务器。<br><br>4. <b><a href=\"leleart.html?id=00000001d\">了了了新岭</a></b> —— 了了了岭的云端升级版本（构思中），计划引入分布式信令集群与离线消息能力。<br><br>5. <b><a href=\"leleart.html?id=00000001e\">了了了游</a></b> —— 一个集成海量在线小游戏链接的娱乐导航网页（开发初期，游戏量稀少，仅有部分网上游戏以及本地游戏）。<br><br>6. <b><a href=\"leleart.html?id=00000001f\">了了了读</a></b> —— 一款正在开发中的轻量级在线阅读工具。<br><br>7. <b><a href=\"leleart.html?id=000000020\">了了了助</a></b> —— 在线工具助手，提供图片转换等实用功能。"
  },
  {
    "type": "paragraph",
    "text": "欢迎访问 <a href=\"../../打开这个.html\" target=\"_blank\">工作室主页</a> 了解更多信息。"
  },
  {
    "type": "subtitle",
    "text": "技术理念"
  },
  {
    "type": "paragraph",
    "text": "了了了岭工作室坚持“极简即最强”的工程理念。所有项目采用纯原生技术栈（HTML/CSS/JavaScript），不使用任何前端框架，不依赖第三方后端服务，确保代码轻量、运行快速、维护方便。"
  }
]
},
{
"id": "00000001b",
"title": "了了了词条",
"alias": ["了了了百科", "LLL Baike"],
"abstract": "了了了词条是由<a href=\"leleart.html?id=00000001a\">了了了岭工作室</a>推出的开源百科词条系统，是<a href=\"leleart.html?id=000000002\">了了了搜</a>的核心功能之一。",
"infoBox": {
  "产品名称": "了了了词条",
  "隶属": "<a href=\"leleart.html?id=00000001a\">了了了岭工作室</a>",
  "技术基础": "JavaScript, JSON",
  "首次发布": "2026年",
  "核心功能": "词条创建、加权搜索、详情展示"
},
"content": [
  {
    "type": "paragraph",
    "text": "了了了词条是<a href=\"leleart.html?id=00000001a\">了了了岭工作室</a>旗下《了了了搜》搜索引擎的核心内容组件。它提供了一套完整的百科词条管理系统，用户只需编辑一个JSON文件（leleart.js），即可创建结构化的知识卡片，并在搜索结果中以醒目的样式优先展示。每条词条支持标题、别名、图片、信息栏和富文本正文内容，格式灵活、扩展性强。"
  },
  {
    "type": "subtitle",
    "text": "技术实现"
  },
  {
    "type": "paragraph",
    "text": "了了了词条采用纯前端方案实现。词条数据存储为独立的JavaScript数组，通过简单的加权匹配算法与用户搜索关键词进行关联。当用户点击词条卡片时，系统会通过URL参数跳转至专门的词条详情页，页面根据ID动态渲染出完整的百科内容。"
  },
  {
    "type": "subtitle",
    "text": "生态与扩展"
  },
  {
    "type": "paragraph",
    "text": "了了了词条的设计理念是“人人可编辑、本地即百科”。未来计划引入社区协作编辑、版本历史追踪以及多语言支持。作为了了了搜的重要组成部分，了了了词条与该平台的其他产品（如<a href=\"leleart.html?id=00000001c\">了了了岭</a>即时通讯、<a href=\"leleart.html?id=00000001e\">了了了游</a>娱乐导航）紧密联动，共同构成<a href=\"leleart.html?id=00000001a\">了了了岭工作室</a>的核心产品矩阵。"
  }
]
},
{
"id": "00000001c",
"title": "了了了岭",
"alias": ["LLL P2P", "了了了通讯"],
"abstract": "了了了岭是由<a href=\"leleart.html?id=00000001a\">了了了岭工作室</a>开发的基于WebRTC P2P技术的浏览器端加密即时通讯工具。",
"url": "../client.leleleling.html",
"infoBox": {
  "产品名称": "了了了岭",
  "隶属": "<a href=\"leleart.html?id=00000001a\">了了了岭工作室</a>",
  "技术基础": "WebRTC, P2P, 端到端加密",
  "协议类型": "点对点（Peer-to-Peer）",
  "核心特点": "无服务器、无账号、无日志",
  "状态": "已上线测试"
},
"content": [
  {
    "type": "paragraph",
    "text": "了了了岭是一款完全基于浏览器端运行的即时通讯工具。它利用WebRTC技术，在两个浏览器之间建立直接的加密数据通道，实现文本消息的实时传输。整个通讯过程完全去中心化，不经过任何中间服务器，用户只需打开网页并分享一个临时会话ID即可开始对话。"
  },
  {
    "type": "subtitle",
    "text": "技术架构"
  },
  {
    "type": "paragraph",
    "text": "了了了岭的核心信令交换通过极简的临时ID匹配机制完成。当两个用户输入相同的会话ID时，浏览器通过STUN/TURN协议穿透NAT网络，建立Peer-to-Peer连接。一旦通道建立，所有的消息内容均通过端到端加密传输，服务端无法解密或存储任何通讯内容。"
  },
  {
    "type": "subtitle",
    "text": "产品愿景"
  },
  {
    "type": "paragraph",
    "text": "作为<a href=\"leleart.html?id=00000001a\">了了了岭工作室</a>“轻量去中心化”理念的旗舰产品，了了了岭的目标是提供一种零信任环境下的安全通讯方案。其云端升级版本《<a href=\"leleart.html?id=00000001d\">了了了新岭</a>》正在构思中，计划在保持P2P架构优势的同时引入云端中继冗余，提升连接稳定性和跨网段兼容性。"
  }
]
},
{
"id": "00000001d",
"title": "了了了新岭",
"alias": ["New LLL", "了了了岭云端版"],
"abstract": "了了了新岭是了了了岭工作室正在构思的下一代云端即时通讯平台，旨在为了了了岭提供更稳定的云端支持。",
"infoBox": {
  "产品名称": "了了了新岭",
  "隶属": "<a href=\"leleart.html?id=00000001a\">了了了岭工作室</a>",
  "前身": "<a href=\"leleart.html?id=00000001c\">了了了岭</a>",
  "当前状态": "构思中，待开发",
  "规划特性": "云端冗余、消息漫游、群组通讯"
},
"content": [
  {
    "type": "paragraph",
    "text": "了了了新岭作为了了了岭的云端增强版，目前仍处于早期构想阶段。项目计划在保留端到端加密优势的同时，引入分布式信令服务以解决复杂的网络穿透问题，并实现离线消息缓存与多端同步。"
  },
  {
    "type": "subtitle",
    "text": "预期改进"
  },
  {
    "type": "paragraph",
    "text": "未来的了了了新岭将尝试突破纯P2P的限制，加入轻量级云中继，提升在对称NAT等恶劣网络环境下的连接成功率。同时，群组聊天、文件分享等功能也在规划当中。了了了岭工作室将根据社区反馈和技术积累逐步推进开发。"
  }
],
"url": ""
},
{
"id": "00000001e",
"title": "了了了游",
"alias": ["LLL Game", "了了了游戏导航"],
"abstract": "了了了游是了了了岭工作室推出的在线游戏聚合导航网页，目前刚开始制作，游戏量稀少。",
"url": "../了了了游/index.html",
"infoBox": {
  "产品名称": "了了了游",
  "隶属": "<a href=\"leleart.html?id=00000001a\">了了了岭工作室</a>",
  "当前状态": "开发中（初期）",
  "规划功能": "游戏收录、分类浏览、一键跳转"
},
"content": [
  {
    "type": "paragraph",
    "text": "了了了游致力于打造一个轻量级的HTML5小游戏入口集合，让用户无需注册即可快速开始游戏。目前项目刚刚启动，仅有部分网上收集的游戏以及本地游戏，游戏数量还比较稀少，但会持续扩充。"
  },
  {
    "type": "subtitle",
    "text": "开发计划"
  },
  {
    "type": "paragraph",
    "text": "开发团队正逐步筛选优质游戏链接，并构建基础导航框架。待核心功能稳定后，将整合进了了了搜的搜索结果，作为娱乐类内容的补充。未来计划加入用户评分、收藏等功能。"
  }
]
},
{
"id": "00000001f",
"title": "了了了读",
"alias": ["LLL Read", "了了了阅读"],
"abstract": "了了了读是了了了岭工作室正在开发的一款轻量级在线阅读工具，旨在提供纯净的电子书阅读体验。",
"url": "../了了了读/lelereading.html",
"infoBox": {
  "产品名称": "了了了读",
  "隶属": "<a href=\"leleart.html?id=00000001a\">了了了岭工作室</a>",
  "当前状态": "待开发",
  "技术方向": "前端解析、EPUB/Markdown 支持",
  "特色": "本地阅读、无广告、跨设备同步（规划）"
},
"content": [
  {
    "type": "paragraph",
    "text": "了了了读是工作室在阅读领域的一次尝试，计划实现一个在浏览器端直接打开EPUB、Markdown等文档的工具，让用户可以方便的阅读和管理自己的电子书库。"
  },
  {
    "type": "subtitle",
    "text": "功能规划"
  },
  {
    "type": "paragraph",
    "text": "初期版本将支持简单的文件拖拽打开、目录导航、文字大小调整和夜间模式。后续可能会加入书摘导出、阅读进度同步等高级功能。产品同样会遵循“无服务器、纯前端”的原则，保证用户数据的私密性。"
  }
]
},
{
"id": "000000020",
"title": "了了了助",
"alias": ["LLL Tool", "了了了工具", "图片转换器"],
"abstract": "了了了助是了了了岭工作室推出的在线实用工具助手，首个工具为图片转换器，支持图片与Base64编码互转。",
"url": "../了了了助/index.html",
"infoBox": {
  "产品名称": "了了了助",
  "隶属": "<a href=\"leleart.html?id=00000001a\">了了了岭工作室</a>",
  "当前主要工具": "图片转换器",
  "技术特色": "纯前端处理、隐私安全",
  "扩展计划": "更多效率工具持续加入"
},
"content": [
  {
    "type": "paragraph",
    "text": "了了了助是了了了岭工作室旗下的在线工具助手集合，秉承工作室一贯的“无服务器、纯前端”理念，所有工具均在浏览器端本地运行，无需上传任何数据到服务器，确保用户隐私安全。"
  },
  {
    "type": "subtitle",
    "text": "图片转换器"
  },
  {
    "type": "paragraph",
    "text": "作为了了了助的首发工具，图片转换器提供了便捷的双向转换功能：用户可以将任意图片转换为包含Base64编码的JS文件，便于嵌入网页或脚本开发；同时也能将之前生成的JS文件拖入，一键还原出原始图片。支持JPG、PNG、GIF、WebP等常见格式。"
  },
  {
    "type": "subtitle",
    "text": "未来展望"
  },
  {
    "type": "paragraph",
    "text": "了了了助将持续扩充更多实用工具，如二维码生成器、文本加密解密、颜色转换等，目标成为一个轻量但全面的在线工具箱。"
  }
]
},
// ==================== 新增5个真实词条 ====================
{
"id": "000000021",
"title": "Canva（可画）",
"alias": ["Canva", "可画", "在线设计"],
"image": "https://static.canva.cn/static/images/apple-touch-icon-152x152.png",
"abstract": "Canva是全球领先的在线图形设计平台，提供海量模板和素材，让任何人都能轻松创建专业设计。",
"url": "https://www.canva.cn",
"infoBox": {
  "产品名称": "Canva（可画）",
  "外文名": "Canva",
  "成立时间": "2012年",
  "总部地点": "澳大利亚悉尼",
  "联合创始人": "Melanie Perkins, Cliff Obrecht, Cameron Adams",
  "平台类型": "SaaS, 图形设计",
  "特点": "海量模板、拖拽式操作、团队协作"
},
"content": [
  {
    "type": "paragraph",
    "text": "Canva（中文名：可画）是一个在线图形设计平台，由Melanie Perkins、Cliff Obrecht和Cameron Adams于2012年创立。它彻底颠覆了传统设计工具的使用模式，通过提供丰富的模板、图片、字体和图标等素材，让没有任何设计基础的用户也能快速制作出精美的海报、演示文稿、社交媒体图片和视频等视觉内容。"
  },
  {
    "type": "image",
    "src": "https://static.canva.cn/web/images/008a3e2e24e973bcb65e.jpg",
    "caption": "Canva中文版编辑器界面"
  },
  {
    "type": "subtitle",
    "text": "发展历程与市场地位"
  },
  {
    "type": "paragraph",
    "text": "Canva自推出以来增长迅猛，截至2025年，其全球月活跃用户已超过1.7亿，遍布190多个国家和地区。公司估值在2024年达到约400亿美元，成为全球最有价值的私人软件公司之一。Canva的成功源于其“让设计触手可及”的使命，以及不断创新的产品功能，如AI驱动的Magic Studio和面向企业客户的Canva Enterprise。"
  }
]
},
{
"id": "000000022",
"title": "Twitter（X）",
"alias": ["Twitter", "X", "推特", "社交网络"],
"image": "https://abs.twimg.com/icons/apple-touch-icon.png",
"abstract": "Twitter（现已更名为X）是全球知名的社交媒体平台，以实时、简洁的信息流为核心特色，曾是全球公共对话的“市政厅”。",
"url": "https://x.com",
"infoBox": {
  "产品名称": "X（原Twitter）",
  "外文名": "X (formerly Twitter)",
  "成立时间": "2006年",
  "总部地点": "美国旧金山",
  "创始人": "Jack Dorsey, Noah Glass, Biz Stone, Evan Williams",
  "现任CEO": "Linda Yaccarino (2023年起)",
  "特色": "短文（Threads）、实时热搜、蓝V认证"
},
"content": [
  {
    "type": "paragraph",
    "text": "Twitter由杰克·多西（Jack Dorsey）等人于2006年创建，最初是公司内部的一个短信群发工具，后发展成为全球最具影响力的社交媒体平台之一。其核心特色是允许用户发布不超过140个字符的短消息（即“推文”），这种简洁的形式极大降低了内容创作的门槛，并使得信息能够以极快的速度传播。"
  },
  {
    "type": "image",
    "src": "https://cdn.cms-twdigitalassets.com/content/dam/about-twitter/x/brand-toolkit/rebrand-pillars-4.jpg",
    "caption": "X（原Twitter）的品牌标识演变"
  },
  {
    "type": "subtitle",
    "text": "收购与巨变"
  },
  {
    "type": "paragraph",
    "text": "2022年10月，埃隆·马斯克（Elon Musk）以440亿美元完成对Twitter的收购，并将其私有化。2023年7月，马斯克宣布将Twitter更名为“X”，并计划将其打造成一个集社交、支付、音视频于一体的“万能应用”。尽管经历了一系列动荡的变革，X仍然保持着数亿日活用户，是新闻、体育和政治讨论的中心舞台。"
  }
]
},
{
"id": "000000023",
"title": "Instagram",
"alias": ["Instagram", "Ins", "照片墙", "社交应用"],
"image": "https://www.instagram.com/static/images/ico/apple-touch-icon-76x76-precomposed.png/9324a3f8b5e7.png",
"abstract": "Instagram是Meta公司旗下一款以图片和视频分享为核心的全球顶级社交媒体应用，以精美的滤镜和视觉化内容风靡世界。",
"url": "https://www.instagram.com",
"infoBox": {
  "产品名称": "Instagram",
  "外文名": "Instagram (简称Ins或IG)",
  "成立时间": "2010年",
  "总部地点": "美国旧金山",
  "创始人": "Kevin Systrom, Mike Krieger",
  "所属公司": "Meta Platforms, Inc.",
  "特点": "图片/视频分享、限时动态、Reels"
},
"content": [
  {
    "type": "paragraph",
    "text": "Instagram由凯文·斯特罗姆（Kevin Systrom）和迈克·克里格（Mike Krieger）于2010年创建并被苹果App Store评为“年度应用”，上线仅两个月即吸引100万用户。2012年，Facebook（现Meta）以约10亿美元的天价将其收购，此后在Facebook的庞大资源推动下，用户数呈爆炸式增长。"
  },
  {
    "type": "image",
    "src": "https://about.meta.com/brand/resources/instagram/instagram-logo-image/instagram-logo.png",
    "caption": "Instagram的品牌标志"
  },
  {
    "type": "subtitle",
    "text": "功能演进与影响"
  },
  {
    "type": "paragraph",
    "text": "Instagram从一个简单的滤镜照片分享应用，逐渐引入了“限时动态”（Stories）、长视频平台IGTV、短视频功能Reels（对标TikTok）以及电商购物等强大功能。它不仅深刻改变了人们的社交方式，也催生了“网红经济”和视觉营销产业。截至2025年，Instagram全球月活跃用户已超过20亿，是全球最具影响力的社交媒体之一。"
  }
]
},
{
"id": "000000024",
"title": "Spotify",
"alias": ["Spotify", "声田", "音乐流媒体", "播客"],
"image": "https://www.spotify.com/static/favicon.ico",
"abstract": "Spotify是全球最大的音乐流媒体服务商，提供超过1亿首歌曲和数百万播客的在线收听服务。",
"url": "https://www.spotify.com",
"infoBox": {
  "产品名称": "Spotify",
  "外文名": "Spotify",
  "成立时间": "2006年",
  "总部地点": "瑞典斯德哥尔摩",
  "创始人": "Daniel Ek, Martin Lorentzon",
  "平台类型": "音乐流媒体",
  "特点": "算法推荐、海量曲库、免费+付费模式"
},
"content": [
  {
    "type": "paragraph",
    "text": "Spotify由丹尼尔·埃克（Daniel Ek）和马丁·洛伦松（Martin Lorentzon）于2006年在瑞典创立，2008年正式上线。它以革命性的“免费增值”（Freemium）商业模式起家，用户可选择免费收听含广告的音乐，或付费订阅获得无广告、高音质和离线下载等高级功能。这一模式成功打击了当时猖獗的音乐盗版，重塑了全球音乐产业。"
  },
  {
    "type": "image",
    "src": "https://www.spotify.com/about/img/spotify-logo.svg",
    "caption": "Spotify的绿色圆形品牌标志"
  },
  {
    "type": "subtitle",
    "text": "全球扩张与霸主地位"
  },
  {
    "type": "paragraph",
    "text": "经过十余年的扩张，Spotify的业务已覆盖全球超过180个国家和地区，月活跃用户总数超过6亿，其中付费用户超过2.3亿（截至2024年底）。它不仅拥有最庞大的音乐曲库，还通过收购播客制作公司（如Gimlet Media）、与名人签订独家播客协议（如Joe Rogan）等方式，成为最大的播客平台之一。其强大的算法推荐系统“Discover Weekly”更是被誉为音乐界的“今日头条”。"
  }
]
},
{
"id": "000000025",
"title": "Netflix",
"alias": ["Netflix", "奈飞", "流媒体巨头", "在线影视"],
"image": "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico",
"abstract": "Netflix是全球领先的流媒体娱乐服务公司，提供海量电影、电视剧、纪录片和原创内容。",
"url": "https://www.netflix.com",
"infoBox": {
  "产品名称": "Netflix（奈飞）",
  "外文名": "Netflix, Inc.",
  "成立时间": "1997年",
  "总部地点": "美国加利福尼亚州洛斯盖图",
  "创始人": "Reed Hastings, Marc Randolph",
  "平台类型": "流媒体，在线影视",
  "特点": "海量片库、高分原创、全球化运营"
},
"content": [
  {
    "type": "paragraph",
    "text": "Netflix由里德·哈斯廷斯（Reed Hastings）和马克·兰道夫（Marc Randolph）于1997年创立，最初是一家在线DVD租赁服务商。2007年，Netflix率先推出在线流媒体服务，让订阅用户可以在电脑上即时观看电影和电视剧，这一变革性的举措彻底颠覆了家庭娱乐行业，并导致传统的录像带和DVD租赁店（如Blockbuster）迅速消亡。"
  },
  {
    "type": "image",
    "src": "https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df105d_what_is_netflix_5_en.png",
    "caption": "Netflix支持在各种设备上观看"
  },
  {
    "type": "subtitle",
    "text": "内容为王与全球化"
  },
  {
    "type": "paragraph",
    "text": "2012年，Netflix开始投入巨资制作原创内容，首部原创剧集《莉莉海默》不久后，便推出了风靡全球的政治惊悚剧《纸牌屋》，奠定了其“内容为王”的霸主地位。此后，《怪奇物语》、《鱿鱼游戏》、《星期三》等原创剧集不断刷新收视纪录。截至2025年，Netflix已在190多个国家运营，全球付费订阅用户超过2.8亿，是流媒体行业无可争议的领头羊。"
  }
]
}
];