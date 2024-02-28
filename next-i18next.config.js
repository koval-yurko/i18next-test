function createLocalePath({
  localesPath = `./public/locales`,
  nodeModulesPath = './node_modules'
}) {
  return function localePath(locale, namespace) {
    const [prefix, packageName, component] = namespace.split('/');

    if (prefix === '@resourcify') {
      return `${nodeModulesPath}/@resourcify/${packageName}/public/locales/${locale}/${component}.json`;
    } else {
      return `${localesPath}/${locale}/${namespace}.json`;
    }
  };
}


module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localePath: createLocalePath({ localesPath: './public/locales', nodeModulesPath: '../../node_modules' }),
    ns: ['@resourcify/ui/common', 'common', 'main'],
  },
}
