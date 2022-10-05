module.exports = {
  title: '12-factor App Pills',
  description: 'Pills based on the 12-factor app methodology for building software-as-a-service apps.',
  lang: 'en-US',
  base: '/12-factor-app-pills/',
  themeConfig: {
    repo: 'guidesmiths/12-factor-app-pills',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/', activeMatch: '^/$|^/12-factor-app-pills/' },
      { text: 'Pills', link: '/pills/', activeMatch: '^/pills/' },
    ]
  },
  markdown: {
    lineNumbers: true
  }
}
