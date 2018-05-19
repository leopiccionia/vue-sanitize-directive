import sanitizeHtml from 'sanitize-html';

export var FILTER_BASIC = sanitizeHtml.defaults;

export var FILTER_INLINE = {
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
};

export var FILTER_NOTHING = {
  allowedTags: false,
  allowedAttributes: false
};

export var FILTER_STRIP = {
  allowedTags: [],
  allowedAttributes: []
};

export default {
  install: function install(Vue) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'sanitize' : _ref$name;

    Vue.directive(name, function (el, binding) {
      if (binding.value !== binding.oldValue) {
        if (Array.isArray(binding.value)) {
          el.innerHTML = sanitizeHtml(binding.value[1], binding.value[0]);
        } else {
          if (binding.modifiers.strip) {
            el.innerHTML = sanitizeHtml(binding.value, FILTER_STRIP);
          } else if (binding.modifiers.basic) {
            el.innerHTML = sanitizeHtml(binding.value);
          } else if (binding.modifiers.inline) {
            el.innerHTML = sanitizeHtml(binding.value, FILTER_INLINE);
          } else if (binding.modifiers.nothing) {
            el.innerHTML = sanitizeHtml(binding.value, FILTER_NOTHING);
          } else {
            el.innerHTML = sanitizeHtml(binding.value);
          }
        }
      }
    });
  }
};
