import { clampBuilder } from './clamp-builder.js';

const minSizePx = 16; // min size in px
const maxSizePx = 161; // max size in px
const minWidthPx = 1200; // min width in px
const maxWidthPx = 1440; // max width in px

window.onload = () =>
  console.log(
    'size: ',
    clampBuilder(minWidthPx, maxWidthPx, minSizePx, maxSizePx)
  );
