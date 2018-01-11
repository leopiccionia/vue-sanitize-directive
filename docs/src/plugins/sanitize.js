import sanitizeHtml from 'sanitize-html'

const KEEP_ALL = {
	allowedTags: false,
	allowedAttributes: false
}
const KEEP_BASIC = sanitizeHtml.defaults
const KEEP_INLINE = {
	allowedTags: ['a', 'b', 'br', 'code', 'em', 'i', 'span', 'strike', 'strong', 'u'],
	allowedAttributes: {
		a: ['href', 'target'],
		span: ['style']
	},
	selfClosing: ['br'],
	allowedSchemes: ['ftp', 'http', 'https', 'mailto'],
	parser: {
		decodeEntities: true
	}
}
const KEEP_NONE = {
	allowedTags: [],
	allowedAttributes: []
}

export default {
	install(Vue, options) {
		Vue.directive('sanitize', function(el, binding) {
			if (binding.value !== binding.oldValue) {
				if (Array.isArray(binding.value)) {
					el.innerHTML = sanitizeHtml(binding.value[1], binding.value[0])
				}
				else {
					if (binding.modifiers.all) {
						el.innerHTML = sanitizeHtml(binding.value, KEEP_ALL)
					}
					else if (binding.modifiers.inline) {
						el.innerHTML = sanitizeHtml(binding.value, KEEP_INLINE)
					}
					else if (binding.modifiers.none) {
						el.innerHTML = sanitizeHtml(binding.value, KEEP_NONE)
					}
					else {
						el.innerHTML = sanitizeHtml(binding.value)
					}
				}
			}
		})
	}
}
