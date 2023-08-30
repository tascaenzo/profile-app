import { customElement } from "lit/decorators.js";
import { withoutShadowDOM } from "@/utils";
import { LitElement, html } from "lit";

@customElement("profile-header")
@withoutShadowDOM
export class ProfileHeader extends LitElement {
  render() {
    return html`
      <div
        class="p-4 pb-8 border-b border-gray-200 flex items-center justify-between"
      >
        <div class="flex items-center">
          <img
            src="https://scontent-mxp2-1.xx.fbcdn.net/v/t1.18169-9/11227602_10205470475155199_1697663303956553402_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_GBIUpc7sf8AX_kP2fR&_nc_ht=scontent-mxp2-1.xx&oh=00_AfB28y8fUTAUJfuQxr8YiCbIglKwgLKPbdQISh4AlA5DYQ&oe=65131B48"
            alt="Enzo Tasca's Profile"
            class="rounded-full h-24 w-24 object-cover mr-4"
          />
          <div>
            <div class="text-xl font-semibold">Enzo Tasca</div>
            <div class="text-gray-600">
              <i class="fa fa-code text-green-700" aria-hidden="true"></i> Full
              Stack Developer
            </div>
          </div>
        </div>
        <div class="space-x-4">
          <a
            href="https://linkedin.com/in/your_username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              class="fab fa-linkedin text-gray-700 text-3xl hover:text-gray-500 transition-colors duration-200"
            ></i>
          </a>
          <a
            href="https://github.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              class="fab fa-github text-gray-700 text-3xl hover:text-gray-500 transition-colors duration-200"
            ></i>
          </a>
        </div>
      </div>
    `;
  }
}
