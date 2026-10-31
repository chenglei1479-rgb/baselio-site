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

const storageKey = 'baselio-language'
const select = document.getElementById('language')

const titles = {
  zh: 'Baselio — 让研究，步步有据。',
  en: 'Baselio — Research, grounded in evidence.',
  ja: 'Baselio — 研究の一歩に、確かな根拠を。'
}

const applyLanguage = (language) => {
  const dictionary = dictionaries[language] ?? dictionaries.zh
  document.documentElement.lang = language
  document.title = titles[language] ?? titles.zh
  for (const node of document.querySelectorAll('[data-i18n]')) {
    const key = node.getAttribute('data-i18n')
    const value = dictionary[key]
    if (typeof value === 'string') node.textContent = value
  }
  if (select) select.value = language
}

const requested = new URLSearchParams(location.search).get('lang')
let saved
try {
  saved = localStorage.getItem(storageKey)
} catch {}

applyLanguage(dictionaries[requested] ? requested : dictionaries[saved] ? saved : 'zh')

select?.addEventListener('change', (event) => {
  const language = event.target.value
  try {
    localStorage.setItem(storageKey, language)
  } catch {}
  applyLanguage(language)
})
