import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { customElement, state } from "lit/decorators.js";
import { withoutShadowDOM } from "@/utils";
import { LitElement, html } from "lit";
import { t } from "i18next";

import "@components/tag";

@customElement("profile-bio")
@withoutShadowDOM
export class ProfileBio extends LitElement {
  @state() selector = 0;

  bioTag = [
    "IA",
    "Innovazione Digitale",
    "Tecnologgia",
    "Eco Sostenibilità",
    "Web 3.0",
    "iot",
  ];

  render() {
    return html`<div>
      <div class="flex pt-4 gap-4">
        <button
          @click="${() => (this.selector = 0)}"
          class="${this.selector === 0 ? "btn" : "btn-outline"}"
        >
          about
        </button>
        <button
          @click="${() => (this.selector = 1)}"
          class="${this.selector === 1 ? "btn" : "btn-outline"}"
        >
          skills
        </button>
      </div>

      <p class="pt-4">
        ${this.selector === 0
          ? unsafeHTML(t("profilePage.biography"))
          : t("profilePage.skills")}
      </p>

      <div class="flex-col pt-4">
        <h6 class="font-semibold">Aree di interesse:</h6>
        <div class="flex gap-4 py-2 flex-wrap">
          ${this.bioTag.map((item) => html`<span class="badge">${item}</span>`)}
        </div>
      </div>
    </div>`;
  }
}
