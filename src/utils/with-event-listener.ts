import { LitElement } from "lit";

export function withEventListener(eventName: string, handlerName: string) {
  return function (target: typeof LitElement) {
    const originalConnectedCallback = target.prototype.connectedCallback;
    const originalDisconnectedCallback = target.prototype.disconnectedCallback;

    target.prototype.connectedCallback = function (this: LitElement) {
      originalConnectedCallback && originalConnectedCallback.call(this);
      window.addEventListener(
        eventName,
        this[handlerName as keyof LitElement] as EventListener,
      );
    };

    target.prototype.disconnectedCallback = function (this: LitElement) {
      originalDisconnectedCallback && originalDisconnectedCallback.call(this);
      window.removeEventListener(
        eventName,
        this[handlerName as keyof LitElement] as EventListener,
      );
    };
  };
}
