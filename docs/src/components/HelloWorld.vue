<template>
  <div>
    <h1>V-Sanitize</h1>
    <code v-pre>&lt;div v-sanitize="unsafe_html"&gt;&lt;/div&gt;</code>

    <h2>Demos</h2>
    <div class="demo" v-sanitize="[filter, html]"></div>
    <div>
      <button @click="filter_all()">Remove all</button>
      <button @click="filter_basic()">Remove unsafe</button>
      <button @click="filter_none()">Allow all</button>
    </div>

    <h3>Remove all (<code>.all</code> modifier)</h3>
    <p>Removes all HTML tags, keeping text content.</p>
    <div class="demo" v-sanitize.all="html"></div>

    <h3>Remove unsafe (default / <code>.basic</code> modifier)</h3>
    <p>Allows some HTML tags, but removes unsafe content like <code>&lt;script/&gt;</code> and <code>&lt;iframe/&gt;</code> tags.</p>
    <div class="demo" v-sanitize="html"></div>

    <h3>Allow all (<code>.none</code> modifier)</h3>
    <p>Allow all HTML tags, not performing sanitization. Use it for debugging purposes only.</p>
    <div class="demo" v-sanitize.none="html"></div>

    <h3>Custom filter</h3>
    <p>Edit the box below, as JSON. Read <a href="https://github.com/punkave/sanitize-html" target="_blank">this</a> for more API details.</p>
    <div class="table">
      <div class="row">
        <div class="col">
          <textarea rows="5" v-model="editable_filter"></textarea>
          <button @click="update_filter()">Update filter</button>
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
import sanitize from '../directives/sanitize'

const filters = {
  all: {
    allowedTags: [],
    allowedAttributes: []
  },
  basic: sanitizeHtml.defaults,
  none: {
    allowedTags: false,
    allowedAttributes: false
  }
}

const html = `
<iframe src="https://www.vuejs.org"></iframe>
<p>This is a <strong>test</strong>.</p>
`

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
  directives: {
    sanitize,
  },
  methods: {
    filter_all() {
      this.filter = this.filters.all
    },
    filter_basic() {
      this.filter = this.filters.basic
    },
    filter_none() {
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

<style scoped>
.demo {
  background-color: #EEE;
  margin: 20px;
  padding: 20px;
}
textarea {
  margin: 20px;
  width: calc(100% - 40px);
}
@media screen and (max-width: 900px) {
  .col {
    width: 100%;
  }
}
@media screen and (min-width: 900px) {
  .table {
    display: table;
    width: 100%;
  }
  .row {
    display: table-row;
  }
  .col {
    display: table-cell;
    height: 100%;
    width: 33.3%;
    vertical-align: top;
  }
}
footer {
  background-color: #EEE;
  margin-top: 20px;
  padding: 10px;
}
</style>
