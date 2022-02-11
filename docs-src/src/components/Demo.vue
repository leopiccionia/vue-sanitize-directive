<template>
  <div class="container">
    <img class="logo" src="../assets/logo.svg" height="150" width="150" alt="">
    <h1>v-sanitize</h1>

    <p><a href="https://vuejs.org/" target="_blank">Vue</a>'s default <code>v-text</code> is HTML-insensitive, while <code>v-html</code> doesn't perform sanitization by default.</p>
    <p><code>v-sanitize</code> is a Vue directive for HTML sanitization, powered by the flexible <a href="https://www.npmjs.com/package/sanitize-html" target="_blank">sanitize-html</a>. The directive can receive either a string, that will undergo a partial sanitization if no modifier is present, or an array of two elements, the first being a <code>sanitize-html</code> allowlist (<a href="https://github.com/apostrophecms/sanitize-html" target="_blank">know more here</a>) and the second being the string to be sanitized.</p>
    <pre class="editor" v-pre>
      <code>&lt;<span class="red">div</span> <span class="orange">v-sanitize</span>="<span class="green">unsafe_html</span>"&gt;&lt;/<span class="red">div</span>&gt;</code>
    </pre>

    <div class="warning">
      <h2>Warning</h2>
      <p>The validation and sanitization of user-provided input should be performed on the back-end, before storing it on the database. You should resort to client-side input sanitization only if you don't control the back-end, e.g., consuming content from an external API.</p>
    </div>

    <h2>Setup</h2>
    <p>Start getting it with NPM or Yarn (<a href="https://www.npmjs.com/package/vue-sanitize-directive" target="_blank">see package</a>).</p>
    <pre class="editor">
      <code><span class="white">npm install vue-sanitize-directive</span></code>
    </pre>
    <p>Then install it like any other Vue plugin. This will provide the <code>v-sanitize</code> directive globally.</p>
    <pre class="editor">
      <code>import <span class="white">VueSanitize</span> from '<span class="green">vue-sanitize-directive</span>'</code>
      <code><span class="gray">// Vue 2.x</span></code>
      <code><span class="white">Vue</span>.<span class="blue">use</span>(<span class="white">VueSanitize</span>)</code>
      <code><span class="gray">// Vue 3.x</span></code>
      <code><span class="white">app</span>.<span class="blue">use</span>(<span class="white">VueSanitize</span>)</code>
    </pre>

    <h2>Demos</h2>
    <div class="demo" v-sanitize="[filter, html]"></div>
    <div>
      <button @click="filterString()">Remove all tags</button>
      <button @click="filterBasic()">Remove unsafe</button>
      <button @click="filterInline()">Allow inline</button>
      <button @click="filterNothing()">Allow all tags</button>
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
    <p>Edit the box below, as JSON. Read <a href="https://github.com/apostrophecms/sanitize-html" target="_blank">sanitize-html docs</a> for more details.</p>
    <div class="table">
      <div class="row">
        <div class="col">
          <textarea aria-label="Allowlist" rows="5" v-model="editableFilter"></textarea>
          <button @click="updateFilter()">Update allowlist</button>
        </div>
        <div class="col">
          <textarea aria-label="HTML input" rows="5" v-model="editableHtml"></textarea>
          <button @click="updateHtml()">Update HTML</button>
        </div>
        <div class="col">
          <div class="demo" v-sanitize="[customFilter, customHtml]"></div>
        </div>
      </div>
    </div>

    <footer>
      <p>&copy; 2018-2022 Leonardo Piccioni de Almeida. <a href="https://github.com/leopiccionia/vue-sanitize-directive">See on GitHub</a>.</p>
    </footer>
  </div>
</template>

<script>
import { FILTER_BASIC, FILTER_INLINE, FILTER_NOTHING, FILTER_STRIP } from 'vue-sanitize-directive'

const html = `
  <iframe src="https://www.openstreetmap.org/export/embed.html" title="Example page"></iframe>
  <p>This is a <strong>test</strong>.</p>
`

export default {
  data () {
    return {
      filter: FILTER_BASIC,
      customFilter: FILTER_BASIC,
      editableFilter: JSON.stringify(FILTER_BASIC, null, 2),
      html,
      customHtml: html,
      editableHtml: html,
    }
  },
  methods: {
    filterBasic() {
      this.filter = FILTER_BASIC
    },
    filterInline() {
      this.filter = FILTER_INLINE
    },
    filterNothing() {
      this.filter = FILTER_NOTHING
    },
    filterString() {
      this.filter = FILTER_STRIP
    },
    updateFilter() {
      this.customFilter = JSON.parse(this.editableFilter)
    },
    updateHtml() {
      this.customHtml = this.editableHtml
    },
  },
}
</script>

<style lang="stylus">
$border-radius = 5px
$brand-bg = #F7FAFF
$brand-primary = #35495E
$brand-secondary = #42B883
$demo-bg = #DDE7EE

body
  background: $brand-bg

a
  color: $brand-secondary
  font-weight: bold
  text-decoration: none

button
  background-color: $brand-secondary
  border: 0
  border-radius: 20px
  box-shadow: none
  color: white
  font-weight: bold
  margin: 5px
  padding: 10px 20px
  text-transform: uppercase

code
  background-color: $demo-bg
  border-radius: $border-radius
  font-family: 'Courier New', 'Courier', monospace
  padding: 3px

.container
  margin: auto
  max-width: 1024px

.demo
  background-color: $demo-bg
  border-radius: $border-radius
  margin: 20px
  padding: 20px

:not(.demo) p
  line-height: 1.5
  margin: 20px
  text-align: justify
  text-align-last: center

.editor
  background-color: #191D2E
  border-radius: $border-radius
  color: #89DDFF
  font-family: 'Courier New', 'Courier', monospace
  line-height: 1.25
  margin: 20px
  overflow-x: auto
  padding: 20px
  white-space: normal

  code
    background-color: transparent
    display: block
    font-family: 'Courier New', 'Courier', monospace

  p
    text-align: left

  .blue
    color: #52ADF2
  .cyan
    color: #89DDFF
  .gray
    color: #676E95
  .green
    color: #C3E88D
  .orange
    color: #F78C6C
  .red
    color: #F07178
  .white
    color: #A6ACCD

.warning
  background-color: #FECDD3
  border-radius: $border-radius
  color: #881337
  margin: 20px
  padding: 0.1px

  h2
    color: #9F1239

footer
  background-color: $brand-primary
  border-radius: $border-radius
  color: $brand-bg
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
