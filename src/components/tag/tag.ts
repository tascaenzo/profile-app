import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

import globalCss from "@/global.css?inline";

@customElement("tag-component")
export class Tag extends LitElement {
  static styles = [unsafeCSS(globalCss)];

  render() {
    return html` <div
      class="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-500"
    >
      <slot></slot>
    </div>`;
  }
}
