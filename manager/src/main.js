/* eslint-disable no-useless-computed-key */
/* eslint-disable max-classes-per-file */
import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'
import Quill from 'quill'

import i18n from '@/libs/i18n'
import router from './router'
import store from './store'
import App from './App.vue'

import VueQuillEditor from '@/@core/components/quill-editor'
import GoogleAuth from '@/libs/google_oAuth'
// Global Components
import './global-components'

// 3rd party plugins
import '@axios'
import '@/libs/acl'
import '@/libs/portal-vue'
import '@/libs/clipboard'
import '@/libs/toastification'
import '@/libs/sweet-alerts'
import '@/libs/vue-select'
import '@/libs/tour'

// Axios Mock Adapter
import '@/@fake-db/db'
import JsonExcel from "vue-json-excel";

Vue.component("downloadExcel", JsonExcel);



import Config from '../config'

const gauthOption = {
  clientId: '690316576713-kt4584n5g77usrrh7hv6f4keedrq7202.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)

Vue.use(VueQuillEditor, {
  // modules: {
  //   toolbar: '#toolbar',
  //   table: true
  // },
  formats: [
    "background",
    "bold",
    "color",
    "font",
    "code",
    "italic",
    "link",
    "size",
    "strike",
    "script",
    "underline",
    "blockquote",
    // "header",
    "indent",
    // "list", <-- commented-out to suppress auto bullets
    "align",
    "direction",
    "code-block",
    "formula",
    "image",
    "video"
  ],
  theme: 'snow'
})

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)

// Feather font icon - For form-wizard
// * Shall remove it if not using font-icons of feather-icons - For form-wizard
require('@core/assets/fonts/feather/iconfont.css') // For form-wizard

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

const BlockEmbed = Quill.import('blots/block/embed')
class AudioBlot extends BlockEmbed {
    static create(value) {
        const node = super.create()
        node.setAttribute('src', value)
        node.setAttribute('controls', true)
        node.setAttribute('controlsList', 'nodownload')
        node.setAttribute('class', 'voice')
        return node
    }

    format(name, value) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    }

    static value(domNode) {
      return domNode.getAttribute('src');
    }
}
AudioBlot.blotName = 'audio'
AudioBlot.tagName = 'audio'
Quill.register(AudioBlot)

const Keyboard = Quill.import('modules/keyboard');

class CustomKeyboard extends Keyboard {
 static DEFAULTS = {
  ...Keyboard.DEFAULTS,
  bindings: {
   ...Keyboard.DEFAULTS.bindings,
    ['list autofill']: undefined,
  }
 }
}

Quill.register('modules/keyboard', CustomKeyboard);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
