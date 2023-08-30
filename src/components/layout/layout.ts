import { customElement, state } from "lit/decorators.js";
import { LitElement, html, unsafeCSS } from "lit";

/* components */
import "@components/profile-col";
import "@components/profile-header";

/* css */
import globalCss from "@/global.css?inline";
import style from "./styles.css?inline";
import iconCss from "@/icon.css?inline";

@customElement("layout-component")
export class LayoutComponent extends LitElement {
  static styles = [unsafeCSS(globalCss), unsafeCSS(iconCss), unsafeCSS(style)];
  @state() currentPath = window.location.pathname;

  render() {
    return html`
      <div class="layout-container">
        <!-- Sidebar -->
        <div class="sidebar">
          <profile-col></profile-col>
        </div>
        <!-- main content -->
        <main class="main-content">
          <profile-header class="sm:block md:hidden "></profile-header>
          <slot></slot>
        </main>
      </div>
    `;
  }
}
