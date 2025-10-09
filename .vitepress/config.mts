import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Benoit's Notes",
  description: "my notes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
      
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/duranbe' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/beno%C3%AEt-durand/'}
    ]
  }
})
