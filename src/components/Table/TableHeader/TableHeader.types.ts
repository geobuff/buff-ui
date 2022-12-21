export interface Action {
  name: string;
  callback: () => void;
}
