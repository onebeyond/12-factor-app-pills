---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
{
    avatar: 'https://github.com/inigomarquinez.png',
    name: 'Íñigo Marquínez',
    title: 'Maintainer',
    organization: 'One Beyond',
    orgLink: 'https://github.com/onebeyond',
    links: [
      { icon: 'github', link: 'https://github.com/inigomarquinez' },
    ]
  },
  {
    avatar: 'https://www.github.com/neodmy.png',
    name: 'David Yusta',
    title: 'Maintainer',
    organization: 'One Beyond',
    orgLink: 'https://github.com/onebeyond',
    links: [
      { icon: 'github', link: 'https://github.com/neodmy' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      Meet the maintainers
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small"
    :members="members"
  />
</VPTeamPage>
