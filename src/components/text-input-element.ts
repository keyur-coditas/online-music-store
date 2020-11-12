import { html, LitElement, css } from 'lit-element';
import { customElement, property  } from 'lit-element/lib/decorators';
import {mediaQueries} from './media-queries';
import * as EVENTS from './constants';
@customElement('str-input')
export class storeInputElement extends LitElement {

     @property({type: String})
     ariaLabel;

     @property({type: String})
     inputType;

     @property({type: String})
     inputPlaceholder;

     @property({type: Boolean, reflect:false})
     isReadonly;

     @property({type: String})
     inputValue = '';


  
  static get styles() {
    return [
      css`
    .str-input {
        width: 20rem;
        height: 2rem;
        border: 1px solid #bdbdbd;
        border-radius: 5px;
        margin: 15px auto 0px 0px;
        padding-left: 10px;
    }
    `, mediaQueries
    ];
  }


  inputHandler(event) {
      const inputValueChanged = new CustomEvent(EVENTS.INPUT_CHANGED, {
        detail: {
            value: event.composedPath()[0].value
        },
    });
    this.dispatchEvent(inputValueChanged);
  }

  render(){
    let isReadonlyValue;
    if(this.isReadonly === 'true') {
      isReadonlyValue = true;
    }
    return html`<input aria-label="${this.ariaLabel}" class="str-input" type="${this.inputType}"
    placeholder="${this.inputPlaceholder}" @input=${this.inputHandler} .value="${this.inputValue}"
    ?readonly="${isReadonlyValue}"/>`;
  }
}