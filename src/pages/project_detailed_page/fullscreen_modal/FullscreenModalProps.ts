export interface FullscreenModalProps {
  fullscreenState: {
    isOpened: boolean,
    initialIdx: number
  };
  onClose: () => void;
  images: string[];
  aspectRatio?: number;
}
