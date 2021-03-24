export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '605b9ff8b0bb7f118c776216',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gtiucac6',
                  apiId: '328b9437-5db0-4b65-886d-06899059013c'
                },
                {
                  buildHookId: '605b9ff86fb60b00c446f43e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fja5n84b',
                  apiId: '6bc0f970-b62d-437d-99a1-0e4a10716d75'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PauloMoekotte/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fja5n84b.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
