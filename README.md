# Andrew Tiger

Inicializar a store.
```ts
const store = createStore((set) => ({ count: 0 }));
```

Escutar mudanças e executar uma função toda vez que o valor mudar
```ts
store.subscribe((s) => console.log(s.count));
```

Setar o estado
```ts
store.setState((s) => ({ count: s.count + 1 }));
```

Execução dos testes: `npm test`
