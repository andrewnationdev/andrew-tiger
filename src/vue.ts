import { shallowRef, onScopeDispose } from 'vue';

export function useTigerVue<T, S = T>(
  store: {
    subscribe: (listener: (state: T) => void) => () => void;
    getState: () => T;
  },
  selector: (state: T) => S = (state => state as unknown as S)
) {
  const data = shallowRef(selector(store.getState()));

  const unsubscribe = store.subscribe((nextState) => {
    const nextSelection = selector(nextState);
    
    if (!Object.is(data.value, nextSelection)) {
      data.value = nextSelection;
    }
  });

  onScopeDispose(unsubscribe);

  return data;
}