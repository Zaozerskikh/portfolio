export interface ImageGridProps {
  pictures: string[];
  onPictureClick: (idx: number, gridY: number, gridHeight: number) => void;
}
