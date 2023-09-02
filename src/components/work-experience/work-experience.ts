import { withoutShadowDOM } from "@/utils";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { workExperiences } from "./data";

@customElement("work-experience")
@withoutShadowDOM
export class WorkExperience extends LitElement {
  render() {
    return html`
      <div class="flex flex-col pt-6 gap-6">
        ${workExperiences.map(
          (item) =>
            html`<div class="w-full flex gap-1">
              <div class="flex p-1 h-full">
                ${item.logo
                  ? html`<img
                      src="${item.logo}"
                      alt="${item.name}"
                      class="w-20"
                    />`
                  : html`<div class="w-20"></div>`}
              </div>

              <div class="flex flex-col w-full">
                <div class="flex">
                  <span class="uppercase font-bold text-lg text-gray-800"
                    >${item.name}</span
                  >
                </div>

                <div class="flex justify-between">
                  <span class="text-gray-500">${item.place}</span>
                  <span class="font-bold">${item.time}</span>
                </div>

                <p class="pt-2 text-gray-700">${item.description}</p>
                <div class="pt-4 border-b border-gray-200"></div>
              </div>
            </div> `,
        )}
      </div>
    `;
  }
}
