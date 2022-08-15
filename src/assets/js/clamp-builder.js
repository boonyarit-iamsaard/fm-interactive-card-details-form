/**
 * @param {number} minWidthPx The minimum width in px.
 * @param {number} maxWidthPx The maximum width in px.
 * @param {number} minSizePx The minimum size in px.
 * @param {number} maxSizePx The maximum size in px.
 * @return {string} The clamp value.
 */
export const clampBuilder = (minWidthPx, maxWidthPx, minSizePx, maxSizePx) => {
  const root = document.querySelector('html');
  const pixelsPerRem = Number(getComputedStyle(root).fontSize.slice(0, -2));

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;
  const minSize = minSizePx / pixelsPerRem;
  const maxSize = maxSizePx / pixelsPerRem;

  const slope = (maxSize - minSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minSize;

  return `clamp(${minSize}rem, ${yAxisIntersection.toFixed(4)}rem + ${(
    slope * 100
  ).toFixed(4)}vw, ${maxSize}rem);`;
};
