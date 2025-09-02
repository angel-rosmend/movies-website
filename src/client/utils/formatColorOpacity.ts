const getAlphaOpacityFromPercentage = (percentage: number) => {
  const opacity = Math.floor(255 * (percentage / 100)).toString(16);
  return opacity.length === 1 ? `0${opacity}` : opacity;
};

/**
 * Formats a color by adding an alpha channel opacity value to it.
 * The opacity is calculated from the provided percentage.
 *
 * @param color - The base color to which the opacity will be added. This should be a hexadecimal color value.
 * @param percentage - The opacity percentage to be converted to an alpha channel value and added to the color.
 * @returns The color with the added alpha channel value.
 */
export const addAlphaChannelOpacity = (
  color: string,
  percentage: number
): string => {
  return `${color}${getAlphaOpacityFromPercentage(percentage)}`;
};

/**
 * Formats a color by adding an alpha channel opacity value to it.
 * The opacity is calculated from the provided percentage.
 *
 * @param color - The base color to which the opacity will be added. This should be a hexadecimal color value.
 * @param percentage - The opacity percentage to be converted to an alpha channel value and added to the color.
 * @returns The color with the added alpha channel value.
 */
export const fromHexToRgba = (color: string, percentage: number): string => {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${percentage / 100})`;
};
