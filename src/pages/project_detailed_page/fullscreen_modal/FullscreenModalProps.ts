export interface FullscreenModalProps {
  fullscreenState: FullscreenState;
  onClose: () => void;
  images: string[];
  aspectRatio?: number;
}

export interface FullscreenState {
  isOpened: boolean,
  initialIdx: number,
  gridY: number,
  gridHeight: number,
}
