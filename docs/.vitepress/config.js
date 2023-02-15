module.exports = {
  title: 'The Twelve-Factor App Pills',
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
      { text: 'Team', link: '/team'},
    ],
    sidebar: {
      collapsed: true,
      '/pills/': [
        {
          text: 'Pills',
          items: [
            { text: 'Index', link: '/pills/'},
            { text: 'Codebase', link: '/pills/01-codebase'},
            { text: 'Dependencies', link: '/pills/02-dependencies'},
            { text: 'Config', link: '/pills/03-config'},
            { text: 'Backing Services', link: '/pills/04-backing-services'},
            { text: 'Build, Release, Run', link: '/pills/05-build-release-run'},
            { text: 'Processes', link: '/pills/06-processes'},
            { text: 'Port Binding', link: '/pills/07-port-binding'},
            { text: 'Concurrency', link: '/pills/08-concurrency'},
            { text: 'Disposability', link: '/pills/09-disposability'},
            { text: 'Dev and Prod Parity', link: '/pills/10-dev-prod-parity'},
            { text: 'Logs', link: '/pills/11-logs'},
            { text: 'Admin Processes', link: '/pills/12-admin-processes'},
          ]
        }
      ],
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present One Beyond.'
    }
  },
  markdown: {
    lineNumbers: true
  }
}
