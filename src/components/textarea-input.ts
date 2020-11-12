import { html, LitElement, css } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';
import { mediaQueries } from './media-queries';
import * as EVENTS from './constants';
@customElement('str-textarea')
export class storeTextareaElement extends LitElement {
  @property({ type: String })
  ariaLabel;

  @property({ type: String })
  inputPlaceholder;

  @property({ type: String })
  isReadonly;

  @property({ type: String })
  inputValue = '';

  @property({ type: Number })
  rows = 10;

  @property({ type: Number })
  columns = 30;

  static get styles() {
    return [
      css`
        .str-textarea {
          width: 20rem;
          border: 1px solid #bdbdbd;
          border-radius: 5px;
          margin: 15px auto 0px 0px;
          padding-left: 10px;
        }
      `,
      mediaQueries,
    ];
  }

  inputHandler(event) {
    const inputValueChanged = new CustomEvent(EVENTS.INPUT_CHANGED, {
      detail: {
        value: event.composedPath()[0].value,
      },
    });
    this.dispatchEvent(inputValueChanged);
  }

  render() {
    let isReadonlyValue;
    if (this.isReadonly === 'true') {
      isReadonlyValue = true;
    }
    return html` <textarea
      aria-label="${this.ariaLabel}"
      class="str-textarea"
      cols="${this.columns}"
      rows="${this.rows}"
      @input=${this.inputHandler}
      placeholder="${this.inputPlaceholder}"
      ?readonly="${isReadonlyValue}"
      .value="${this.inputValue}"
    >
    </textarea>`;
  }
}
