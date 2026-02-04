import { createStore } from './vanilla';

const store = createStore((set) => ({ count: 0 }));

store.subscribe((s) => console.log(s.count));

store.setState((s) => ({ count: s.count + 1 }));
store.setState((s) => ({ count: s.count + 1 }));
store.setState((s) => ({ count: s.count + 1 }));
store.setState((s) => ({ count: s.count + 1 }));
store.setState((s) => ({ count: s.count + 1 }));
