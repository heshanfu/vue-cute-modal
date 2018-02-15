import CuteModal from './Modal'

const DEFAULT_NAME = 'cute-modal'

const DEFAULT_OPTIONS = {
  body: 'cute-modal__body',
  container: 'cute-modal__container',
  footer: 'cute-modal__footer',
  header: 'cute-modal__header',
  overlay: 'cute-modal__overlay',
  transition: 'cm',
  width: '600px'
}

const Plugin = {
  install (Vue, options = {}) {
    let name = DEFAULT_NAME
    this.event = new Vue()

    if (options.component) {
      name = options.component
    }

    Vue.prototype.$cuteModal = {
      open (name) {
        Plugin.event.$emit('toggle', name)
      },

      hide (name) {
        Plugin.event.$emit('toggle', name)
      },

      options () {
        return Object.assign({}, DEFAULT_OPTIONS, options)
      }
    }

    Vue.component(name, CuteModal)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Plugin)
}

export default Plugin