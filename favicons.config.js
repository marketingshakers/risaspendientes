const color = '#23ABE2'

const iconsProps = {
  background: color,
  mask: true,
  offset: 15,
}

module.exports = {
  appName: 'Risas Pendientes',
  appShortName: 'Risas Pendientes',
  appDescription: 'Risas Pendientes Web App',

  developerName: '',
  developerURL: '',

  path: '/favicons/',

  background: color,
  theme_color: color,
  appleStatusBarStyle: 'default',

  scope: '/',
  start_url: '/',

  display: 'standalone',
  orientation: 'portrait',

  logging: false,
  html: 'icons.html',
  pipeHTML: true,
  replace: true,

  icons: {
    android: {
      ...iconsProps,
    },
    appleIcon: {
      ...iconsProps,
    },
    appleStartup: {
      ...iconsProps,
    },
    favicons: {
      ...iconsProps,
    },
    firefox: {
      ...iconsProps,
      overlayGlow: false
    },
    windows: {
      ...iconsProps,
    },
  }
}
