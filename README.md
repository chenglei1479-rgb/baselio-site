# baselio-site

Baselio 官网的源工程。纯静态站点（HTML + CSS + 一个三语字典脚本），没有构建步骤。

## 结构

```
public/            ← 部署目录（Cloudflare Pages 直接上传这个目录）
  index.html
  styles.css
  app.js           ← 三语字典（zh / en / ja）+ 语言切换
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
