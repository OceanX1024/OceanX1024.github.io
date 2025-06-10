import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  

  title: "OceanX",
  description: "OceanX",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]



    footer: {
      copyright: `Copyright © 2024 OceanX. All rights reserved.`
    },

  },
  locales: {
    root: { 
      label: '繁體中文',
      lang: 'zh',
      themeConfig: {
        nav: [
          { text: '首頁', link: '/zh' },
          { text: 'LO-BOX™', 
            items: [
              { text: '常規版', link: '/zh/lobox-basic' },
              // { text: '冷藏版', link: '/item-2' }
            ]
          },
          { text: '採購', link: '/zh/procure' }
        ],
        outline: {
          label: '頁面導航'
        }
      },
    },
    en: { 
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        
        nav: [
          { text: 'HOME', link: '/en/' },
          { text: 'LO-BOX™', 
            items: [
              { text: 'Basic', link: '/en/lobox-basic' },
              // { text: 'Cold', link: '/en/lobox-cold' }
            ]
          },
          { text: 'PROCURE', link: '/en/procure' }
        ]
      }
    },
    kr: { 
      label: '한국어',
      lang: 'ko',
      themeConfig: {
        nav: [
          { text: '홈', link: '/kr/' },
          { text: 'LO-BOX™', 
            items: [
              { text: '기본형', link: '/kr/lobox-basic' },
              // { text: '냉장형', link: '/kr/lobox-cold' }
            ]
          },
          { text: '구매', link: '/kr/procure' }
        ]
      }
    },
    de: { 
      label: 'Deutsch',
      lang: 'de',
      themeConfig: {
        nav: [
          { text: 'Startseite', link: '/de/' },
          { text: 'LO-BOX™', 
            items: [
              { text: 'Standard', link: '/de/lobox-basic' },
              // { text: 'Kühlversion', link: '/de/lobox-cold' }
            ]
          },
          { text: 'Kontakt', link: '/de/procure' }
        ]
      }
    },
    jp: { 
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/jp/' },
          { text: 'LO-BOX™', 
            items: [
              { text: '基本型', link: '/jp/lobox-basic' },
              // { text: '冷蔵型', link: '/jp/lobox-cold' }
            ]
          },
          { text: 'お問い合わせ', link: '/jp/procure' }
        ]
      }
    }
    
  }
})
