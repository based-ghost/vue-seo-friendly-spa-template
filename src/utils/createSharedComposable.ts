import { onScopeDispose, effectScope, type EffectScope } from 'vue';

/**
 * Make a composable function usable with multiple Vue instances.
 */
export function createSharedComposable<Fn extends ((...args: any[]) => any)>(composable: Fn): Fn {
  let subscribers = 0;
  let state: ReturnType<Fn> | undefined;
  let scope: EffectScope | undefined;

  const dispose = () => {
    if (scope && --subscribers <= 0) {
      scope.stop();
      state = scope = undefined;
    }
  };

  return <Fn>((...args) => {
    subscribers++;
    if (!state) {
      scope = effectScope(true);
      state = scope.run(() => composable(...args));
    }
    onScopeDispose(dispose);

    return state;
  });
}