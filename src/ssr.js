import sanitizeHtml from 'sanitize-html'

import { resolveDirectiveArguments } from './shared'

export default function serverSideSanitization (vnode, { modifiers, value }) {
  const { config, input } = resolveDirectiveArguments(modifiers, value)

  vnode.data.domProps = vnode.data.domProps || {}
  vnode.data.domProps.innerHTML = sanitizeHtml(input, config)
}
