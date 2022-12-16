export interface DragResult {
  name: string;
}

export interface CollectResult {
  isDragging: boolean;
  handlerId: string | symbol | null;
}
