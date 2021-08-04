export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '610ac87ff1488500c4e6c984',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uhz6t5ir',
                  apiId: '0d744383-780b-4559-a025-6f0a4fb0ed54'
                },
                {
                  buildHookId: '610ac87f4aa7650093c86ca3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8ning6ra',
                  apiId: '3a1176ac-8cf6-4877-9e28-446fbe0b58c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jordles113/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8ning6ra.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
