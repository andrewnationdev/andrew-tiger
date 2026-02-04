export type Listener<T> = (state: T, prevState: T) => void;
export type State = object;
export type StateCreator<T extends State> = (
  set: (partial: T | ((state: T) => T)) => void
) => T;
