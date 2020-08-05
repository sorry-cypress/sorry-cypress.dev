import pkg from './package.json';

const libName = pkg.name;

export default {
  src: './src/',
  dest: './dist',
  title: libName,
  port: 8888,
  hashRouter: true,
  base: `/${libName}`,
  menu: [
    'Getting Started',
    'Demo & Examples',
    'Terminology',
    {
      name: 'Installation',
      menu: ['AWS'],
    },
    // {
    //   name: 'Examples',
    //   menu: ['event', 'ref', 'on & off', 'multiple events', 'preventDefault'],
    // },
  ],
  description: pkg.description,
  // modifyBundlerConfig: (config) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     [libName]: path.join(__dirname, `/src/index.js`),
  //   };
  //   return config;
  // },
  htmlContext: {
    head: {
      scripts: [
        {
          async: 'async',
          src: 'https://www.googletagmanager.com/gtag/js?id=UA-127716054-1',
        },
      ],
      raw: `<script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-127716054-1');
            </script>`,
      links: [
        {
          rel: 'stylesheet',
          href: '//codemirror.net/theme/dracula.css',
        },
      ],
    },
  },
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
