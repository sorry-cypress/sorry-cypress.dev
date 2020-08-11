export default {
  src: './src/',
  dest: './dist',
  port: 8888,
  repository: 'https://github.com/agoldis/sorry-cypress',
  menu: [
    'Introduction',
    'Quickstart',
    'Terminology',
    {
      name: 'Director',
      menu: [
        'Configuration',
        {
          name: 'Execution drivers',
          menu: ['In-memory', 'Persisting MongoDB'],
        },
        {
          name: 'Storage drivers',
          menu: ['Dummy', 'AWS S3', 'Minio'],
        },
      ],
    },
    'API',
    'Dashboard',
    'Installation',
    'CI Guides',
    'Cypress agent',
    'Development',
  ],

  themeConfig: {
    colors: {
      header: {
        bg: 'white',
      },
    },
    mode: 'light',
  },
};
