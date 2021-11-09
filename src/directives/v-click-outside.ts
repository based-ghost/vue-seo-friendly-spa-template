import type { Directive } from 'vue';

const vClickOutside: Directive = {
  mounted(el, binding, vNode) {
    const { value: callback } = binding;

    if (typeof callback !== 'function') {
      const compName = vNode.component;
      const warnMsg = `[v-click-outside]: provided expression '${callback}' is not a function, but has to be ${compName ? `- Found in component '${compName}` : ''}`.trim();
      console.warn(warnMsg);
      return;
    }

    el.clickOutsideEvent = function (e) {
      e.stopPropagation();
      if (el !== e.target && !el.contains(e.target)) {
        callback(e);
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