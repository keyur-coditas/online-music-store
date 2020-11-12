import { html, LitElement, css } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';
import { mediaQueries } from './media-queries';
import * as EVENTS from './constants';
@customElement('str-image-input')
export class storeImageInputElement extends LitElement {
  @property({ type: String })
  ariaLabel;

  @property({ type: Boolean })
  isReadonly;

  @property({ type: String })
  labelValue = 'Choose an image';

  static get styles() {
    return [
      css`
        .image-label {
          font-size: 12px;
          margin: 10px;
          display: block;
          color: #666666;
        }
      `,
      mediaQueries,
    ];
  }

  inputHandler(event) {
    const inputValueChanged = new CustomEvent(EVENTS.INPUT_CHANGED, {
      detail: {
        value: event.path[0].files[0],
      },
    });
    this.dispatchEvent(inputValueChanged);
  }

  render() {
    let isReadonlyValue;
    if (this.isReadonly === 'true') {
      isReadonlyValue = true;
    }
    return html`
      <label for="" class="image-label">${this.labelValue}</label>
      <input
        aria-label="${this.ariaLabel}"
        type="file"
        path="../assets/images/"
        ?readonly="${isReadonlyValue}"
        @change="${this.inputHandler}"
      />
    `;
  }
}
