import ComponentsLoader from './loaders/components.js';

export default [
  {
    key: 'components',
    label: 'Register components',
    prefix: 'vp',
    components: [
      '../components/home.js',
      '../components/cursor.js',
    ],
    customLoader: ComponentsLoader,
  },
  {
    key: 'test',
    label: 'Retrieve from test api',
    url: 'http://api.victorpotasso.com/test',
    loader: 'json',
  },
]