import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "main-layout"
declare module "F:/Sites/ellascreations/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}