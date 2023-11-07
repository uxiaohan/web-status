# uptime-status

一个基于 UptimeRobot API 的在线状态面板

## 事先准备

- 您需要先到 [UptimeRobot](https://uptimerobot.com/ "UptimeRobot") 添加站点监控，并在 My Settings 页面获取 API Key
- 您需要拥有一个网站空间，常见的 Nginx / PHP 等空间即可，甚至是阿里云的 OSS 等纯静态空间也行

## 如何部署：

- 修改 `config.js` 文件：
  - `SiteName`: 要显示的网站名称
  - `ApiKeys`: 从 UptimeRobot 获取的 API Key，支持 Monitor-Specific API Keys 和 Read-Only API Key
  - `CountDays`: 要显示的日志天数，建议 60 或 90，显示效果比较好
  - `ShowLink`: 是否显示站点链接
  - `Navi`: 导航栏的菜单列表
- 将所有文件上传到网站空间

⚠️ git clone 本项目即可。
