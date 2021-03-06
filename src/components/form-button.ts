import { html, LitElement, css } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';
import { mediaQueries } from './media-queries';

@customElement('str-form-btn')
export class storeFormButton extends LitElement {
  @property({ type: String })
  buttonText = 'click here';

  @property({ type: Boolean })
  isCardButton = false;

  @property({ type: Boolean })
  isFormButton = false;

  static get styles() {
    return [
      css`
        .str-btn {
          padding: 8px;
          border: 1px solid #c8c8c8;
          box-shadow: 0.5px 0.5px #c8c8c8;
          margin: 1rem;
          background-color: var(--btn-background);
          color: var(--btn-color);
        }
        .str-btn.active {
          transform: scale(0.98);
          /* Scaling button to 0.98 to its original size */
          -webkit-box-shadow: -1px -1px 5px -1px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: -1px -1px 5px -1px rgba(0, 0, 0, 0.75);
          box-shadow: -1px -1px 5px -1px rgba(0, 0, 0, 0.75);
        }
        .str-submit-btn {
          width: 8rem;
          background-color: var(--form-btn-background);
          color: var(--form-btn-color);
          padding: 8px;
          border: 1px solid #c8c8c8;
          box-shadow: 0.5px 0.5px #c8c8c8;
          margin: 1rem;
        }
        .str-card-buttons {
          width: 6rem;
          background-color: var(--form-btn-background);
          color: var(--form-btn-color);
          margin: 10px;
        }
      `,
      mediaQueries,
    ];
  }

  getFormButtonsHtml() {
    if (this.isCardButton) {
      return html`<button type="button" class="str-card-buttons str-btn">
        ${this.buttonText}
      </button>`;
    } else {
      return html`<button type="button" class="str-submit-btn">
        ${this.buttonText}
      </button>`;
    }
  }

  render() {
    if (this.isFormButton) {
      return this.getFormButtonsHtml();
    } else {
      return html`<button type="button" class="str-btn">
        ${this.buttonText}
      </button>`;
    }
  }
}
