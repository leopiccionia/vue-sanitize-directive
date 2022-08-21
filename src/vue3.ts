import { FILTER_BASIC, FILTER_INLINE, FILTER_NOTHING, FILTER_STRIP, resolveDirectiveArguments, sanitizeHtml } from './common'
import type { SanitizeDirectiveValue } from './common'
import type { App, Directive, DirectiveBinding } from 'vue3'

function clientSideSanitization (el: HTMLElement, { modifiers, oldValue, value }: DirectiveBinding<SanitizeDirectiveValue>) {
  if (value !== oldValue) {
    const { config, input } = resolveDirectiveArguments(modifiers, value)

    el.innerHTML = sanitizeHtml(input, config)
  }
}

function serverSideSanitization ({ modifiers, value }: DirectiveBinding<SanitizeDirectiveValue>) {
  const { config, input } = resolveDirectiveArguments(modifiers, value)

  return {
    innerHTML: sanitizeHtml(input, config)
  }
}

export const directive: Directive<HTMLElement, SanitizeDirectiveValue> = {
  getSSRProps: serverSideSanitization,
  mounted: clientSideSanitization,
  updated: clientSideSanitization,
}

export default {
  install (app: App, { name = 'sanitize' } = {}) {
    app.directive(name, directive)
  }
}

export { FILTER_BASIC, FILTER_INLINE, FILTER_NOTHING, FILTER_STRIP }
