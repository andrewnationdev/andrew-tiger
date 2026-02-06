import { useSyncExternalStore } from 'react';

/**
 * Hook para conectar componentes React ao Andrew Tiger.
 * * @param store - A instância da store criada com createStore.
 * @param selector - Uma função para selecionar apenas um pedaço do estado.
 * @returns O estado selecionado.
 */
export function useTiger<T, S = T>(
  store: {
    subscribe: (listener: (state: T, prevState: T) => void) => () => void;
    getState: () => T;
  },
  selector: (state: T) => S = (state => state as unknown as S)
) {
  return useSyncExternalStore(
    store.subscribe,
    () => selector(store.getState()),
    () => selector(store.getState())
  );
}