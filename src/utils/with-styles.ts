import { LitElement, unsafeCSS } from "lit";

export function withStyles(localStyle: string) {
  return function (target: typeof LitElement) {
    const combinedStyles = unsafeCSS(localStyle);
    target.styles = combinedStyles;
  };
}
