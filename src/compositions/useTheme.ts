import { ref, computed, unref } from 'vue';

export const Theme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
} as const;

export type Theme = typeof Theme[keyof typeof Theme];

const theme = ref<Theme>(Theme.PRIMARY);

export default function useTheme() {
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