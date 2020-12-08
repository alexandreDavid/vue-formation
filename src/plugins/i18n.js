const i18nStrings = {
  fr: {
    about: 'Page à propos'
  }
}

export default {
  install: (app) => {
    app.config.globalProperties.$lang = 'fr'

    app.config.globalProperties.$translate = (key) => {
      return key.split('.')
        .reduce((o, i) => { if (o) return o[i] }, i18nStrings[app.config.globalProperties.$lang])
    }

    app.provide('i18n', i18nStrings)
  }
}