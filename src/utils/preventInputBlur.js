// @flow

/**
 * Prevent the main input from blurring when a menu item or the clear button is
 * clicked. (#226 & #310)
 */
export default function preventInputBlur(e: SyntheticEvent<HTMLInputElement>) {
  e.preventDefault();
}
