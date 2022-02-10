<template>
  <div class="container">
    <img class="logo" src="../assets/logo.svg">
    <h1>v-sanitize</h1>

    <p><a href="https://vuejs.org/" target="_blank">Vue</a>'s default <code>v-text</code> is HTML-insensitive, while <code>v-html</code> doesn't perform sanitization by default.</p>
    <p><code>v-sanitize</code> is a Vue directive for HTML sanitization, powered by the flexible <a href="https://www.npmjs.com/package/sanitize-html" target="_blank">sanitize-html</a>. The directive can receive either a string, that will undergo a partial sanitization if no modifier is present, or an array of two elements, the first being a <code>sanitize-html</code> allowlist (<a href="https://github.com/punkave/sanitize-html" target="_blank">know more here</a>) and the second being the string to be sanitized.</p>
    <div class="editor" v-pre>
      <p>&lt;<span class="red">div</span> <span class="orange">v-sanitize</span>=<span class="green">"unsafe_html"</span>&gt;&lt;/<span class="red">div</span>&gt;</p>
    </div>

    <h2>Setup</h2>
    <p>Start getting it with NPM or Yarn (<a href="https://www.npmjs.com/package/vue-sanitize-directive" target="_blank">see package</a>).</p>
    <div class="editor">
      <p>npm install vue-sanitize-directive</p>
      <p class="gray"># Alternatively: yarn add vue-sanitize-directive</p>
    </div>
    <p>Then install it like any other Vue plugin. This will provide the <code>v-sanitize</code> directive globally.</p>
    <div class="editor">
      <p><span class="purple">import</span> <span class="red">VueSanitize</span> <span class="purple">from</span> <span class="green">'vue-sanitize-directive'</span></p>
      <p><span class="red">Vue</span>.<span class="blue">use</span>(<span class="red">VueSanitize</span>)</p>
    </div>

    <h2>Demos</h2>
    <div class="demo" v-sanitize="[filter, html]"></div>
    <div>
      <button @click="filter_strip()">Remove all tags</button>
      <button @click="filter_basic()">Remove unsafe</button>
      <button @click="filter_inline()">Allow inline</button>
      <button @click="filter_nothing()">Allow all tags</button>
    </div>

    <h3>Strip all tags (<code>.strip</code> modifier)</h3>
    <p>Removes all HTML tags, keeping just the text content.</p>
    <div class="demo" v-sanitize.strip="html"></div>

    <h3>Remove unsafe tags (default / <code>.basic</code> modifier)</h3>
    <p>Allows some HTML tags, but removes unsafe content, like <code>&lt;script/&gt;</code> and <code>&lt;iframe/&gt;</code> tags.</p>
    <p>In the following example, the <code>&lt;iframe/&gt;</code> tag was removed, while <code>&lt;p/&gt;</code> and <code>&lt;strong/&gt;</code> tags were kept.</p>
    <div class="demo" v-sanitize="html"></div>

    <h3>Keep inline styles (<code>.inline</code> modifier)</h3>
    <p>Removes most tags, keeping only inline formatting and <code>&lt;br/&gt;</code> tags.</p>
    <div class="demo" v-sanitize.inline="html"></div>

    <h3>Allow all tags (<code>.nothing</code> modifier)</h3>
    <p>Allows all HTML tags, not performing sanitization. For all effects, it's a replacement for <code>v-html</code>.</p>
    <div class="demo" v-sanitize.nothing="html"></div>

    <h3>Custom allowlists</h3>
    <p>Edit the box below, as JSON. Read <a href="https://github.com/punkave/sanitize-html" target="_blank">sanitize-html docs</a> for more details.</p>
    <div class="table">
      <div class="row">
        <div class="col">
          <textarea rows="5" v-model="editable_filter"></textarea>
          <button @click="update_filter()">Update allowlist</button>
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
      <p>&copy; 2018 Leonardo Piccioni de Almeida. <a href="https://github.com/leopiccionia/vue-sanitize-directive">See on GitHub</a>.</p>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import VueSanitize, { FILTER_BASIC, FILTER_INLINE, FILTER_NOTHING, FILTER_STRIP } from 'vue-sanitize-directive'
Vue.use(VueSanitize)

const html = `
  <iframe src="https://www.vuejs.org"></iframe>
  <p>This is a <strong>test</strong>.</p>
`

export default {
  data () {
    return {
      filter: FILTER_BASIC,
      custom_filter: FILTER_BASIC,
      editable_filter: JSON.stringify(FILTER_BASIC, null, 2),
      html,
      custom_html: html,
      editable_html: html,
    }
  },
  methods: {
    filter_basic() {
      this.filter = FILTER_BASIC
    },
    filter_inline() {
      this.filter = FILTER_INLINE
    },
    filter_nothing() {
      this.filter = FILTER_NOTHING
    },
    filter_strip() {
      this.filter = FILTER_STRIP
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
  padding: 10px 20px
  text-transform: uppercase

code
  background-color: $demo-bg
  font-family: 'Courier New', 'Courier', monospace
  padding: 5px

.container
  margin: auto
  max-width: 1200px

.demo
  background-color: $demo-bg
  margin: 20px
  padding: 20px

:not(.demo) p
  line-height: 150%
  margin: 20px
  text-align: justify
  text-align-last: center

.editor
  color: white
  font-family: 'Courier New', 'Courier', monospace
  line-height: 120%
  margin: 20px
  padding: 10px

  p
    line-height: 100%
    text-align: left

  // Based on One Dark theme
  background-color: #282C34
  .blue
    color: #52ADF2
  .gray
    color: #5C6370
  .green
    color: #89CA78
  .orange
    color: #D8985F
  .purple
    color: #D55FDE
  .red
    color: #EF596F

footer
  background-color: $brand-primary
  color: $demo-bg
  margin-top: 20px
  padding: 10px

h1, h2, h3
  color: $brand-primary

.logo
  margin-top: 20px
  width: 150px

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
