import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { beTechnologies, feTechnologies } from "./data";
import { customElement } from "lit/decorators.js";
import { withoutShadowDOM } from "@/utils";
import { LitElement, html } from "lit";
import { t } from "i18next";

@customElement("profile-skill")
@withoutShadowDOM
export class ProfileSkill extends LitElement {
  protected render(): unknown {
    return html`
      <div class="flex-col">
        <h6 class="font-semibold pt-6">Backend skills:</h6>
        <div class="flex-col flex gap-4">
          ${unsafeHTML(t("profilePage.skillBe"))}
        </div>

        <h6 class="pt-4">Reference Stack:</h6>
        <div class="flex gap-4 py-2 flex-wrap">
          ${beTechnologies.map(
            (item) =>
              html`<a href=${item.site} target="_blank" class="badge"
                >${item.name}</a
              >`,
          )}
        </div>
        <h6 class="font-semibold pt-6">Frontend skills:</h6>
        <div class="flex-col flex gap-4">
          ${unsafeHTML(t("profilePage.skillFe"))}
        </div>

        <h6 class="pt-4">Reference Stack:</h6>
        <div class="flex gap-4 py-2 flex-wrap">
          ${feTechnologies.map(
            (item) =>
              html`<a href=${item.site} target="_blank" class="badge"
                >${item.name}</a
              >`,
          )}
        </div>
      </div>
    `;
  }
}
