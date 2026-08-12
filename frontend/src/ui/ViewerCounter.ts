export class ViewerCounter {
  private readonly el: HTMLElement;

  constructor(parent: HTMLElement) {
    this.el = document.createElement("div");
    this.el.className = "viewer-counter";
    this.el.textContent = "👥 — viewers";
    parent.appendChild(this.el);
  }

  setCount(count: number): void {
    this.el.textContent = `👥 ${count} viewers`;
  }
}
