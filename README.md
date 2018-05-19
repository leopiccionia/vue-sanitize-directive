# v-sanitize

[Vue](https://vuejs.org)'s default `v-text` is HTML-insensitive, while `v-html` doesn't perform sanitization by default.

`v-sanitize` is a Vue directive for HTML sanitization, powered by the flexible [sanitize-html](https://www.npmjs.com/package/sanitize-html). The directive can receive either a string, that will undergo a partial sanitization if no modifier is present, or an array of two elements, the first being a `sanitize-html` whitelist ([know more here](https://github.com/punkave/sanitize-html)) and the second being the string to be sanitized.

```html
<div v-sanitize="unsafe_html"></div>
```

## Setup

Start getting it with NPM or Yarn.

```bash
npm install vue-sanitize-directive
# Alternatively: yarn install vue-sanitize-directive
```

Then install it like any other Vue plugin. This will provide the `v-sanitize` directive globally.

```js
import VueSanitize from 'vue-sanitize-directive'
Vue.use(VueSanitize)
```

## Usage ([**demos**]())

### Strip all tags (`.strip` modifier)

Removes all HTML tags, keeping just the text content.

```html
<span v-sanitize.strip="unsafe_html"></span>
```

### Remove unsafe tags (default/ `.basic` modifier)

Allows some HTML tags, but remove unsafe content, like `<script/>` and `<iframe/>` tags.

```html
<span v-sanitize.basic="unsafe_html"></span> = <span v-sanitize="unsafe_html"></span>
```

### Keep inline styles (`.inline` modifier)

Removes most tags, keeping only inline formatting and `<br/>` tags.

```html
<span v-sanitize.inline="unsafe_html"></span>
```

### Allow all tags (`.nothing` modifier)
Allows all HTML tags, not performing sanitization. For all effects, it's a replacement for `v-html`.

```html
<span v-sanitize.nothing="unsafe_html"></span>
```