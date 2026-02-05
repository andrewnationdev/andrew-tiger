# Andrew Tiger

This project is the MVP of a state management library inspired by Zustand written in TypeScript for both Vue and ReactJS frameworks.

Este projeto é o MVP (produto mínimo viável) de uma biblioteca de gerenciamento de estado inspirada pelo Zustand escrita em TypeScript para os frameworks Vue e ReactJS.

1- Use this to initialize a store:

```ts
const store = createStore((set) => ({ count: 0 }));
```

2- Use this to subscribe and listen to changes whenever the value changes:

```ts
store.subscribe((s) => console.log(s.count));
```

Setar o estado
```ts
store.setState((s) => ({ count: s.count + 1 }));
```

Execução dos testes: `npm test`
