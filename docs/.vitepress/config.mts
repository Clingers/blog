import { defineConfig } from "vitepress";
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PKM文档库",
  description: "这是一个个人维护的高中化学文档库",
  base: "/blog/",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "入门",
        items: [
          { text: "必修一", link: "/chemistry/newbird1" },
          { text: "必修二", link: "/chemistry/newbird2" },
        ],
      },
    ],

    sidebar: { "/front-end/react": set_sidebar("front-end/react") },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright@2024 Wilfred Yang",
    },

    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
  },
});
