/**
 * Adopts a stylesheet into the document. Call once at module level per CSS file.
 * @param cssText - Raw CSS, imported with `?raw`
 */
export function adoptStyles(cssText: string): void {
  const sheet = new CSSStyleSheet();

  sheet.replaceSync(cssText);
  document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
}
