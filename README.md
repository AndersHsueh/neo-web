# neo 官方门户

静态站点，部署在域名根路径：https://neo.ani-intelligence.com

本目录就是站点根。四页使用目录加 `index.html`，得到干净 URL：`/`、`/install/`、`/changelog/`、`/family/`。页面里的链接是站点根相对路径（如 `/install/`、`/assets/css/site.css`）。

## 发布

把本目录原样放到静态托管的站点根即可，不需要构建步骤，也不需要后端。站点不依赖外网字体或脚本 CDN，断网也能完整阅读。

不要用 `file://` 作为验收方式：根路径链接在直接打开本地文件时可能失效。预览请在本目录启动一个本地静态服务器，例如：

```bash
cd /home/box/projects/neo-homepage
python3 -m http.server 8080
```

然后访问 http://127.0.0.1:8080/ 。

## 发版时改版本号

对外当前版本只应写成已发布的标签。改下面两处，并保持一致：

1. `/version.json` 里的 `version`、`tag`、`released`
2. `/assets/js/version.js` 里的 `window.NEO_VERSION`

各页中带 `data-neo-version` 的文字（含安装页里的 `git checkout` 标签）会由 `version.js` 替换。这些元素里还留有回退文本，供脚本未执行时显示；发版时请一并改成新的已发布标签，避免回退文本落后。安装页正文里的 `git checkout` 必须指向该已发布标签，不要改成默认分支。

不要把尚未发版、仅合入主分支的改动写成当前版本。
