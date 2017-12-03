import sanitizeHtml from 'sanitize-html'

const FILTER_ALL = {
	allowedTags: [],
	allowedAttributes: []
}
const FILTER_BASIC = sanitizeHtml.defaults
const FILTER_NONE = {
	allowedTags: false,
	allowedAttributes: false
}

export default function(el, binding) {
	if (Array.isArray(binding.value)) {
		el.innerHTML = sanitizeHtml(binding.value[1], binding.value[0])
	}
	else {
		if (binding.modifiers.all) {
			el.innerHTML = sanitizeHtml(binding.value, FILTER_ALL)
		}
		else if (binding.modifiers.none) {
			el.innerHTML = sanitizeHtml(binding.value, FILTER_NONE)
		}
		else {
			el.innerHTML = sanitizeHtml(binding.value)
		}
	}
}