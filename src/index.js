import sanitizeHtml from 'sanitize-html'

import { FILTER_BASIC, FILTER_INLINE, FILTER_NOTHING, FILTER_STRIP, resolveDirectiveArguments } from './shared'

function clientSideSanitization (el, { modifiers, oldValue, value }) {
  if (value !== oldValue) {
    const { config, input } = resolveDirectiveArguments(modifiers, value)

    el.innerHTML = sanitizeHtml(input, config)
  }
}

function serverSideSanitization ({ modifiers, value }) {
  const { config, input } = resolveDirectiveArguments(modifiers, value)

  return {
    innerHTML: sanitizeHtml(input, config)
  }
}

export default {
  install (app, { name = 'sanitize' } = {}) {
    app.directive(name, {
      getSSRProps: serverSideSanitization,
      inserted: clientSideSanitization,
      mounted: clientSideSanitization,
      update: clientSideSanitization,
      updated: clientSideSanitization,
    })
  }
}

export { FILTER_BASIC, FILTER_INLINE, FILTER_NOTHING, FILTER_STRIP }
