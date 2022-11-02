import { ref, computed, unref } from 'vue';
import { createSharedComposable } from '@/utils';

export const Theme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
} as const;

export type Theme = typeof Theme[keyof typeof Theme];

function useTheme() {
  const theme = ref<Theme>(Theme.PRIMARY);
  const themeCls = computed(() => `${unref(theme)}-theme`);

  const setTheme = (val: Theme) => {
    theme.value = val;
  };

  return {
    theme,
    setTheme,
    themeCls
  };
}

export const useSharedTheme = createSharedComposable(useTheme);