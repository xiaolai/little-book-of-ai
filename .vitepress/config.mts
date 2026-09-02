import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";
import footnote from "markdown-it-footnote";
import sup from "markdown-it-sup";
import sub from "markdown-it-sub";
import mark from "markdown-it-mark";
import ins from "markdown-it-ins";

export default withMermaid(
  {
    title: "人工智能小白书",
    description: "A VitePress Site",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/cn/' },
      ],

      sidebar: {
        '/cn/': [
          { text: '00. 前言', link: '/cn/00' },
          { text: '01. 一个 AMA 机器人', link: '/cn/01' },
          { text: '02. 安全永远第一', link: '/cn/02' },
          { text: '03. 智能的核心：判断', link: '/cn/03' },
          { text: '04. 进化的核心：递归', link: '/cn/04' },
          { text: '05. 方法的核心：流程', link: '/cn/05' },
          { text: '06. 人工智能的特长', link: '/cn/06' },
          { text: '07. 人工智能排斥懒人', link: '/cn/07' },
          { text: '08. 学习路径的颠覆', link: '/cn/08' },
          { text: '09. 人人都可以生产', link: '/cn/09' },
          { text: '10. 人人都能用英语', link: '/cn/10' },
          { text: '11. 必须用好计算机', link: '/cn/11' },
          { text: '12. 最大限制是自己', link: '/cn/12' },
          { text: '13. ChatGPT 之外', link: '/cn/13' },
          { text: '14. 关于插图', link: '/cn/14' },
          { text: '15. 后记', link: '/cn/15' },
          { text: 'English Version', link: '/en/00' },          
        ],
        '/en/': [
          { text: '00. Forward', link: '/en/00' },
          { text: '01. An AMA Bot', link: '/en/01' },
          { text: '02. Safety First', link: '/en/02' },
          { text: '03. The Core of Intelligence', link: '/en/03' },
          { text: '04. The Core of Evolution', link: '/en/04' },
          { text: '05. The Core of Method', link: '/en/05' },
          { text: '06. The Strengths of AI', link: '/en/06' },
          { text: '07. Laziness not Tolerated', link: '/en/07' },
          { text: '08. Learning Path Disrupted', link: '/en/08' },
          { text: '09. Be a Producer', link: '/en/09' },
          { text: '10. Using English', link: '/en/10' },
          { text: '11. Mastering the Computer', link: '/en/11' },
          { text: '12. The Biggest Limit', link: '/en/12' },
          { text: '13. Besides ChatGPT', link: '/en/13' },
          { text: '14. About Illustrations', link: '/en/14' },
          { text: '15. Afterword', link: '/en/15' },
          { text: '中文版', link: '/cn/00' },          
        ],
    },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/xiaolai/little-book-of-ai' }
      ]
    },
    lastUpdated: true,

    markdown: {
      // https://vitepress.dev/reference/markdown
      math: true,
      config: (md) => {
        // use more markdown-it plugins!
        md.use(footnote);
        md.use(sub);
        md.use(sup);
        md.use(mark);
        md.use(ins);
      },
      toc: {
        level: [1, 2, 3]
      }
    },
    srcExclude: ['**/README.md', '**/TODO.md', '_ignored']
  })

