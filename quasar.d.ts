import Vue from 'vue'
import { QuasarPluginOptions } from 'quasar'

declare module 'vue/types/vue' {
  interface Vue {
    $q: QuasarPluginOptions
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $q: QuasarPluginOptions
  }
}