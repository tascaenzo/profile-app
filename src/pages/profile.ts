import { withoutShadowDOM } from "@/utils/without-shadow-dom";
import { customElement, state } from "lit/decorators.js";
import { LitElement, html, nothing } from "lit";

import "@components/profile-bio";
import "@components/profile-skill";
import "@components/work-experience";

@withoutShadowDOM
@customElement("profile-page")
export class ProfilePage extends LitElement {
  @state() selector = 0;

  render() {
    return html`
      <div class="flex flex-col p-0 pt-4 sm:p-4 text-gray-800 max-w-3xl">
        <div class="bg-gray-50 p-4 rounded-xl">
          <h1 class="h5 font-semibold mb-4">Benvenuti nella mia pagina</h1>
          <p class=" rounded-lg max-w-3xl">
            Sono entusiasta di condividere con voi la mia esperienza nel mondo
            dello sviluppo web e delle tecnologie. Nel corso degli anni, ho
            avuto l'opportunità di lavorare su progetti eccitanti e sfidanti,
            contribuendo al successo di team di sviluppo talentuosi. Qui
            troverete informazioni sulla mia esperienza, competenze e passioni.
            Scoprite di più su di me e il mio percorso nel mondo della
            programmazione!
          </p>
        </div>
        <hr class="mt-6 hidden md:block" />

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
          <button
            @click="${() => (this.selector = 2)}"
            class="${this.selector === 2 ? "btn" : "btn-outline"}"
          >
            work experiences
          </button>
        </div>

        ${this.selector === 0 ? html`<profile-bio />` : nothing}
        ${this.selector === 1 ? html`<profile-skill />` : nothing}
        ${this.selector === 2 ? html`<work-experience />` : nothing}
      </div>
    `;
  }
}
