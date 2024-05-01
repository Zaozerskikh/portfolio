export const calculateInitialPosition = (
  imageIdx: number,
  windowWidth: number,
  windowHeight: number,
  isDesktop: boolean,
  isMobile: boolean,
  gridY: number,
  imageAspectRatio: number,
  desktopSidePadding: number,
  mobileSidePadding: number,
  desktopGridGap: number,
  mobileGridGap: number
): { width: number, x: number, y: number } => {
  const sidePadding = !isDesktop ? mobileSidePadding : desktopSidePadding
  const gridGap = isMobile ? mobileGridGap : desktopGridGap
  const containerWidth = Math.min(1440, windowWidth)
  const initialImageWidth = (containerWidth - gridGap - sidePadding * 2) / 2
  const initialImageHeight = initialImageWidth / imageAspectRatio

  let x, y

  if (imageIdx % 4 == 0 || imageIdx % 4 == 2) {
    x = - containerWidth / 2 + initialImageWidth / 2 + sidePadding
  } else {
    x = containerWidth / 2 - initialImageWidth / 2 - sidePadding
  }

  if (imageIdx % 4 == 0 || imageIdx % 4 == 1) {
    y = - windowHeight / 2 + initialImageHeight / 2 + gridY
  } else {
    y = - windowHeight / 2 + initialImageHeight / 2 + gridY + initialImageHeight + gridGap
  }

  return { width: initialImageWidth, x: x, y: y }
}
