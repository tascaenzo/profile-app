import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { customElement, state } from "lit/decorators.js";
import { withoutShadowDOM } from "@/utils";
import { LitElement, html } from "lit";
import { bioTag } from "./data";
import { t } from "i18next";

@customElement("profile-bio")
@withoutShadowDOM
export class ProfileBio extends LitElement {
  @state() selector = 1;

  render() {
    return html`<div>
      <div class="flex pt-6 gap-4">
        <div class="flex-col">
          <div class="flex flex-col gap-4">
            ${unsafeHTML(t("profilePage.biography"))}
          </div>

          <h6 class="font-semibold pt-4">Aree di interesse:</h6>
          <div class="flex gap-4 py-2 flex-wrap">
            ${bioTag.map((item) => html`<span class="badge">${item}</span>`)}
          </div>
        </div>
      </div>
    </div>`;
  }
}
