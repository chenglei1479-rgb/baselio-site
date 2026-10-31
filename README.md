# baselio-site

Baselio 官网的源工程。纯静态站点（HTML + CSS + 一个三语字典脚本），没有构建步骤。

## 结构

```
public/            ← 部署目录（Cloudflare Pages 直接上传这个目录）
  index.html
  styles.css
  app.js           ← 三语字典（zh / en / ja）+ 语言切换
  beta.html        ← 分层申请，生成邮件草稿，不连接申请后端
  logo.png         ← 应用图标
.github/workflows/deploy.yml   ← 推 main 自动发布
```

## 本地预览

```bash
npx serve public
# 或
python -m http.server 5400 --directory public
```

语言：`?lang=zh` / `?lang=en` / `?lang=ja`。选择会存进 `localStorage`（键 `baselio-language`），加载时 URL 参数优先，其次取上次选择，最后回落中文。

## 部署

站点挂在 Cloudflare Pages 项目 **`baselio`**，生产域名 https://baselio.pages.dev 。

- **自动**：推 `main` 触发 `.github/workflows/deploy.yml`。需要在仓库 Secrets 里配两个值：
  - `CLOUDFLARE_API_TOKEN`：Cloudflare → My Profile → API Tokens，权限 `Account → Cloudflare Pages → Edit`
  - `CLOUDFLARE_ACCOUNT_ID`：`afa7d1b6d1b50056211e9bd44a5e6273`
- **手动**（没有 secrets 时）：

```bash
npx wrangler pages deploy public --project-name baselio --branch main
```

生产分支是 `main`：`--branch main` 才会更新 `baselio.pages.dev`，其它分支只会生成预览别名。

## 注意

- 这个仓库是官网的唯一源码。此前线上内容只存在于一台机器的 `dist` 产物里，没有任何版本控制——别再把源码只留在本地。
- `logo.png` 来自桌面应用的 `build/icon.png`；换品牌图标时两边一起换。

## 改版开发与验证

在独立分支开发，提交 PR 供审核；不要推送 `main` 或手动触发生产部署。
部署任务只允许在 `main` 执行，包括手动触发时。PR 检查不会部署站点。

```bash
node --check public/app.js
node --test tests/site.test.cjs
```

`beta.html?role=0|1|2&lang=zh|en|ja` 支持个人、医院/机构和药企/CRO 入口预选。
必填身份、任务和确认框后，生成可核对的邮件草稿；点击邮件链接才会尝试打开邮件应用，仍需用户发送。
没有邮件应用时可复制草稿并发到页面列出的邮箱。本站不保存申请，也不追踪邀请状态。
JavaScript 不可用时不显示表单，但保留直接联系邮箱，防止原生表单把输入写入 URL。

产品演示区明确说明尚无真实录屏/执行记录，不使用占位界面冒充产品。
真实产品演示、申请后端、邀请状态、正式隐私条款和日语医学审校仍需补齐，详见 `docs/redesign-verification.md`。

历史目标 `baselio-prototype.pages.dev` 与此仓库配置的 `baselio.pages.dev` 不同；本次未修改域名、Pages 项目或部署配置中的项目名，也未发布任一站点。
