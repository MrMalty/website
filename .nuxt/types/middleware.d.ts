import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "F:/Sites/ellascreations/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}