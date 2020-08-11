export default {
  src: './src/',
  dest: './dist',
  port: 8888,
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
    mode: 'light',
    codemirrorTheme: 'dracula',
    styles: {
      body: {
        fontFamily: "'Source Sans Pro', Helvetica, sans-serif",
        fontSize: 16,
        lineHeight: 1.6,
      },
      container: {
        width: '100%',
        padding: ['20px 40px'],
      },
    },
  },
};
