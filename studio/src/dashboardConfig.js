export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e96da9f3f03d3f460541fdf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vez7s2yr',
                  apiId: '426b595f-546d-427a-a622-0226fe93aa64'
                },
                {
                  buildHookId: '5e96da9f452ac9c7f5c76915',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cwktcz5a',
                  apiId: '9bc81482-b69f-47d5-af4a-c227d0a0bcc7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jennyg3011/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cwktcz5a.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
