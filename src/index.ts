import sanitizeHtml from 'sanitize-html'
import type { IOptions as SanitizeOptions } from 'sanitize-html'
import type { App, Directive, DirectiveBinding, VNode } from 'vue-demi'

export type SanitizeDirectiveValue = string | [SanitizeOptions, string]

export const FILTER_BASIC: SanitizeOptions = sanitizeHtml.defaults

export const FILTER_INLINE: SanitizeOptions = {
  allowedTags: [
    'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn',
    'em', 'i', 'kbd', 'mark', 'q',
    'rb', 'rp', 'rt', 'rtc', 'ruby',
    's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr',
  ],
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    span: ['style']
  },
  allowedSchemes: ['ftp', 'http', 'https', 'mailto'],
  selfClosing: ['br'],
  parser: {
    decodeEntities: true,
  },
}

export const FILTER_NOTHING: SanitizeOptions = {
  allowedTags: false,
  allowVulnerableTags: true,
  allowedAttributes: false,
}

export const FILTER_STRIP: SanitizeOptions = {
  allowedTags: [],
  allowedAttributes: {},
}

function resolveDirectiveArguments (modifiers: Record<string, boolean>, input: SanitizeDirectiveValue) {
  if (Array.isArray(input)) {
    return { config: input[0], input: input[1] }
  } else if (modifiers.strip) {
    return { config: FILTER_STRIP, input }
  } else if (modifiers.basic) {
    return { config: FILTER_BASIC, input }
  } else if (modifiers.inline) {
    return { config: FILTER_INLINE, input }
  } else if (modifiers.nothing) {
    return { config: FILTER_NOTHING, input }
  } else {
    return { config: FILTER_BASIC, input }
  }
}

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

/**
 * @experimental
 * Implementation for Vue 2.x SSR. Don't use it client-side.
 */
export function VueSanitizeDirectiveSSR (vnode: VNode, { modifiers, value }: DirectiveBinding<SanitizeDirectiveValue>) {
  const { config, input } = resolveDirectiveArguments(modifiers, value)

  /* @ts-ignore */
  vnode.data = vnode.data ?? {}
  /* @ts-ignore */
  vnode.data.domProps = vnode.data.domProps ?? {}
  /* @ts-ignore */
  vnode.data.domProps.innerHTML = sanitizeHtml(input, config)
}

export type VueSanitizeDirective = Directive<HTMLElement, SanitizeDirectiveValue> & Record<string, unknown>

export const vSanitize: VueSanitizeDirective = {
  getSSRProps: serverSideSanitization,
  inserted: clientSideSanitization,
  mounted: clientSideSanitization,
  update: clientSideSanitization,
  updated: clientSideSanitization,
}

export default {
  install (app: App, { name = 'sanitize' } = {}) {
    app.directive(name, vSanitize)
  }
}

export { sanitizeHtml }
