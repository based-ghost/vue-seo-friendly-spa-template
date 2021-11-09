import type { Options } from 'vue-gtag-next';

const isEnabled = true;
const isProduction = process.env.NODE_ENV === 'production';
const useDebugger = isEnabled && !isProduction;

export const VUE_GTAG_OPTIONS: Options = {
  isEnabled,
  useDebugger,
  property: {
    id: 'UA-000000-01',
    params: {
      send_page_view: false,
    }
  }
};