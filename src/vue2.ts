import { FILTER_BASIC, FILTER_INLINE, FILTER_NOTHING, FILTER_STRIP, resolveDirectiveArguments, sanitizeHtml } from './common'
import type { SanitizeDirectiveValue } from './common'
import type { Directive, DirectiveBinding, DirectiveOptions, VNode, VueConstructor } from 'vue2'

function clientSideSanitization (el: HTMLElement, { modifiers, oldValue, value }: DirectiveBinding<SanitizeDirectiveValue>) {
  if (value !== oldValue) {
    const { config, input } = resolveDirectiveArguments(modifiers, value)

    el.innerHTML = sanitizeHtml(input, config)
  }
}

/**
 * @experimental
 * Implementation for Vue 2.x SSR. Don't use it client-side.
 */
export function VueSanitizeDirectiveSSR (vnode: VNode, { modifiers, value }: DirectiveBinding<SanitizeDirectiveValue>) {
  const { config, input } = resolveDirectiveArguments(modifiers, value)

  vnode.data = vnode.data || {}
  vnode.data.domProps = vnode.data.domProps || {}
  vnode.data.domProps.innerHTML = sanitizeHtml(input, config)
}

export const directive: Directive<HTMLElement, SanitizeDirectiveValue> = {
  inserted: clientSideSanitization,
  update: clientSideSanitization,
}

export default {
  install (app: VueConstructor, { name = 'sanitize' } = {}) {
    app.directive(name, directive as DirectiveOptions)
  }
}

export { FILTER_BASIC, FILTER_INLINE, FILTER_NOTHING, FILTER_STRIP }
