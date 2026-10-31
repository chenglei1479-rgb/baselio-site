// Three-language prototype. Same persistence contract as the deployed site:
// ?lang= wins on load, the chosen language is stored, and a missing value falls back to Chinese.
const dictionaries = {
  zh: {
    'nav.capabilities': '产品能力',
    'nav.workflow': '研究流程',
    'nav.trust': '数据与信任',
    'nav.faq': '常见问题',
    'nav.cta': '申请 beta',
    'hero.eyebrow': '医学科研工作台',
    'hero.line1': '让研究，',
    'hero.line2': '步步有据。',
    'hero.lede':
      '从一个值得探索的问题，到一份可核查的研究成果。Baselio 把文献、方案、分析与写作连在同一个项目里，关键决策始终由你确认。',
    'hero.ctaPrimary': '申请 beta',
    'hero.ctaSecondary': '看看能做什么',
    'hero.pill1': '桌面科研智能体',
    'hero.pill2': '研究者主导',
    'hero.pill3': '来源可追溯',
    'cap.eyebrow': '产品能力',
    'cap.title': '为真实的研究工作而构建',
    'cap.lede': '让分散的资料、决策与产出，在同一个研究项目中衔接。',
    'cap.1.title': '找到证据，也看清空白',
    'cap.1.body': '整理已有研究、证据冲突与研究空白，用 PMID / DOI 连接可核查来源。',
    'cap.2.title': '把问题变成方案',
    'cap.2.body': '梳理人群、结局、纳入排除标准与设计，把待补充的伦理与注册信息明确列出。',
    'cap.3.title': '结果回到数据与代码',
    'cap.3.body':
      '在本机 Python / R 环境执行并保存真实输出；发送前有隐私门禁，命中疑似患者信息就拦下。无法执行时明确说明。',
    'cap.4.title': 'PDF 翻译，双语对照',
    'cap.4.body': '论文与 PDF 保留版式地生成双语对照译文，术语、数字与图表标题逐处核对。',
    'cap.5.title': '写作始终有据可依',
    'cap.5.body': '基于已核实文献、方案与真实结果起草论文，缺失信息保留为待补充。',
    'cap.6.title': '换台设备，接着做',
    'cap.6.body':
      '桌面端配对后可用手机浏览器继续查看与提问；算力可接到自己的 SSH 主机，也可只用本机。',
    'flow.eyebrow': '研究流程',
    'flow.title': 'AI 提议，你来确认',
    'flow.lede': '每个关键阶段都停下来等你判断，再进入下一步。',
    'flow.1.title': '定义研究问题',
    'flow.1.body': '明确 PICO / PECO 与主要结局。',
    'flow.2.title': '梳理文献证据',
    'flow.2.body': '确认检索范围与拟纳入文献。',
    'flow.3.title': '设计方案与分析',
    'flow.3.body': '确认研究设计与统计计划。',
    'flow.4.title': '核对结果与论文',
    'flow.4.body': '检查实际输出，审核草稿。',
    'trust.eyebrow': '数据与信任',
    'trust.title': '研究的信任，来自清晰的边界',
    'trust.1.title': '研究者始终主导',
    'trust.1.body': '方案、分析与论文需要研究者核对。草稿不能替代执行记录或最终审核。',
    'trust.2.title': '区分草稿与实际结果',
    'trust.2.body': '追溯输入、方法、代码版本与实际输出；环境无法执行时明确说明。',
    'trust.3.title': '发送前先过隐私门禁',
    'trust.3.body':
      '发出的内容先在本地扫描，命中疑似患者信息就拦下不发送；外发只走固定域名清单。桌面运行不等于全程离线，机构要求仍需核实。',
    'trust.note': 'Baselio 不提供患者诊断、分诊或治疗建议，不替代临床专业判断。',
    'faq.eyebrow': '常见问题',
    'faq.title': '开始之前',
    'faq.1.q': 'Baselio 适合什么研究任务？',
    'faq.1.a': '医学文献综述、新颖性初步评估、研究方案设计、本机数据分析与论文写作。',
    'faq.2.q': '会自动完成和批准研究吗？',
    'faq.2.a': '不会。关键步骤采用「AI 提议 → 研究者确认 → 下一阶段」。',
    'faq.3.q': '数据是否都留在本机？',
    'faq.3.a':
      '不能仅凭桌面应用作此保证。发送前会先做隐私检查，命中疑似患者信息就不发送；外发只走固定域名清单。请仍按机构要求判断能否外发。',
    'faq.4.q': '可以用手机吗？',
    'faq.4.a':
      '可以。桌面端启用远程访问并完成配对后，用手机浏览器即可继续查看与提问；桌面主机需要保持开机和联网。',
    'faq.5.q': '支持哪些界面语言？',
    'faq.5.a':
      '界面提供中文（简繁）、日语、英语、德语、西班牙语、法语、韩语与俄语；日语是当前 beta 的主要体验语言。',
    'faq.6.q': '在哪里获取 Baselio？',
    'faq.6.a': 'beta 期间通过邀请分发；正式安装包、代码签名与自动更新渠道仍在配置中。',
    'cta.title': '下一个研究问题，从这里开始',
    'cta.body': 'beta 期间小范围邀请，欢迎申请体验。',
    'cta.button': '申请 beta'
  },
  en: {
    'nav.capabilities': 'Capabilities',
    'nav.workflow': 'Workflow',
    'nav.trust': 'Trust',
    'nav.faq': 'FAQ',
    'nav.cta': 'Request beta',
    'hero.eyebrow': 'Medical research workspace',
    'hero.line1': 'Research,',
    'hero.line2': 'grounded in evidence.',
    'hero.lede':
      'From a question worth exploring to a result you can verify. Baselio keeps literature, study design, analysis and writing in one project, and every key decision stays yours.',
    'hero.ctaPrimary': 'Request beta',
    'hero.ctaSecondary': 'See what it does',
    'hero.pill1': 'Desktop research agent',
    'hero.pill2': 'Researcher-led',
    'hero.pill3': 'Traceable sources',
    'cap.eyebrow': 'Capabilities',
    'cap.title': 'Built for real research work',
    'cap.lede': 'Scattered material, decisions and outputs meet in one research project.',
    'cap.1.title': 'Find the evidence, see the gaps',
    'cap.1.body':
      'Organise existing studies, conflicts and gaps, with PMID / DOI links to checkable sources.',
    'cap.2.title': 'Turn the question into a protocol',
    'cap.2.body':
      'Work through population, outcomes, eligibility and design, and list what still needs ethics or registration input.',
    'cap.3.title': 'Results stay with data and code',
    'cap.3.body':
      'Run in the local Python / R environment and keep the real output. A privacy gate screens what leaves the machine and stops on suspected patient information; when it cannot run, it says so.',
    'cap.4.title': 'PDF translation, side by side',
    'cap.4.body':
      'Papers and PDFs get a bilingual layout-preserving translation, with terms, numbers and figure captions checked in place.',
    'cap.5.title': 'Writing that keeps its sources',
    'cap.5.body':
      'Draft from verified literature, the protocol and real results, and keep missing information visible.',
    'cap.6.title': 'Pick it up on another device',
    'cap.6.body':
      'After pairing the desktop app, continue reading and asking from a phone browser; compute can run on your own SSH host or stay local.',
    'flow.eyebrow': 'Workflow',
    'flow.title': 'AI proposes, you confirm',
    'flow.lede': 'Every key stage stops for your judgement before the next one starts.',
    'flow.1.title': 'Define the question',
    'flow.1.body': 'Fix PICO / PECO and the primary outcome.',
    'flow.2.title': 'Map the evidence',
    'flow.2.body': 'Confirm the search scope and the studies to include.',
    'flow.3.title': 'Design the analysis',
    'flow.3.body': 'Confirm the study design and statistical plan.',
    'flow.4.title': 'Check results and draft',
    'flow.4.body': 'Inspect real output, review the manuscript.',
    'trust.eyebrow': 'Data & trust',
    'trust.title': 'Trust comes from clear boundaries',
    'trust.1.title': 'The researcher stays in charge',
    'trust.1.body':
      'Protocol, analysis and manuscript need researcher review. Drafts never replace the run record or final approval.',
    'trust.2.title': 'Separate drafts from real results',
    'trust.2.body':
      'Trace inputs, methods, code versions and real output; say so when the environment cannot run.',
    'trust.3.title': 'A privacy gate before anything leaves',
    'trust.3.body':
      'Outgoing text is screened on the machine and stops on suspected patient information; egress only reaches a fixed set of hosts. Desktop does not mean fully offline, so your institution rules still apply.',
    'trust.note':
      'Baselio does not provide diagnosis, triage or treatment advice and does not replace clinical judgement.',
    'faq.eyebrow': 'FAQ',
    'faq.title': 'Before you start',
    'faq.1.q': 'What tasks is Baselio for?',
    'faq.1.a':
      'Literature review, early novelty assessment, protocol design, local data analysis and manuscript writing.',
    'faq.2.q': 'Does it finish and approve research on its own?',
    'faq.2.a': 'No. Key steps follow "AI proposes, researcher confirms, next stage".',
    'faq.3.q': 'Does all data stay on this computer?',
    'faq.3.a':
      'A desktop app cannot promise that by itself. Outgoing text is screened first and suspected patient information is not sent; egress only reaches a fixed set of hosts. Judge against your institution rules.',
    'faq.4.q': 'Can I use it on a phone?',
    'faq.4.a':
      'Yes. After enabling remote access on the desktop and pairing, you can keep reading and asking from a phone browser; the desktop host must stay on and online.',
    'faq.5.q': 'Which interface languages are supported?',
    'faq.5.a':
      'Simplified and Traditional Chinese, Japanese, English, German, Spanish, French, Korean and Russian. Japanese is the main experience language in this beta.',
    'faq.6.q': 'Where do I get Baselio?',
    'faq.6.a':
      'The beta is distributed by invitation; signed installers and auto-update are still being set up.',
    'cta.title': 'Start with your next research question',
    'cta.body': 'A small invited beta — tell us what you want to try.',
    'cta.button': 'Request beta'
  },
  ja: {
    'nav.capabilities': '機能',
    'nav.workflow': '研究の流れ',
    'nav.trust': 'データと信頼',
    'nav.faq': 'よくある質問',
    'nav.cta': 'ベータ版を申し込む',
    'hero.eyebrow': '医学研究ワークスペース',
    'hero.line1': '研究の一歩に、',
    'hero.line2': '確かな根拠を。',
    'hero.lede':
      '探究する価値のある問いから、検証できる研究成果へ。Baselio は文献・研究計画・解析・執筆を一つのプロジェクトにつなぎ、重要な判断は研究者に委ねます。',
    'hero.ctaPrimary': 'ベータ版を申し込む',
    'hero.ctaSecondary': 'できることを見る',
    'hero.pill1': 'デスクトップ研究エージェント',
    'hero.pill2': '研究者が主導',
    'hero.pill3': '出典を追跡',
    'cap.eyebrow': '機能',
    'cap.title': '実際の研究のために',
    'cap.lede': '散らばった資料・判断・成果を、同じ研究プロジェクトでつなぎます。',
    'cap.1.title': 'エビデンスを見つけ、空白も見る',
    'cap.1.body': '既存研究・エビデンスの衝突・空白を整理し、PMID / DOI で検証可能な出典に結びつけます。',
    'cap.2.title': '問いを研究計画へ',
    'cap.2.body': '対象・アウトカム・適格基準・デザインを整理し、倫理・登録の未記入点を明示します。',
    'cap.3.title': '結果はデータとコードに戻す',
    'cap.3.body':
      'ローカルの Python / R 環境で実行し、実際の出力を保存します。送信前にはプライバシー判定があり、患者情報の疑いがあれば送りません。実行できない場合は明示します。',
    'cap.4.title': 'PDF 翻訳を対訳で',
    'cap.4.body': '論文や PDF をレイアウトを保ったまま対訳にし、用語・数値・図表タイトルを照合します。',
    'cap.5.title': '根拠のある執筆',
    'cap.5.body': '検証済みの文献・研究計画・実際の結果から起草し、不足情報は未記入として残します。',
    'cap.6.title': '別の端末から続けられる',
    'cap.6.body':
      'デスクトップとペアリングすれば、スマートフォンのブラウザから確認と質問を続けられます。計算は自分の SSH ホストでも、ローカルのみでも構いません。',
    'flow.eyebrow': '研究の流れ',
    'flow.title': 'AI が提案し、あなたが確認する',
    'flow.lede': '各段階で判断を待ち、確認してから次へ進みます。',
    'flow.1.title': '問いを定義',
    'flow.1.body': 'PICO / PECO と主要アウトカムを定めます。',
    'flow.2.title': 'エビデンスを整理',
    'flow.2.body': '検索範囲と組み入れる文献を確認します。',
    'flow.3.title': '解析を設計',
    'flow.3.body': '研究デザインと統計計画を確認します。',
    'flow.4.title': '結果と原稿を確認',
    'flow.4.body': '実際の出力を確認し、草稿を査読します。',
    'trust.eyebrow': 'データと信頼',
    'trust.title': '信頼は、明確な境界から',
    'trust.1.title': '研究者が主導する',
    'trust.1.body': '研究計画・解析・原稿は研究者の確認が必要です。草稿は実行記録や最終承認の代わりになりません。',
    'trust.2.title': '草稿と実際の結果を分ける',
    'trust.2.body': '入力・手法・コードの版・実際の出力を追跡し、実行できない場合は明示します。',
    'trust.3.title': '送信前にプライバシー判定',
    'trust.3.body':
      '送る内容はまず端末内で判定し、患者情報の疑いがあれば送信しません。外部への送信先は固定のホスト一覧に限られます。デスクトップでも常時オフラインではなく、所属機関の規則に従ってください。',
    'trust.note': 'Baselio は診断・トリアージ・治療の助言を提供せず、臨床判断の代わりになりません。',
    'faq.eyebrow': 'よくある質問',
    'faq.title': 'はじめる前に',
    'faq.1.q': 'どんな研究作業に向いていますか？',
    'faq.1.a': '文献レビュー、新規性の初期評価、研究計画の設計、ローカルでのデータ解析、論文執筆です。',
    'faq.2.q': '研究を自動で完了・承認しますか？',
    'faq.2.a': 'いいえ。主要な段階は「AI が提案 → 研究者が確認 → 次の段階」で進みます。',
    'faq.3.q': 'データはすべて手元に残りますか？',
    'faq.3.a':
      'デスクトップアプリだけでは保証できません。送信前に判定を行い、患者情報の疑いがあれば送りません。送信先は固定のホスト一覧に限られますが、外部送信の可否は所属機関の規則でご判断ください。',
    'faq.4.q': 'スマートフォンでも使えますか？',
    'faq.4.a':
      '使えます。デスクトップ側でリモートアクセスを有効にしてペアリングすると、スマートフォンのブラウザから確認と質問を続けられます。デスクトップは起動したままネット接続が必要です。',
    'faq.5.q': '対応している表示言語は？',
    'faq.5.a':
      '中国語（簡体・繁体）、日本語、英語、ドイツ語、スペイン語、フランス語、韓国語、ロシア語に対応しています。このベータでは日本語が主要な体験言語です。',
    'faq.6.q': 'Baselio はどこで入手できますか？',
    'faq.6.a': 'ベータ版は招待制です。署名済みインストーラーと自動更新は準備中です。',
    'cta.title': '次の研究の問いを、ここから',
    'cta.body': 'ベータ版は招待制です。体験をご希望の方はお申し込みください。',
    'cta.button': 'ベータ版を申し込む'
  }
}

const additions = {
  "zh": {
    "hero.line1": "从临床问题，",
    "hero.line2": "走向有据的研究。",
    "hero.lede": "面向医生与医学研究者的 AI 科研工作台。将文献、研究方案、分析与写作组织在同一项目中；核查证据、确认方法与审核结论，始终由你主导。",
    "hero.ctaSecondary": "了解研究流程",
    "hero.status": "邀请制 Beta · 具体可用能力以获邀版本为准",
    "demo.eyebrow": "产品演示",
    "demo.title": "看看真实的 Baselio 界面",
    "demo.body": "先看整体，再看细节。下方主图展示真实产品的完整英文工作台，包括项目导航、科研状态、任务入口与输入区；辅助图展示英文首页和内置虚构样本。演示项目为空，样本仅含合成数据，均不代表完整科研流程或真实研究结论。",
    "scenes.title": "从门诊后的一个问题开始",
    "scenes.note": "场景说明 · 非执行结果",
    "scene.0.title": "准备研究",
    "scene.0.body": "把临床疑问梳理为人群、干预/暴露、对照与结局。先核对检索范围和文献来源，再讨论研究方案；伦理与注册信息由研究者补充确认。",
    "scene.1.title": "核查统计分析",
    "scene.1.body": "在机构允许的前提下使用去标识化数据。确认变量与统计计划，检查运行环境、代码及实际输出；不能执行时不把示例当作结果。",
    "scene.2.title": "推进论文草稿",
    "scene.2.body": "以核实过的文献和实际分析结果为基础组织草稿。检查引用与数字，保留缺失信息；作者负责最终科学判断与投稿审核。",
    "difference.title": "对话之外，更关注研究的衔接",
    "difference.body": "Baselio 的设计重点是把问题、来源、方法与产出放在同一项目语境中，并保留研究者确认环节。是否适合你的任务，需要用实际版本与真实记录判断；AI 文本不能替代证据、执行或审稿。",
    "audience.title": "为你的研究方式，找到合适的入口",
    "audience.0.title": "医生 / 医学研究者",
    "audience.0.body": "申请个人 Beta，说明当前科研阶段与最希望验证的任务。",
    "audience.1.title": "医院 / 研究机构",
    "audience.1.body": "咨询研究团队试点，先讨论数据边界与院内评估；不承诺已提供私有部署。",
    "audience.2.title": "药企 / CRO",
    "audience.2.body": "提交合作需求，明确研究目标与合规约束；机构协作能力需单独确认。",
    "audience.link": "申请 / 咨询 →",
    "privacy.title": "使用前，先确认数据边界",
    "privacy.body": "本机文件 → 任务所需内容 → 可能调用外部模型或连接服务。具体发送内容与目的地取决于版本和配置；隐私扫描不能保证识别所有敏感信息。不要提交患者资料、未授权数据或密钥。机构使用前应核查供应方、保存期限、删除方式与适用要求，不能将本页视为合规认证。",
    "pricing.title": "Beta 与费用",
    "pricing.body": "当前采用邀请制。可用范围、模型费用、Credits 与机构试点条款需在邀请或咨询时确认；本页不承诺永久免费、固定额度或特定交付时间。",
    "skip": "跳至正文",
    "a11y.nav": "主导航",
    "a11y.language": "选择语言",
    "a11y.pills": "产品特性",
    "a11y.footer": "页脚导航",
    "beta.title": "申请 Baselio Beta",
    "beta.intro": "告诉我们你的研究需求。此表单仅在当前页面生成邮件草稿，不会自动提交或登记申请。请在邮件应用中核对并发送。",
    "beta.role": "你的身份",
    "beta.choose": "请选择",
    "beta.org": "机构名称（可选）",
    "beta.task": "最希望了解的任务",
    "beta.task0": "文献检索与研究方案",
    "beta.task1": "统计分析与数据处理",
    "beta.task2": "论文草稿与引用核查",
    "beta.notice": "隐私提示：不填写患者资料、研究原始数据或其他保密信息。填写内容不会由本站自动保存；发送邮件后按邮件服务及收件方流程处理。申请状态与后续条款请通过邮件确认。",
    "beta.consent": "我理解此操作只生成草稿，并确认未填写敏感信息。",
    "beta.prepare": "生成邮件草稿",
    "beta.ready": "草稿已生成，尚未发送。可打开邮件应用发送；无法打开时请复制下方内容，发至 hello@baselio.dev。",
    "beta.open": "打开邮件应用",
    "beta.draft": "邮件草稿内容",
    "beta.fallback": "也可直接邮件联系 hello@baselio.dev",
    "beta.back": "返回首页",
    "beta.changed": "申请内容已更改，请重新生成草稿。",
    "beta.subject": "Baselio Beta 申请 / 合作咨询",
    "path.label": "研究路径示意 · 非实时执行",
    "path.title": "让下一步，有迹可循",
    "path.0": "一个明确的临床问题",
    "path.1": "可回查的文献来源",
    "path.2": "经确认的方法与分析",
    "path.3": "需要作者审核的草稿",
    "path.review": "每个阶段，由研究者判断",
    "privacy.link": "查看数据与隐私说明 →",
    "privacy.pageTitle": "数据与隐私：先了解，再使用",
    "privacy.intro": "这里区分官网申请流程与科研产品的数据边界。具体配置和机构要求，仍需在使用前逐项核实。",
    "privacy.0.title": "官网如何使用你的填写内容",
    "privacy.0.body": "申请页在浏览器内生成草稿，没有申请数据库或自动提交。只有你在邮件应用中发送后，内容才会作为邮件发给 hello@baselio.dev。可联系该邮箱咨询已发送申请的处理或删除；本页不承诺删除期限。",
    "privacy.1.title": "语言偏好与网站托管",
    "privacy.1.body": "官网仅在本机存储所选语言；未接入分析或广告脚本。页面由 Cloudflare Pages 托管，访问仍会产生网络请求，托管服务可能处理 IP 等连接信息。不要将静态网站等同于完全匿名访问。",
    "privacy.2.title": "科研内容可能流向哪里",
    "privacy.2.body": "桌面运行不等于完全离线。任务可能调用外部模型或你配置的连接服务；具体内容、接收方与保存方式需按实际版本核查。隐私扫描不是授权替代品，也无法保证识别全部患者信息。",
    "privacy.3.title": "机构评估清单",
    "privacy.3.body": "使用前确认：允许处理的数据类型、外部供应方与地域、模型训练使用条款、访问控制、保存与删除、导出及审计要求。未确认前不要上传患者资料或保密研究数据。机构部署与合规能力需单独协商。",
    "privacy.boundary": "说明范围",
    "privacy.boundaryBody": "这些说明不是正式服务条款、合规认证或医疗建议。产品供应方清单、保存期限与适用政策尚需正式确认；网站上的产品描述不能替代实际版本验证。",
    "beta.copy": "复制草稿",
    "beta.copied": "已复制草稿，尚未发送。",
    "beta.copyFallback": "无法自动复制，已选中草稿，请使用复制操作。",
    "beta.steps": "填写需求 → 核对草稿 → 自行发送邮件",
    "beta.next": "发送后会怎样？",
    "beta.nextBody": "申请由团队通过邮件沟通，可用版本与邀请安排以回复为准。不保证即时开通；请勿重复发送患者资料或附件。",
    "beta.errors": "请完成以下项目，再生成草稿：",
    "beta.errorRole": "请选择你的身份。",
    "beta.errorTask": "请选择最希望了解的任务。",
    "beta.errorConsent": "请确认你理解草稿流程，且未填写敏感信息。",
    "beta.noScript": "启用 JavaScript 后可生成申请草稿；也可通过下方邮箱直接联系。",
    "demo.homeCaption": "英文首页 · 研究主题与三类任务入口",
    "demo.sampleCaption": "英文内置样本 · 仅合成数据，非临床结论",
    "demo.homeAlt": "Baselio 英文桌面首页，包含研究主题、咨询准备、数据分析与摘要论文入口",
    "demo.sampleAlt": "Baselio 英文虚构样本预览，明确标注合成数据，并显示 240 行中 40 行的示例汇总",
    "demo.open": "查看原始截图（新窗口）",
    "demo.captureNote": "全部为真实产品窗口原图，保留完整窗口比例，未做生成式修改。点击图片可查看原图；版本和配置可能不同。官网不执行科研任务。",
    "demo.version": "采集版本：0.1.33-beta.20 · 2026-11-01 · 英文界面为主",
    "demo.overviewCaption": "完整产品工作台 · 英文界面 · 空演示项目，尚未执行任务",
    "demo.overviewAlt": "Baselio 完整英文工作台，展示左侧项目导航、上方科研状态、研究任务入口与中央输入区"
  },
  "en": {
    "hero.line1": "From a clinical question,",
    "hero.line2": "to evidence-led research.",
    "hero.lede": "An AI research workspace for clinicians and medical researchers. Bring literature, protocols, analysis and writing into one project. You verify the evidence, confirm the methods and review the conclusions.",
    "hero.ctaSecondary": "Explore the workflow",
    "hero.status": "Invitation-only beta · Availability depends on your invited version",
    "demo.eyebrow": "Product demonstration",
    "demo.title": "See the actual Baselio interface",
    "demo.body": "Start with the whole workspace, then explore the details. The main capture shows the actual English workbench with project navigation, scientific status, task starters and the input area. Supporting captures show the English home and built-in synthetic sample. The demo project is empty; the sample uses synthetic data only. Neither proves a complete research workflow or a real research conclusion.",
    "scenes.title": "Start with a question after clinic",
    "scenes.note": "Illustrative scenarios · Not executed results",
    "scene.0.title": "Plan a study",
    "scene.0.body": "Frame a clinical question around population, intervention/exposure, comparator and outcomes. Check the search scope and sources before discussing a protocol. Researchers confirm ethics and registration details.",
    "scene.1.title": "Review an analysis",
    "scene.1.body": "Use de-identified data only where your institution permits. Confirm variables and the analysis plan, then inspect the environment, code and actual output. Examples must never stand in for results when execution is unavailable.",
    "scene.2.title": "Develop a manuscript draft",
    "scene.2.body": "Organise a draft around checked references and actual analysis results. Review citations and numbers and keep missing information visible. Authors retain scientific judgement and final submission review.",
    "difference.title": "Beyond a conversation, focus on research continuity",
    "difference.body": "Baselio is designed around a shared project context for questions, sources, methods and outputs, with researcher review along the way. Assess suitability using the actual version and run records. AI text cannot replace evidence, execution or peer review.",
    "audience.title": "Find the right starting point",
    "audience.0.title": "Clinicians / researchers",
    "audience.0.body": "Request individual beta access and describe the task you want to evaluate.",
    "audience.1.title": "Hospitals / institutions",
    "audience.1.body": "Discuss a team pilot, data boundaries and institutional evaluation. Private deployment is not promised.",
    "audience.2.title": "Pharma / CRO",
    "audience.2.body": "Share collaboration needs, research goals and governance constraints. Institutional capabilities require separate confirmation.",
    "audience.link": "Apply / enquire →",
    "privacy.title": "Confirm data boundaries before use",
    "privacy.body": "Local files → task-specific content → possible external model or connected service calls. What is sent and where depends on the version and configuration. Privacy screening cannot identify all sensitive information. Do not submit patient records, unauthorised data or keys. Institutions should review providers, retention, deletion and applicable requirements; this page is not a compliance certification.",
    "pricing.title": "Beta and costs",
    "pricing.body": "Access is by invitation. Availability, model costs, credits and institutional pilot terms must be confirmed with your invitation or enquiry. This page promises no permanent free access, fixed allowance or delivery date.",
    "skip": "Skip to content",
    "a11y.nav": "Main navigation",
    "a11y.language": "Choose language",
    "a11y.pills": "Product principles",
    "a11y.footer": "Footer navigation",
    "beta.title": "Request Baselio beta",
    "beta.intro": "Tell us about your research needs. This form only prepares an email draft on this page; it does not submit or register an application. Review and send it in your email app.",
    "beta.role": "Your role",
    "beta.choose": "Please select",
    "beta.org": "Institution (optional)",
    "beta.task": "Workflow of interest",
    "beta.task0": "Evidence and study planning",
    "beta.task1": "Statistical analysis",
    "beta.task2": "Drafting and citation review",
    "beta.notice": "Privacy: do not include patient information, raw research data or confidential material. This site does not automatically save your entries. Sent email is handled by your email provider and the recipient. Confirm application status and terms by email.",
    "beta.consent": "I understand this prepares a draft only and confirm I have included no sensitive information.",
    "beta.prepare": "Prepare email draft",
    "beta.ready": "Draft prepared, not sent. Open your email app to send it, or copy the text below and email hello@baselio.dev.",
    "beta.open": "Open email app",
    "beta.draft": "Email draft",
    "beta.fallback": "You can also email hello@baselio.dev directly",
    "beta.back": "Back to home",
    "beta.changed": "Your entries changed. Prepare a new draft.",
    "beta.subject": "Baselio beta request / enquiry",
    "path.label": "Illustrative research path · Not a live run",
    "path.title": "Make the next step traceable",
    "path.0": "A focused clinical question",
    "path.1": "Sources you can revisit",
    "path.2": "Reviewed methods and analysis",
    "path.3": "A draft for author review",
    "path.review": "Researcher judgement at every stage",
    "privacy.link": "Read data and privacy notes →",
    "privacy.pageTitle": "Data and privacy: understand before use",
    "privacy.intro": "The website enquiry and the research product have different data boundaries. Review the actual configuration and institutional requirements before use.",
    "privacy.0.title": "What happens to website entries",
    "privacy.0.body": "The enquiry page prepares a draft in your browser without an application database or automatic submission. Only after you send it in your email app is it emailed to hello@baselio.dev. Contact that address about handling or deleting a sent request; no deletion timeframe is promised here.",
    "privacy.1.title": "Language preference and hosting",
    "privacy.1.body": "The site stores the selected language locally and includes no analytics or advertising scripts. It is hosted on Cloudflare Pages; visits still make network requests, and the hosting service may process connection information such as IP addresses. A static website does not mean fully anonymous access.",
    "privacy.2.title": "Where research content may go",
    "privacy.2.body": "Running on a desktop does not mean fully offline. Tasks may call external models or services you configure. Check the actual version for payloads, recipients and retention. Privacy screening does not replace authorisation or guarantee detection of all patient information.",
    "privacy.3.title": "Institutional review checklist",
    "privacy.3.body": "Before use, review permitted data, external providers and regions, model training terms, access controls, retention and deletion, export and audit requirements. Do not upload patient records or confidential research data before approval. Institutional deployment and compliance capabilities require separate discussion.",
    "privacy.boundary": "Scope of these notes",
    "privacy.boundaryBody": "These notes are not formal service terms, a compliance certification or medical advice. Product provider lists, retention periods and applicable policies still require formal confirmation. Website descriptions cannot replace verification of the actual version.",
    "beta.copy": "Copy draft",
    "beta.copied": "Draft copied, not sent.",
    "beta.copyFallback": "Automatic copy is unavailable. The draft is selected; use your device’s copy command.",
    "beta.steps": "Describe your needs → Review the draft → Send the email yourself",
    "beta.next": "What happens after sending?",
    "beta.nextBody": "The team communicates by email. Availability and invitations are subject to their reply; immediate access is not guaranteed. Do not send patient information or attachments.",
    "beta.errors": "Complete the following before preparing your draft:",
    "beta.errorRole": "Select your role.",
    "beta.errorTask": "Select a workflow of interest.",
    "beta.errorConsent": "Confirm that you understand the draft process and have included no sensitive information.",
    "beta.noScript": "Enable JavaScript to prepare an enquiry draft, or contact the email address below directly.",
    "demo.homeCaption": "English home · Research question and three task entry points",
    "demo.sampleCaption": "English built-in sample · Synthetic data only, no clinical conclusions",
    "demo.homeAlt": "Baselio English desktop home, showing a research question and entries for consultation preparation, data analysis and drafting",
    "demo.sampleAlt": "Baselio English synthetic sample preview, labelled as fictional data, showing an example summary of 40 out of 240 rows",
    "demo.open": "View original capture (new tab)",
    "demo.captureNote": "All images are actual product window captures, preserving the full window proportions without generative alterations. Open an image to inspect the original. Versions and configurations may differ. This website does not execute research tasks.",
    "demo.version": "Captured version: 0.1.33-beta.20 · 2026-11-01 · English-first interface",
    "demo.overviewCaption": "Complete product workbench · English interface · Empty demo project, no task executed",
    "demo.overviewAlt": "Full Baselio English workbench showing project navigation, scientific status, research task starters and the main input area"
  },
  "ja": {
    "hero.line1": "臨床の問いから、",
    "hero.line2": "根拠のある研究へ。",
    "hero.lede": "医師・医学研究者のための AI 研究ワークスペース。文献、研究計画、解析、執筆を一つのプロジェクトに整理し、根拠の確認、手法の選択、結論の検討は研究者が担います。",
    "hero.ctaSecondary": "研究の流れを見る",
    "hero.status": "招待制ベータ · 利用できる機能は提供バージョンにより異なります",
    "demo.eyebrow": "製品デモ",
    "demo.title": "実際の Baselio の画面を見る",
    "demo.body": "まず全体、次に詳細をご覧ください。メイン画像は、プロジェクトナビゲーション、研究ステータス、タスク入口、入力欄を含む実際の英語ワークスペースです。補助画像は英語ホーム画面と内蔵の架空サンプルです。デモプロジェクトは空で、サンプルは合成データのみです。研究工程全体や実際の研究結果を証明するものではありません。",
    "scenes.title": "診療後に浮かんだ問いから",
    "scenes.note": "利用場面の説明 · 実行結果ではありません",
    "scene.0.title": "研究計画を準備する",
    "scene.0.body": "臨床の疑問を対象集団、介入・曝露、比較、アウトカムに整理。検索範囲と出典を確認してから研究計画を検討し、倫理審査・登録事項は研究者が確認します。",
    "scene.1.title": "統計解析を確認する",
    "scene.1.body": "所属機関が認めた範囲で匿名化等を施したデータを使用。変数と解析計画を確認し、実行環境、コード、実際の出力を検討します。実行できない場合、例示を結果として扱いません。",
    "scene.2.title": "論文草稿を進める",
    "scene.2.body": "確認済み文献と実際の解析結果から草稿を構成。引用・数値を照合し、不足情報を明示します。科学的判断と投稿前の最終確認は著者が担います。",
    "difference.title": "対話の先に、研究のつながりを",
    "difference.body": "問い・出典・手法・成果を同じプロジェクトの文脈で扱い、研究者の確認を挟むことを重視しています。適合性は実際のバージョンと記録でご判断ください。AI の文章は根拠・実行・査読の代わりにはなりません。",
    "audience.title": "研究の進め方に合った窓口を",
    "audience.0.title": "医師・医学研究者",
    "audience.0.body": "個人ベータを申し込み、研究段階と確認したい作業をお知らせください。",
    "audience.1.title": "病院・研究機関",
    "audience.1.body": "チームでの試行、データの取扱い、院内評価について相談。専用環境の提供を約束するものではありません。",
    "audience.2.title": "製薬企業・CRO",
    "audience.2.body": "研究目標と規程上の制約を添えてご相談ください。組織向け機能の提供可否は個別に確認します。",
    "audience.link": "申し込み・相談 →",
    "privacy.title": "利用前にデータの取扱いを確認",
    "privacy.body": "端末内ファイル → タスクに必要な内容 → 外部モデル・連携サービスを利用する可能性があります。送信内容・宛先はバージョンと設定に依存し、スキャンで全ての機微情報を検出できるとは限りません。患者情報、未承認データ、鍵情報は送信しないでください。提供元、保存期間、削除方法、適用要件を所属機関で確認してください。本ページは適合認証ではありません。",
    "pricing.title": "ベータと費用",
    "pricing.body": "招待制です。利用範囲、モデル利用料、クレジット、組織向け試行の条件は招待・相談時に確認してください。永久無料、固定枠、提供時期はお約束していません。",
    "skip": "本文へ移動",
    "a11y.nav": "メインナビゲーション",
    "a11y.language": "言語を選択",
    "a11y.pills": "製品の基本方針",
    "a11y.footer": "フッターナビゲーション",
    "beta.title": "Baselio ベータ版のお申し込み",
    "beta.intro": "研究で取り組みたいことをお知らせください。このフォームはページ内でメール下書きを作成するだけで、申し込みの送信・登録は行いません。メールアプリで確認して送信してください。",
    "beta.role": "ご所属・立場",
    "beta.choose": "選択してください",
    "beta.org": "所属機関名（任意）",
    "beta.task": "確認したい作業",
    "beta.task0": "文献検索・研究計画",
    "beta.task1": "統計解析・データ処理",
    "beta.task2": "論文草稿・引用確認",
    "beta.notice": "患者情報、研究の生データ、機密情報は入力しないでください。本サイトは入力内容を自動保存しません。メール送信後はメールサービスと受信者の手順で取り扱われます。受付状況・条件はメールで確認してください。",
    "beta.consent": "下書きの作成のみであることを理解し、機微情報を含めていないことを確認しました。",
    "beta.prepare": "メール下書きを作成",
    "beta.ready": "下書きを作成しました。まだ送信していません。メールアプリで送信するか、下の内容をコピーして hello@baselio.dev へお送りください。",
    "beta.open": "メールアプリを開く",
    "beta.draft": "メール下書き",
    "beta.fallback": "hello@baselio.dev への直接のお問い合わせも可能です",
    "beta.back": "ホームへ戻る",
    "beta.changed": "入力内容が変わりました。下書きを作り直してください。",
    "beta.subject": "Baselio ベータ申し込み・相談",
    "path.label": "研究の流れの例 · 実行画面ではありません",
    "path.title": "次の一歩に、たどれる根拠を",
    "path.0": "明確な臨床の問い",
    "path.1": "確認できる文献の出典",
    "path.2": "確認を経た手法と解析",
    "path.3": "著者が確認する草稿",
    "path.review": "各段階の判断は研究者が担います",
    "privacy.link": "データ・プライバシーの説明 →",
    "privacy.pageTitle": "データとプライバシー：確認してから利用する",
    "privacy.intro": "Web サイトでのお申し込みと研究用製品では、データの取扱いが異なります。利用前に実際の設定と所属機関の規則をご確認ください。",
    "privacy.0.title": "フォームの入力内容について",
    "privacy.0.body": "申し込みページはブラウザ内で下書きを作成し、申込データベースへの保存・自動送信は行いません。メールアプリで送信した内容が hello@baselio.dev に届きます。送信済み内容の取扱い・削除は同アドレスにご相談ください。削除期限は本ページではお約束していません。",
    "privacy.1.title": "言語設定とホスティング",
    "privacy.1.body": "本サイトは選択した言語を端末に保存し、アクセス解析・広告スクリプトは組み込んでいません。Cloudflare Pages で配信され、アクセス時に通信が発生します。ホスティングサービスが IP アドレス等の接続情報を扱う可能性があり、完全な匿名アクセスを意味しません。",
    "privacy.2.title": "研究内容の送信先について",
    "privacy.2.body": "デスクトップでの実行は完全オフラインを意味しません。外部モデルや設定した連携サービスを利用する場合があります。送信内容、受信先、保存方法は実際のバージョンで確認してください。スキャンは利用許可の代わりにはならず、患者情報を必ず検出できるとは限りません。",
    "privacy.3.title": "所属機関での確認事項",
    "privacy.3.body": "利用前に、取扱可能なデータ、外部提供元と処理地域、モデル学習への利用条件、アクセス制御、保存・削除、出力・監査要件を確認してください。承認前に患者情報や機密研究データを入力しないでください。組織向けの提供形態や適合性は個別に相談が必要です。",
    "privacy.boundary": "説明の範囲",
    "privacy.boundaryBody": "この説明は正式な利用規約、適合認証、医療上の助言ではありません。製品の提供元一覧、保存期間、適用方針は正式な確認が必要です。Web サイト上の説明は実際のバージョンの検証に代わりません。",
    "beta.copy": "下書きをコピー",
    "beta.copied": "下書きをコピーしました。まだ送信していません。",
    "beta.copyFallback": "自動コピーができません。下書きを選択したので、端末のコピー操作をお使いください。",
    "beta.steps": "希望を入力 → 下書きを確認 → ご自身でメール送信",
    "beta.next": "送信後について",
    "beta.nextBody": "担当チームがメールでご案内します。提供バージョンと招待については返信で確認してください。即時利用を保証するものではありません。患者情報や添付資料は送らないでください。",
    "beta.errors": "次の項目を確認してから下書きを作成してください：",
    "beta.errorRole": "ご所属・立場を選択してください。",
    "beta.errorTask": "確認したい作業を選択してください。",
    "beta.errorConsent": "下書き作成の流れと、機微情報を含めていないことを確認してください。",
    "beta.noScript": "JavaScript を有効にすると下書きを作成できます。下のメールアドレスへ直接お問い合わせいただくことも可能です。",
    "demo.homeCaption": "英語ホーム画面 · 研究テーマと 3 つのタスク入口",
    "demo.sampleCaption": "英語の内蔵サンプル · 合成データのみ、臨床上の結論ではありません",
    "demo.homeAlt": "英語版 Baselio のホーム画面。研究テーマ、指導医相談の準備、データ解析、論文草稿の入口を表示",
    "demo.sampleAlt": "英語版 Baselio の架空サンプル。合成データと明記され、240 行中 40 行の集計例を表示",
    "demo.open": "元のスクリーンショットを表示（新しいタブ）",
    "demo.captureNote": "全て実際の製品ウィンドウを撮影し、全体の縦横比を保持しています。生成 AI による加工はしていません。画像を開くと原図を確認できます。バージョン・設定により異なる場合があります。このサイトでは研究タスクを実行しません。",
    "demo.version": "撮影バージョン：0.1.33-beta.20 · 2026-11-01 · 主に英語の画面",
    "demo.overviewCaption": "製品ワークスペース全体 · 英語画面 · 空のデモプロジェクト、タスク未実行",
    "demo.overviewAlt": "Baselio の英語ワークスペース全体。プロジェクトナビゲーション、研究ステータス、タスク入口、入力欄を表示"
  }
}
for (const language of Object.keys(additions)) Object.assign(dictionaries[language], additions[language])

const storageKey = 'baselio-language'
const select = document.getElementById('language')
let currentLanguage = 'zh'
const form = document.getElementById('beta-form')
const isTrustPage = document.body?.dataset.page === 'trust'
const betaErrors = ({ role, task, consent }) => [
  ...(['0', '1', '2'].includes(role) ? [] : ['role']),
  ...(['0', '1', '2'].includes(task) ? [] : ['task']),
  ...(consent ? [] : ['consent'])
]
const renderErrors = (errors, focus = false) => {
  if (!form) return
  const dictionary = dictionaries[currentLanguage]
  const keys = { role: 'beta.errorRole', task: 'beta.errorTask', consent: 'beta.errorConsent' }
  for (const id of Object.keys(keys)) {
    const field = document.getElementById(id)
    const message = document.getElementById(id + '-error')
    message.textContent = dictionary[keys[id]]
    message.hidden = !errors.includes(id)
    if (errors.includes(id)) field.setAttribute('aria-invalid', 'true')
    else field.removeAttribute('aria-invalid')
  }
  const summary = document.getElementById('form-errors')
  summary.hidden = errors.length === 0
  summary.textContent = errors.length ? dictionary['beta.errors'] + ' ' + errors.map(id => dictionary[keys[id]]).join(' ') : ''
  if (focus && errors.length) summary.focus()
}
const clearDraft = () => {
  const panel = document.getElementById('draft-panel')
  if (!panel || panel.hidden) return
  panel.hidden = true
  document.getElementById('draft').value = ''
  document.getElementById('open-mail').removeAttribute('href')
  document.getElementById('draft-status').textContent = dictionaries[currentLanguage]['beta.changed']
}
const applyLanguage = (language) => {
  currentLanguage = Object.hasOwn(dictionaries, language) ? language : 'zh'
  const dictionary = dictionaries[currentLanguage]
  document.documentElement.lang = currentLanguage
  document.title = 'Baselio — ' + dictionary[isTrustPage ? 'privacy.pageTitle' : form ? 'beta.title' : 'hero.line1'] + (form || isTrustPage ? '' : (currentLanguage === 'en' ? ' ' : '') + dictionary['hero.line2'])
  for (const node of document.querySelectorAll('[data-i18n]')) {
    const value = dictionary[node.dataset.i18n]
    if (typeof value === 'string') node.textContent = value
  }
  for (const node of document.querySelectorAll('[data-i18n-aria]')) {
    node.setAttribute('aria-label', dictionary[node.dataset.i18nAria])
  }
  for (const node of document.querySelectorAll('[data-i18n-alt]')) {
    node.setAttribute('alt', dictionary[node.dataset.i18nAlt])
  }
  document.querySelector('meta[name="description"]').content = dictionary[isTrustPage ? 'privacy.intro' : form ? 'beta.intro' : 'hero.lede']
  const url = new URL(location.href)
  url.searchParams.set('lang', currentLanguage)
  history.replaceState(null, '', url)
  for (const link of document.querySelectorAll('a[href]')) {
    const href = link.getAttribute('href')
    if (!/^(index|beta|trust)\.html(?:[?#]|$)/.test(href)) continue
    const target = new URL(href, location.href)
    target.searchParams.set('lang', currentLanguage)
    link.setAttribute('href', target.pathname.split('/').pop() + target.search + target.hash)
  }
  if (select) select.value = currentLanguage
  clearDraft()
  if (form && !document.getElementById('form-errors').hidden) {
    renderErrors(betaErrors({ role: form.elements.role.value, task: form.elements.task.value, consent: form.elements.consent.checked }))
  }
}
const requested = new URLSearchParams(location.search).get('lang')
let saved
try { saved = localStorage.getItem(storageKey) } catch {}
applyLanguage(Object.hasOwn(dictionaries, requested) ? requested : Object.hasOwn(dictionaries, saved) ? saved : 'zh')
select?.addEventListener('change', (event) => {
  applyLanguage(event.target.value)
  try { localStorage.setItem(storageKey, currentLanguage) } catch {}
})
if (form) {
  form.hidden = false
  form.noValidate = true
  const role = new URLSearchParams(location.search).get('role')
  if (['0', '1', '2'].includes(role)) form.elements.role.value = role
  form.addEventListener('input', clearDraft)
  form.addEventListener('change', clearDraft)
  const refreshVisibleErrors = () => {
    if (!document.getElementById('form-errors').hidden) {
      renderErrors(betaErrors({ role: form.elements.role.value, task: form.elements.task.value, consent: form.elements.consent.checked }))
    }
  }
  form.addEventListener('input', refreshVisibleErrors)
  form.addEventListener('change', refreshVisibleErrors)
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const errors = betaErrors({ role: form.elements.role.value, task: form.elements.task.value, consent: form.elements.consent.checked })
    renderErrors(errors, true)
    if (errors.length) return
    const d = dictionaries[currentLanguage]
    const body = [d['beta.subject'], '', d['beta.role'] + ': ' + form.elements.role.selectedOptions[0].textContent,
      d['beta.org'] + ': ' + form.elements.institution.value.trim(),
      d['beta.task'] + ': ' + form.elements.task.selectedOptions[0].textContent,
      'Language: ' + currentLanguage, 'Source: baselio-site / beta'].join('\n')
    document.getElementById('draft').value = body
    document.getElementById('open-mail').href = 'mailto:hello@baselio.dev?subject=' + encodeURIComponent(d['beta.subject']) + '&body=' + encodeURIComponent(body)
    document.getElementById('draft-panel').hidden = false
    document.getElementById('draft-panel').focus()
    document.getElementById('draft-status').textContent = d['beta.ready']
  })
}

document.getElementById('copy-draft')?.addEventListener('click', async () => {
  const draft = document.getElementById('draft')
  const original = draft.value
  try {
    await navigator.clipboard.writeText(original)
    if (draft.value !== original || document.getElementById('draft-panel').hidden) return
    document.getElementById('draft-status').textContent = dictionaries[currentLanguage]['beta.copied']
  } catch {
    if (draft.value !== original || document.getElementById('draft-panel').hidden) return
    draft.focus()
    draft.select()
    document.getElementById('draft-status').textContent = dictionaries[currentLanguage]['beta.copyFallback']
  }
})
