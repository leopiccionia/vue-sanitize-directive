<script setup>
import { highlight, languages } from 'prismjs/components/prism-core'
import { ref, shallowRef, watch } from 'vue'
import { PrismEditor } from 'vue-prism-editor'
import { vSanitize, FILTER_BASIC, FILTER_INLINE, FILTER_NOTHING, FILTER_STRIP } from 'vue-sanitize-directive'

import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markup'
import 'vue-prism-editor/dist/prismeditor.min.css'

const _html = `<iframe src="https://www.openstreetmap.org/export/embed.html" title="Example page"></iframe>
<p>This is a <strong>test</strong>.</p>`

const filter = shallowRef(FILTER_BASIC)
const customFilter = shallowRef(FILTER_BASIC)
const editableFilter = ref(JSON.stringify(FILTER_BASIC, null, 2))
const html = ref(_html)
const customHtml = ref(_html)

const year = (new Date()).getFullYear()

function filterBasic () {
  filter.value = FILTER_BASIC
}
function filterInline () {
  filter.value = FILTER_INLINE
}
function filterNothing () {
  filter.value = FILTER_NOTHING
}
function filterStrip () {
  filter.value = FILTER_STRIP
}

watch(editableFilter, (json) => {
  try {
    customFilter.value = JSON.parse(json)
  } catch {}
})

function highlightHtml (code) {
  return highlight(code, languages.html)
}
function highlightJson (code) {
  return highlight(code, languages.json)
}
</script>

<template>
  <div class="container">
    <img class="logo" src="../assets/logo.svg" height="150" width="150" alt="">
    <h1>v-sanitize</h1>

    <p><a href="https://vuejs.org/" target="_blank">Vue</a>'s default <code>v-text</code> is HTML-insensitive, while <code>v-html</code> doesn't perform sanitization by default.</p>
    <p><code>v-sanitize</code> is a Vue directive for HTML sanitization, powered by the flexible <a href="https://www.npmjs.com/package/sanitize-html" target="_blank">sanitize-html</a>. The directive can receive either a string, that will undergo a partial sanitization if no modifier is present, or an array of two elements, the first being a <code>sanitize-html</code> allowlist (<a href="https://github.com/apostrophecms/sanitize-html" target="_blank">know more here</a>) and the second being the string to be sanitized.</p>
    <pre class="editor" v-pre>
      <code><span class="punctuation">&lt;</span><span class="tag">div</span> <span class="attr-name">v-sanitize</span><span class="punctuation">="</span><span class="attr-value">unsafe_html</span><span class="punctuation">"&gt;&lt;/</span><span class="tag">div</span><span class="punctuation">&gt;</span></code>
    </pre>

    <div class="warning">
      <h2>Warning</h2>
      <p>The validation and sanitization of user-provided input should be performed on the back-end, before storing it on the database. You should resort to client-side input sanitization only if you don't control the back-end, e.g., consuming content from an external API.</p>
    </div>

    <h2>Setup</h2>
    <p>Start getting it on npm (<a href="https://www.npmjs.com/package/vue-sanitize-directive" target="_blank">see package</a>).</p>
    <pre class="editor">
      <code>npm install vue-sanitize-directive</code>
    </pre>
    <p>Then install it like any other Vue plugin. This will provide the <code>v-sanitize</code> directive globally.</p>
    <pre class="editor">
      <code><span class="keyword">import</span> VueSanitize <span class="keyword">from</span> <span class="punctuation">'</span><span class="string">vue-sanitize-directive</span><span class="punctuation">'</span></code>
      <code><span class="comment">// Vue 2.x</span></code>
      <code>Vue<span class="punctuation">.</span><span class="function">use</span><span class="punctuation">(</span>VueSanitize<span class="punctuation">)</span></code>
      <code><span class="comment">// Vue 3.x</span></code>
      <code>app<span class="punctuation">.</span><span class="function">use</span><span class="punctuation">(</span>VueSanitize<span class="punctuation">)</span></code>
    </pre>
    <p>Alternatively, the directive can be imported manually:</p>
    <pre class="editor">
      <code><span class="keyword">import</span> <span class="punctuation">{</span> vSanitize <span class="punctuation">}</span> <span class="keyword">from</span> <span class="punctuation">'</span><span class="string">vue-sanitize-directive</span><span class="punctuation">'</span></code>
    </pre>

    <h2>Demos</h2>
    <div class="demo" v-sanitize="[filter, html]"></div>
    <div>
      <button @click="filterStrip()">Remove all tags</button>
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
          <PrismEditor aria-label="Allowlist" :highlight="highlightJson" v-model="editableFilter"/>
        </div>
        <div class="col">
          <PrismEditor aria-label="HTML input" :highlight="highlightHtml" v-model="customHtml"/>
        </div>
        <div class="col">
          <div class="demo" v-sanitize="[customFilter, customHtml]"></div>
        </div>
      </div>
    </div>

    <footer>
      <p>&copy; 2018-{{ year }} Leonardo Piccioni de Almeida. <a href="https://github.com/leopiccionia/vue-sanitize-directive">See on GitHub</a>.</p>
    </footer>
  </div>
</template>

<style lang="stylus">
$border-radius = 5px
$brand-bg = #F7FAFF
$brand-primary = #35495E
$brand-secondary = #42B883
$demo-bg = #DDE7EE

body
  background: $brand-bg
  margin: 1rem

p
  line-height: 1.5
  margin: 1rem
  text-align: justify
  text-align-last: center

a
  color: $brand-secondary
  font-weight: bold
  text-decoration: none

button
  background-color: $brand-secondary
  border: 0
  border-radius: 1rem
  box-shadow: none
  color: white
  font-weight: bold
  margin: 5px
  padding: 0.5rem 1rem
  text-transform: uppercase

code
  background-color: $demo-bg
  border-radius: $border-radius
  font-family: 'Courier New', 'Courier', monospace
  padding: 3px

.container
  margin-inline: auto
  max-width: 1024px

.demo
  background-color: $demo-bg
  border-radius: $border-radius
  margin-block: 1rem
  padding: 1rem

.editor
  background-color: #1A1A1A
  border-radius: $border-radius
  color: #A6ACCD
  font-family: 'Courier New', 'Courier', monospace
  line-height: 1.25
  margin-block: 1rem
  overflow-x: auto
  padding: 1rem
  white-space: normal

  code
    background-color: transparent
    display: block
    font-family: 'Courier New', 'Courier', monospace

  p
    text-align: left

.token
  color: #C792EA
.attr-name, .boolean, .number
  color: #F78C6C
.attr-value, .string
  color: #C3E88D
.comment
  color: #676E95
.function
  color: #82AAFF
.keyword, .operator, .punctuation
  color: #89DDFF
.keyword.null
  color: #C792EA
.property
  color: #FFCB6B
.tag
  color: #F07178

.warning
  background-color: #FECDD3
  border-radius: $border-radius
  color: #881337
  margin-block: 1rem
  padding: 0.1px

  h2
    color: #9F1239

footer
  background-color: $brand-primary
  border-radius: $border-radius
  color: $brand-bg
  margin-top: 1rem
  padding: 1rem

  p
    margin: 0

h1, h2, h3
  color: $brand-primary

.logo
  margin-top: 1rem
  width: 150px

.prism-editor-wrapper
  background-color: #191D2E
  border-radius: $border-radius

  .prism-editor__editor, .prism-editor__textarea
    font-family: 'Courier New', 'Courier', monospace
    padding: 0.5rem

  .prism-editor__editor
    color: #A6ACCD

  .prism-editor__textarea
    caret-color: $brand-secondary
    outline: none

.table
  margin-block: 1rem

.row
  display: grid
  gap: 1rem
  grid-template-columns: minmax(0, 1fr)

.col
  max-height: 15rem

  .demo
    margin: 0

@media screen and (min-width: 900px)
  .row
    grid-template-columns: repeat(3, minmax(0, 1fr))

  .col .demo
    height: calc(100% - 2rem)
</style>
