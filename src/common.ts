import sanitizeHtml from 'sanitize-html'
import type { IOptions as SanitizeOptions } from 'sanitize-html'

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
  allowedAttributes: false,
}

export const FILTER_STRIP: SanitizeOptions = {
  allowedTags: [],
  allowedAttributes: {},
}

export function resolveDirectiveArguments (modifiers: Record<string, boolean>, input: SanitizeDirectiveValue) {
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

export { sanitizeHtml }
