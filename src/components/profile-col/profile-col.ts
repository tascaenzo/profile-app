import { customElement } from "lit/decorators.js";
import { withoutShadowDOM } from "@/utils";
import { LitElement, html } from "lit";

@customElement("profile-col")
@withoutShadowDOM
export class ProfileCol extends LitElement {
  render() {
    return html`
      <div class="flex pt-16 pb-16 flex-col h-screen justify-between">
        <div class="flex flex-col items-center">
          <img
            src="https://scontent-mxp2-1.xx.fbcdn.net/v/t1.18169-9/11227602_10205470475155199_1697663303956553402_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_GBIUpc7sf8AX_kP2fR&_nc_ht=scontent-mxp2-1.xx&oh=00_AfB28y8fUTAUJfuQxr8YiCbIglKwgLKPbdQISh4AlA5DYQ&oe=65131B48"
            alt="Enzo Tasca's Profile"
            class="h-36 w-36 object-cover mr-4 rounded-full"
          />

          <h1 class="h4 pt-1">Enzo Tasca</h1>
          <h6 class="h6 pt-4 ">
            <i class="fa fa-code text-green-700 pr-1" aria-hidden="true"></i>
            Full Stack Developer
          </h6>
          <span class="text-xl font-normal text-stone-500">Catania, Italy</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="space-x-6">
            <a
              href="https://www.linkedin.com/in/enzo-tasca-4265b4198/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="fab fa-linkedin text-gray-700 text-3xl hover:text-green-700 transition-colors duration-200"
              ></i>
            </a>
            <a
              href="https://github.com/tascaenzo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="fab fa-github text-gray-700 text-3xl hover:text-green-700 transition-colors duration-200"
              ></i>
            </a>
          </div>
          <a class="underline text-gray-700 cursor-pointer"
            >enzotasca.dev@gmail.com</a
          >
        </div>
      </div>
    `;
  }
}
