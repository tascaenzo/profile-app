import { LitElement } from "lit";

export function withoutShadowDOM(target: { prototype: LitElement }): void {
  target.prototype["createRenderRoot"] = function (
    this: LitElement,
  ): Element | ShadowRoot {
    return this;
  };
}
