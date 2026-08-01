export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

export interface Category {
  name: string;
  slug: string;
}

export const categories: Category[] = [
  { name: "AI & 工具", slug: "ai-tools" },
  { name: "写作策略", slug: "writing" },
  { name: "营销策略", slug: "marketing" },
  { name: "个人成长", slug: "growth" },
];

export const articles: Article[] = [
  {
    slug: "how-to-start-a-one-person-business-2026",
    title: "如何在 2026 年开展一人公司业务（规则变了）",
    excerpt: "AI 改变了游戏规则。不再需要庞大的团队和资金，你完全可以靠一个人加 AI 工具建立一个盈利的业务。",
    category: "个人成长",
    author: "Wilfred",
    readTime: "8 分钟",
    date: "2026-07-28",
    featured: true,
  },
  {
    slug: "ai-agent-capabilities-2026",
    title: "AI Agent 能做什么？2026 年能力全景报告",
    excerpt: "从 4 分钟到 14.5 小时，AI Agent 的自主工作能力在 18 个月内翻了 200 倍。",
    category: "AI & 工具",
    author: "Wilfred",
    readTime: "12 分钟",
    date: "2026-07-25",
    featured: true,
  },
  {
    slug: "the-writing-habit-that-saved-my-brain",
    title: "那个拯救了我大脑的写作习惯（以及我的未来）",
    excerpt: "每天写 500 字，改变了我的思维方式。",
    category: "写作策略",
    author: "Wilfred",
    readTime: "6 分钟",
    date: "2026-07-20",
  },
  {
    slug: "github-trending-top10-2026",
    title: "GitHub Trending Top 10 — 2026 年 8 月",
    excerpt: "Skills 爆发、AI 安全审计工具崛起、MCP 生态爆发——本月 GitHub 热点分析。",
    category: "AI & 工具",
    author: "Wilfred",
    readTime: "10 分钟",
    date: "2026-07-18",
  },
  {
    slug: "knowledge-management-obsidian-zotero",
    title: "用 Obsidian + Zotero 建立你的第二大脑",
    excerpt: "把阅读、研究和写作串联起来，形成完整的知识工作流。",
    category: "写作策略",
    author: "Wilfred",
    readTime: "9 分钟",
    date: "2026-07-15",
  },
  {
    slug: "build-personal-brand-researcher",
    title: "研究者如何建立个人品牌",
    excerpt: "不需要成为网红。作为研究者，你有自己的方式来建立影响力。",
    category: "营销策略",
    author: "Wilfred",
    readTime: "7 分钟",
    date: "2026-07-10",
  },
];
