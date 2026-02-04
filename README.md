# Andrew Tiger

```
const store = createStore((set) => ({ count: 0 }));
```

```
store.subscribe((s) => console.log(s.count));
```

```
store.setState((s) => ({ count: s.count + 1 }));
```

Execução dos testes: `npm test`
