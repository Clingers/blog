// 统一路径工具：基于 Astro 的 BASE_URL 生成链接
// 部署到 GitHub Pages 子路径 /blog 时，BASE_URL 为 '/blog'
// 规范化：确保 BASE 以 / 结尾，拼接时不会粘连
const rawBase: string = import.meta.env.BASE_URL;
export const BASE = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export const links = {
  home: BASE,
  about: `${BASE}about/`,
  archive: `${BASE}archive/`,
  article: (slug: string) => `${BASE}articles/${slug}/`,
  category: (slug: string) => `${BASE}category/${slug}/`,
};
