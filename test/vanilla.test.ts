import { describe, it, expect, vi } from 'vitest';
import { createStore } from '../src/vanilla';

describe('Andrew Tiger - Vanilla', () => {
  it('deve atualizar o estado e notificar listeners', () => {
    const store = createStore((set) => ({ count: 0 }));
    const spy = vi.fn();

    store.subscribe(spy);
    store.setState({ count: 1 });

    expect(store.getState().count).toBe(1);
    expect(spy).toHaveBeenCalled();
  });
});

describe('Andrew Tiger - Otimização de Shallow Compare', () => {
  it('NÃO deve notificar listeners se os valores internos forem iguais (mesmo com nova referência)', () => {
    const store = createStore((set) => ({ 
      cidade: 'Ponta Grossa',
      preco: 48.5 
    }));

    const listenerSpy = vi.fn();
    store.subscribe(listenerSpy);

    store.setState({ cidade: 'Ponta Grossa', preco: 48.5 });

    expect(listenerSpy).not.toHaveBeenCalled();
    
    store.setState({ preco: 50.0 });
    expect(listenerSpy).toHaveBeenCalledTimes(1);
  });

  it('deve lidar corretamente com funções de atualização (set-state action)', () => {
    const store = createStore((set) => ({ count: 10 }));
    const spy = vi.fn();
    store.subscribe(spy);

    store.setState((s) => ({ count: 10 }));

    expect(spy).not.toHaveBeenCalled();
  });
});
