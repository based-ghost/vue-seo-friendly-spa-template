import type { Directive } from 'vue';

const vClickOutside: Directive = {
  mounted(el, binding, vNode) {
    const { value: callbackFn } = binding;

    if (typeof callbackFn !== 'function') {
      const compName = vNode.component;
      const warnMsg =
        `[v-click-outside]: provided expression '${callbackFn}' is not a function, but has to be ${
          compName ? `- Found in component '${compName}` : ''
        }`.trim();
      console.warn(warnMsg);
      return;
    }

    el.clickOutsideEvent = function (e: Event) {
      e.stopPropagation();
      if (el !== e.target && !el.contains(e.target)) {
        callbackFn(e);
      }
    }

    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    if (el.clickOutsideEvent) {
      document.removeEventListener('click', el.clickOutsideEvent);
    }
  }
};

export default vClickOutside;