import { ref, computed, unref } from 'vue';

export const Theme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
} as const;

export type Theme = typeof Theme[keyof typeof Theme];

const theme = ref<Theme>(Theme.PRIMARY);
const themeCls = computed(() => `${unref(theme)}-theme`);

const setTheme = (val: Theme): void => {
  theme.value = val;
};

export default function useTheme() {
  return {
    theme,
    setTheme,
    themeCls
  };
}