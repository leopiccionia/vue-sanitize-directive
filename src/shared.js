import sanitizeHtml from 'sanitize-html'

export const FILTER_BASIC = sanitizeHtml.defaults

export const FILTER_INLINE = {
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

export const FILTER_NOTHING = {
  allowedTags: false,
  allowedAttributes: false
}

export const FILTER_STRIP = {
  allowedTags: [],
  allowedAttributes: []
}

export function resolveDirectiveArguments (modifiers, input) {
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
