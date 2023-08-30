import { withoutShadowDOM } from "@/utils/without-shadow-dom";
import { customElement, state } from "lit/decorators.js";
import { LitElement, html } from "lit";

import "@components/profile-bio";

@withoutShadowDOM
@customElement("profile-page")
export class ProfilePage extends LitElement {
  @state() index = 0;

  render() {
    return html`
      <div class="flex flex-col p-4 text-gray-800 max-w-3xl">
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
        <profile-bio class="max-w-3xl pt-4 "></profile-bio>
      </div>
    `;
  }
}
