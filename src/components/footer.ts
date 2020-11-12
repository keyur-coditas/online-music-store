import { html, LitElement, css, TemplateResult } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';

@customElement('str-footer')
export class storeFooterElement extends LitElement {
  @property({ type: String })
  footerText;

  static get styles() {
    return css`
      .str-footer {
        padding: 15px;
        font-size: 10px;
        background-color: var(--footer-background-color);
        color: var(--footer-color);
      }
    `;
  }

  render() {
    return html`
      <div class="str-footer">
        ${this.footerText}
      </div>
    `;
  }
}
