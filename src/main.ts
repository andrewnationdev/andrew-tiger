import { createStore } from './vanilla';

//@ts-ignore
const store = createStore((set) => ({ count: 0 }));
//@ts-ignore
store.subscribe((s) => console.log(s.count));

store.setState((s) => ({ count: s.count + 1 }));
store.setState((s) => ({ count: s.count + 1 }));
store.setState((s) => ({ count: s.count + 1 }));
store.setState((s) => ({ count: s.count + 1 }));
store.setState((s) => ({ count: s.count + 1 }));
