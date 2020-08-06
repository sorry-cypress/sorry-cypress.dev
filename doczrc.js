export default {
  src: './src/',
  dest: './dist',
  port: 8888,
  menu: [
    'Introduction',
    'Demo & Examples',
    'Terminology',
    {
      name: 'Installation',
      menu: ['AWS'],
    },
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
