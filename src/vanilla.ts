import type { Listener } from './types';

/**
 * A função cria uma store para armazenar o estado.
 * @param {function(set: Function): T} initializer - A função que define o estado inicial
 * e recebe a função `set` para criar ações.
 * * @returns {Object} Um objeto contendo os métodos:
 * - `getState`: Retorna o estado atual.
 * - `setState`: Atualiza o estado e notifica os inscritos.
 * - `subscribe`: Adiciona um ouvinte para mudanças de estado.
 * * @example
 * const store = createStore((set) => ({ count: 0 }));
 * store.subscribe(s => console.log(s.count));
 */
export const createStore = <T>(
  initializer: (set: (partial: Partial<T> | ((state: T) => T)) => void) => T
) => {
  let state: T;

  const listeners = new Set<Listener<T>>();

  const getState = () => state;

  // Atualiza o estado
  const setState = (partial: Partial<T> | ((state: T) => T)) => {
    const nextState =
      typeof partial === 'function'
        ? (partial as (state: T) => T)(state)
        : partial;

    if (Object.is(nextState, state)) return;

    // Comparação do tipo Shallow
    const entries = Object.entries(nextState);
    const hasActualChanges = entries.some(
      ([key, value]) => !Object.is(state[key as keyof T], value)
    );

    if (hasActualChanges) {
      const previousState = state;
      state = Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };

  const subscribe = (listener: Listener<T>) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  state = initializer(setState);

  return { getState, setState, subscribe };
};
