import { html, LitElement, css } from 'lit-element';
import { customElement, property  } from 'lit-element/lib/decorators';

@customElement('str-input')
export class storeInputElement extends LitElement {

     @property()
     ariaLabel: string;

     @property()
     inputType: string;

     @property()
     inputPlaceholder: string;
  
  static get styles() {
    return css`
    .str-input {
        width: 20rem;
        height: 2rem;
        border: 1px solid #bdbdbd;
        border-radius: 5px;
        margin: 15px auto 0px 0px;
        padding-left: 10px;
    }
    `;
  }


  inputHandler(event) {
      const inputValueChanged = new CustomEvent('inputValueChanged', {
        detail: {
            value: event.composedPath()[0].value
        },
    });
    this.dispatchEvent(inputValueChanged)
  }

  render(){
    return html`<input aria-label="${this.ariaLabel}" class="str-input" type="${this.inputType}"
    placeholder="${this.inputPlaceholder}" @input=${this.inputHandler}/>`;
  }
}