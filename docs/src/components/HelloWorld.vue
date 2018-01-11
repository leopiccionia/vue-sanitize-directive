<template>
  <div>
    <h1>V-Sanitize</h1>
    <p><code>v-sanitize</code> is a <a href="https://vuejs.org/" target="_blank">Vue.js</a> directive for HTML sanitization, powered by the good <a href="https://www.npmjs.com/package/sanitize-html" target="_blank">sanitize-html</a>. It differs from both Vue's official <code>v-text</code> directive, that is HTML-insensitive, and <code>v-html</code>, that doesn't perform sanitization by default. The directive can receive either a string, that will undergo a partial sanitization if no modifier is present, or an array of two elements, the first being a <code>sanitize-html</code> whitelist (<a href="https://github.com/punkave/sanitize-html" target="_blank">know more here</a>) and the second being the string to be sanitized.</p>
    <code v-pre>&lt;div v-sanitize="unsafe_html"&gt;&lt;/div&gt;</code>

    <h2>Demos</h2>
    <div class="demo" v-sanitize="[filter, html]"></div>
    <div>
      <button @click="keep_none()">Remove all</button>
      <button @click="keep_basic()">Remove unsafe</button>
      <button @click="keep_inline()">Allow inline</button>
      <button @click="keep_all()">Allow all</button>
    </div>

    <h3>Remove all (<code>.none</code> modifier)</h3>
    <p>Removes all HTML tags, keeping text content only.</p>
    <div class="demo" v-sanitize.none="html"></div>

    <h3>Remove unsafe (default / <code>.basic</code> modifier)</h3>
    <p>Allows some HTML tags, but removes unsafe content like <code>&lt;script/&gt;</code> and <code>&lt;iframe/&gt;</code> tags.</p>
    <p>In the following example, <code>&lt;iframe/&gt;</code> tag was removed, <code>&lt;p/&gt;</code> and <code>&lt;strong/&gt;</code> tags are kept.</p>
    <div class="demo" v-sanitize="html"></div>

    <h3>Keep inline (<code>.inline</code> modifier)</h3>
    <p>Removes most tags, keeping inline formatting and <code>&lt;br/&gt;</code> tags.</p>
    <div class="demo" v-sanitize.inline="html"></div>

    <h3>Allow all (<code>.all</code> modifier)</h3>
    <p>Allow all HTML tags, not performing sanitization. Use it for debugging purposes only.</p>
    <div class="demo" v-sanitize.all="html"></div>

    <h3>Custom whitelist</h3>
    <p>Edit the box below, as JSON. Read <a href="https://github.com/punkave/sanitize-html" target="_blank">sanitize-html docs</a> for more details.</p>
    <div class="table">
      <div class="row">
        <div class="col">
          <textarea rows="5" v-model="editable_filter"></textarea>
          <button @click="update_filter()">Update whitelist</button>
        </div>
        <div class="col">
          <textarea rows="5" v-model="editable_html"></textarea>
          <button @click="update_html()">Update HTML</button>
        </div>
        <div class="col">
          <div class="demo" v-sanitize="[custom_filter, custom_html]"></div>
        </div>
      </div>
    </div>

    <footer>
      <p>&copy; 2017 Leonardo Piccioni de Almeida. <a href="#">See on GitHub</a>.</p>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import sanitizeHtml from 'sanitize-html'
import VSanitize from '../plugins/sanitize'
Vue.use(VSanitize)

const filters = {
  all: {
    allowedTags: false,
    allowedAttributes: false
  },
  basic: sanitizeHtml.defaults,
  inline: {
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
  },
  none: {
    allowedTags: [],
    allowedAttributes: []
  }
}

const html = `<iframe src="https://www.vuejs.org"></iframe>
<p>This is a <strong>test</strong>.</p>`

export default {
  data () {
    return {
      filters,
      filter: filters.basic,
      custom_filter: filters.basic,
      editable_filter: JSON.stringify(filters.basic, null, 2),
      html,
      custom_html: html,
      editable_html: html,
    }
  },
  methods: {
    keep_all() {
      this.filter = this.filters.all
    },
    keep_basic() {
      this.filter = this.filters.basic
    },
    keep_inline() {
      this.filter = this.filters.inline
    },
    keep_none() {
      this.filter = this.filters.none
    },
    update_filter() {
      this.custom_filter = JSON.parse(this.editable_filter)
    },
    update_html() {
      this.custom_html = this.editable_html
    }
  }
}
</script>

<style lang="stylus" scoped>
$brand-primary = #35495e
$brand-secondary = #42b883
$demo-bg = #EEE

a
  color: $brand-secondary

button
  background-color: $brand-secondary
  border: 0
  border-radius: 20px
  box-shadow: none
  color: white
  margin: 5px
  padding: 10px
  padding-left: 20px
  padding-right: 20px
  text-transform: uppercase

code
  background-color: $demo-bg
  padding: 5px

.demo
  background-color: $demo-bg
  margin: 20px
  padding: 20px

:not(.demo) p
  margin-left: 20px
  margin-right: 20px

footer
  background-color: $brand-primary
  color: $demo-bg
  margin-top: 20px
  padding: 10px

h1, h2, h3
  color: $brand-primary

textarea
  margin: 20px
  padding: 10px
  width: calc(100% - 40px)

@media screen and (max-width: 900px)
  .col
    width: 100%

@media screen and (min-width: 900px)
  .table
    display: table
    width: 100%

  .row
    display: table-row

  .col
    display: table-cell
    height: 100%
    vertical-align: top
    width: 33.3%
</style>
